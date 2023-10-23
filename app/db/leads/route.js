// Firestore に、ニュースレターを購読したLEAD情報を登録し、最初のステップレターを送る

import { NextRequest, NextResponse } from 'next/server'
import { getFirestore, collection, doc, getDocs, getDoc, addDoc, setDoc } from 'firebase/firestore'
import app from '@/libs/firebase'
const logger = require('firebase-functions/logger')

const firestore = getFirestore(app)

const default_letter_id = 'story-branding-001'

// Retrieve all or specified leads
export async function GET(req) {
  const status = req.nextUrl.searchParams.get('status')
  const subsc_id = req.nextUrl.searchParams.get('subsc_id')

  if (!subsc_id) {
    // retrieve all leads
    const ss = await getDocs(collection(firestore, 'leads'))
    const docs = await Promise.all(ss.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
    return NextResponse.json(docs)
  }
  // retrieve a specified lead
  const ss = await getDoc(doc(firestore, 'leads', subsc_id))
  const doc = await ss.data()
  return NextResponse.json([{ id: subsc_id, ...doc }])
}

/**
 subscribe or update a lead
 {
   email: 'e-mail address' -- string
   name: 'user name' -- string
   company: 'company name' -- string
   letter: 'next newsletter id to send' ( null | doc id )
   subscribed_at: -- timestamp
   sent_at: -- timestamp | null
   status: ( 'active' | 'pending' | 'unsubscribed' )
 }
*/
export async function POST(request, response) {
  const { subsc_id, email, name, company, letter_id, sent_time, status } = await request.json()
  try {
    if (!subsc_id) {
      // do subscribe
      if ((await count_leads(email)) > 0) {
        return NextResponse.json({ error: 'もう購読されています', email: email })
      }
      const added = await subscribe(email, letter_id)
      return NextResponse.json(added)
    }
    const sent_at = new Date(sent_time)
    const letter = doc(firestore, 'newsletters', letter_id)
    const updated = await update(subsc_id, { email, name, company, letter, sent_time })
    return NextResponse.json(updated)
  } catch (e) {
    return NextResponse.status(500).json({ error: 'failed to add/update lead document' })
  }
}

const count_leads = async (email) => {
  const ss = await getDocs(collection(firestore, 'leads'))
  const leads = ss.docs.map((lead) => lead.data()).filter((lead) => lead.email === email)

  return leads?.length > 0
}

const subscribe = async (email, letter_id) => {
  const adding = {
    subscribed_at: Date.now(),
    status: 'active',
    email: email,
    letter: doc(firestore, 'newsletters', letter_id || default_letter_id),
  }

  const added = await addDoc(collection(firestore, 'leads'), adding)
  return { id: added.id, ...adding }
}

const update = async (subsc_id, lead) => {
  if (!subsc_id || !lead) {
    return { error: 'no entry' }
  }
  const r = doc(firestore, 'leads', subsc_id)
  const ss = await getDoc(r)
  const doc = { ...ss.data(), ...lead }
  await setDoc(r, doc)
  return { id: subsc_id, ...doc }
}

const postFirstLetter = async (email) => {}
