import { Router, Response } from 'express';
import db from '../database';
import { authMiddleware, AuthRequest } from '../auth';

const router = Router();

router.get('/', authMiddleware, (req: AuthRequest, res: Response) => {
  try {
    const userId = req.userId;

    const progressData = db.prepare(
      `SELECT
        date,
        weight,
        energy_level as energy,
        strftime('%w', date) as dayOfWeek
      FROM progress_data
      WHERE user_id = ?
      ORDER BY date DESC
      LIMIT 7`
    ).all(userId);

    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const formattedData = progressData.reverse().map((row: any) => ({
      day: dayNames[parseInt(row.dayOfWeek)],
      weight: row.weight,
      energy: row.energy_level
    }));

    res.json(formattedData);
  } catch (error) {
    console.error('Progress data error:', error);
    res.status(500).json({ error: 'Failed to fetch progress data' });
  }
});

export default router;
