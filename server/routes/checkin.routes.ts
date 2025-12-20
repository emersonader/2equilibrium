import { Router, Response } from 'express';
import db from '../database';
import { authMiddleware, AuthRequest } from '../auth';
import { notifications } from '../email';

const router = Router();

router.post('/', authMiddleware, (req: AuthRequest, res: Response) => {
  try {
    const { weight, energyLevel, notes } = req.body;
    const userId = req.userId;

    if (!weight || !energyLevel) {
      return res.status(400).json({ error: 'Weight and energy level are required' });
    }

    const result = db.prepare(
      'INSERT INTO check_ins (user_id, weight, energy_level, notes) VALUES (?, ?, ?, ?)'
    ).run(userId, weight, energyLevel, notes || '');

    const today = new Date().toISOString().split('T')[0];
    db.prepare(
      'INSERT OR REPLACE INTO progress_data (user_id, date, weight, energy_level) VALUES (?, ?, ?, ?)'
    ).run(userId, today, weight, energyLevel);

    // Get user info and notify admin (async, don't block response)
    const user = db.prepare('SELECT name, email FROM users WHERE id = ?').get(userId) as any;
    if (user) {
      notifications.notifyAdminCheckIn(user.name, user.email, weight, energyLevel, notes || '').catch(console.error);
    }

    res.json({
      success: true,
      checkInId: result.lastInsertRowid
    });
  } catch (error) {
    console.error('Check-in error:', error);
    res.status(500).json({ error: 'Failed to save check-in' });
  }
});

router.get('/history', authMiddleware, (req: AuthRequest, res: Response) => {
  try {
    const userId = req.userId;

    const checkIns = db.prepare(
      'SELECT * FROM check_ins WHERE user_id = ? ORDER BY created_at DESC LIMIT 20'
    ).all(userId);

    res.json(checkIns);
  } catch (error) {
    console.error('Check-in history error:', error);
    res.status(500).json({ error: 'Failed to fetch check-ins' });
  }
});

export default router;
