import admin from 'firebase-admin';

const { privateKey } = JSON.parse(process.env.FIREBASE_PRIVATE_KEY);

if (admin.apps.length === 0) {
  admin.initializeApp({
    credential: admin.credential.cert({
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: privateKey,
      projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    }),
  });
}
const db = admin.firestore();
const auth = admin.auth();

export { db, auth };
