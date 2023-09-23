import { NextRequest, NextResponse } from 'next/server'
import { getFirestore, collection, getDocs, addDoc } from 'firebase/firestore'
import app from '@/libs/firebase'

const firestore = getFirestore(app)

// Retrieve all newsletters
export async function GET() {
  const ss = await getDocs(collection(firestore, 'newsletters'))
  const data = ss.docs.map((doc) => ({ id: doc.id, ...doc.data() }))

  return NextResponse.json(data)
}

// add a newsletter
export async function POST(request, response) {
  const newsletter = await request.json()
  try {
    const docRef = addDoc(collection(firestore, 'newsletter'), newsletter)
    return NextResponse.json({ id: docRef.id, ...newsletter })
  } catch (e) {
    return NextResponse.status(500).json({ error: 'failed to add newsletter document' })
  }
}
