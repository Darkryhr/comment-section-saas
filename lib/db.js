import { doc, setDoc } from 'firebase/firestore';
import { db } from './firebase';

export function createUser(uid, data) {
  setDoc(doc(db, 'users', uid), { uid, ...data }, { merge: true });
}
