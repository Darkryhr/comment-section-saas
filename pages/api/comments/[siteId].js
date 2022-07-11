import { getAllComments } from '@lib/db-admin';
import { db } from '@lib/firebase-admin';

export default async function handler(req, res) {
  const siteId = req.query.siteId;
  const { comments, error } = await getAllComments(siteId);

  if (error) {
    res.status(500).json({ error });
  }

  res.status(200).json({ feedback });
}
