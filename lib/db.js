import { doc, setDoc, addDoc, collection } from 'firebase/firestore';
import { db } from './firebase';

export async function createUser(uid, data) {
  await setDoc(doc(db, 'users', uid), { uid, ...data }, { merge: true });
}

export async function createSite(data) {
  const docRef = await addDoc(collection(db, 'sites'), { data });
  return docRef;
}

export async function createComment(data) {
  await addDoc(collection(db, 'comments'), { ...data });
}
