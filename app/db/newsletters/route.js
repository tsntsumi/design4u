import { NextRequest, NextResponse } from 'next/server'
import { getFirestore, collection, doc, getDocs, getDoc, addDoc, setDoc } from 'firebase/firestore'
import app from '@/libs/firebase'

const firestore = getFirestore(app)

// Retrieve all or specified newsletters
export async function GET(req) {
  const letter_id = req.nextUrl.searchParams.get('letter_id')
  if (!letter_id) {
    const ss = await getDocs(collection(firestore, 'newsletters'))
    const docs = await Promise.all(ss.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
    return NextResponse.json(docs)
  }
  // retrieve a specified letter
  const ss = await getDoc(doc(firestore, 'newsletters', letter_id))
  const d = await ss.data()
  return NextResponse.json([{ id: letter_id, ...d }])
}

/**
   add a newsletter:
   {
     url: url to nl as string | null,
     next: nl id as string | null
   }
 */
export async function POST(request, response) {
  const { letter_id, url, next_id } = await request.json()
  const next = !next_id ? null : doc(firestore, 'newsletters', next_id)
  try {
    if (!letter_id) {
      // add new letter
      const added = await addDoc(collection(firestore, 'newsletters'), {
        url,
        next,
      })
      return NextResponse.json(added)
    }
    // update specified letter
    const r = doc(firestore, 'newsletters', letter_id)
    const ss = await getDoc(r)
    const doc = { ...ss.data, url, next }
    await setDoc(r, doc)
    return NextResponse.json({ id: letter_id, ...doc })
  } catch (e) {
    return NextResponse.status(500).json({ error: 'failed to add/update newsletter document' })
  }
}
