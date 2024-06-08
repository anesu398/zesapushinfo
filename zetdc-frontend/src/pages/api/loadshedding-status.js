// pages/api/loadshedding-status.js
import { loadsheddingStatuses } from '../../data/loadsheddingStatuses';

export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json(loadsheddingStatuses);
  } else if (req.method === 'POST') {
    // Handle POST request
    const newStatus = req.body;
    loadsheddingStatuses.push(newStatus);
    res.status(201).json(newStatus);
  } else {
    res.status(405).end();
  }
}
