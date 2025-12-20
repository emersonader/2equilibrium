import express from 'express';
import cors from 'cors';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import authRoutes from './routes/auth.routes';
import checkinRoutes from './routes/checkin.routes';
import progressRoutes from './routes/progress.routes';
import adminRoutes from './routes/admin.routes';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

const dataDir = path.join(__dirname, '../data');
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/checkins', checkinRoutes);
app.use('/api/progress', progressRoutes);
app.use('/api/admin', adminRoutes);

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: '2Equilibrium API is running' });
});

app.listen(PORT, () => {
  console.log(`🚀 2Equilibrium API running on http://localhost:${PORT}`);
});

export default app;
