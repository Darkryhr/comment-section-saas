import { doc, setDoc, addDoc, collection } from 'firebase/firestore';
import { db } from './firebase';

export function createUser(uid, data) {
  setDoc(doc(db, 'users', uid), { uid, ...data }, { merge: true });
}

export function createSite(data) {
  addDoc(collection(db, 'sites'), { data });
}
