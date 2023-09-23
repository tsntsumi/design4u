// Firestore に、ニュースレターを購読したLEAD情報を登録し、最初のステップレターを送る

import { NextRequest, NextResponse } from 'next/server'
import { getFirestore, collection, doc, getDocs, getDoc, addDoc, setDoc } from 'firebase/firestore'
import app from '@/libs/firebase'
const logger = require('firebase-functions/logger')

const firestore = getFirestore(app)

const mergeLetter = async (id, lead) => {
  if (!lead || !lead.letter) {
    return { id, ...lead }
  }
  const ss = await getDoc(lead.letter)
  if (!ss) {
    return lead
  }
  const letter = ss.data()
  const next = letter?.next?.id
  delete lead.letter
  return { id, ...lead, ...letter, next }
}

// Retrieve all leads
export async function GET(req) {
  const status = req.nextUrl.searchParams.get('status')
  const subscid = req.nextUrl.searchParams.get('subscid')

  if (!subscid) {
    const ss = await getDocs(collection(firestore, 'leads'))
    const merged = await Promise.all(
      ss.docs.map(async (doc) => await mergeLetter(doc.id, doc.data()))
    )
    return NextResponse.json(merged)
  } else {
    const ss = await getDoc(doc(firestore, 'leads', subscid))
    const data = ss.data()
    const merged = await mergeLetter(subscid, ss.data())

    return NextResponse.json(merged)
  }
}

export async function POST(request, response) {
  const lead = await request.json()
  try {
    if (!lead.subscid) {
      // do subscribe
      if (await subscribed(lead.email)) {
        return NextResponse.json({ error: 'もう購読されています', email: lead.email })
      }
      const added = await subscribe(lead.email, lead.letterid || 'stepmail-001')
      return NextResponse.json(added)
    }
    const { subscid, sent_at, letter } = lead
    delete lead.subscid
    lead.sent_at = new Date(sent_at)
    lead.letter = doc(firestore, 'newsletter', letter)
    const updated = await updateLead(subscid, lead)
    return NextResponse.json(updated)
  } catch (e) {
    return NextResponse.status(500).json({ error: 'failed to add lead document' })
  }
}

const subscribed = async (email) => {
  const ss = await getDocs(collection(firestore, 'leads'))
  const leads = ss.docs.map((lead) => lead.data()).filter((lead) => lead.email === email)

  return leads?.length > 0
}

const subscribe = async (email, letterid) => {
  const adding = {
    subscribed_at: Date.now(),
    status: 'active',
    email: email,
    letter: doc(firestore, 'newsletters', letterid),
  }

  const added = await addDoc(collection(firestore, 'leads'), adding)
  return { id: added.id, ...adding }
}

const updateLead = async (subscid, lead) => {
  if (!subscid || !lead) {
    return { error: 'no entry' }
  }
  const r = doc(firestore, 'leads', subscid)
  const ss = await getDoc(r)
  const d = { ...ss.data(), ...lead }
  await setDoc(r, d)
  return { id: subscid, ...d }
}

const postFirstLetter = async (email) => {}
