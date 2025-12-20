import { Router, Response } from 'express';
import db from '../database';
import { authMiddleware, AuthRequest } from '../auth';

const router = Router();

// Middleware to check if user is admin
const adminMiddleware = (req: AuthRequest, res: Response, next: any) => {
  const userId = req.userId;
  const user = db.prepare('SELECT is_admin FROM users WHERE id = ?').get(userId) as any;

  if (!user || !user.is_admin) {
    return res.status(403).json({ error: 'Access denied. Admin only.' });
  }

  next();
};

// Get all members
router.get('/members', authMiddleware, adminMiddleware, (req: AuthRequest, res: Response) => {
  try {
    const members = db.prepare(`
      SELECT
        id,
        name,
        email,
        tier,
        created_at,
        (SELECT COUNT(*) FROM check_ins WHERE user_id = users.id) as total_checkins,
        (SELECT MAX(created_at) FROM check_ins WHERE user_id = users.id) as last_checkin
      FROM users
      WHERE is_admin = 0
      ORDER BY created_at DESC
    `).all();

    res.json(members);
  } catch (error) {
    console.error('Error fetching members:', error);
    res.status(500).json({ error: 'Failed to fetch members' });
  }
});

// Get all check-ins
router.get('/checkins', authMiddleware, adminMiddleware, (req: AuthRequest, res: Response) => {
  try {
    const limit = parseInt(req.query.limit as string) || 50;

    const checkins = db.prepare(`
      SELECT
        check_ins.*,
        users.name as user_name,
        users.email as user_email
      FROM check_ins
      JOIN users ON check_ins.user_id = users.id
      ORDER BY check_ins.created_at DESC
      LIMIT ?
    `).all(limit);

    res.json(checkins);
  } catch (error) {
    console.error('Error fetching check-ins:', error);
    res.status(500).json({ error: 'Failed to fetch check-ins' });
  }
});

// Get member details
router.get('/members/:id', authMiddleware, adminMiddleware, (req: AuthRequest, res: Response) => {
  try {
    const memberId = req.params.id;

    const member = db.prepare('SELECT id, name, email, tier, created_at FROM users WHERE id = ?').get(memberId);

    if (!member) {
      return res.status(404).json({ error: 'Member not found' });
    }

    const checkins = db.prepare(`
      SELECT * FROM check_ins
      WHERE user_id = ?
      ORDER BY created_at DESC
    `).all(memberId);

    const progress = db.prepare(`
      SELECT * FROM progress_data
      WHERE user_id = ?
      ORDER BY date DESC
      LIMIT 30
    `).all(memberId);

    res.json({
      member,
      checkins,
      progress
    });
  } catch (error) {
    console.error('Error fetching member details:', error);
    res.status(500).json({ error: 'Failed to fetch member details' });
  }
});

// Get dashboard stats
router.get('/stats', authMiddleware, adminMiddleware, (req: AuthRequest, res: Response) => {
  try {
    const totalMembers = db.prepare('SELECT COUNT(*) as count FROM users WHERE is_admin = 0').get() as any;
    const totalCheckins = db.prepare('SELECT COUNT(*) as count FROM check_ins').get() as any;
    const recentCheckins = db.prepare('SELECT COUNT(*) as count FROM check_ins WHERE created_at > datetime("now", "-7 days")').get() as any;
    const membersByTier = db.prepare(`
      SELECT tier, COUNT(*) as count
      FROM users
      WHERE is_admin = 0
      GROUP BY tier
    `).all();

    res.json({
      totalMembers: totalMembers.count,
      totalCheckins: totalCheckins.count,
      recentCheckins: recentCheckins.count,
      membersByTier
    });
  } catch (error) {
    console.error('Error fetching stats:', error);
    res.status(500).json({ error: 'Failed to fetch stats' });
  }
});

export default router;
