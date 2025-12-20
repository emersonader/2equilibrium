import Database from 'better-sqlite3';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const db = new Database(path.join(__dirname, '../data/equilibrium.db'));

const email = process.argv[2];

if (!email) {
  console.error('Usage: tsx scripts/make-admin.ts <email>');
  console.error('Example: tsx scripts/make-admin.ts admin@example.com');
  process.exit(1);
}

try {
  const result = db.prepare('UPDATE users SET is_admin = 1 WHERE email = ?').run(email);

  if (result.changes === 0) {
    console.error(`❌ No user found with email: ${email}`);
    process.exit(1);
  }

  console.log(`✅ Successfully made ${email} an admin!`);
  console.log('They will see the "Admin Panel" button on their next login.');
} catch (error) {
  console.error('Error:', error);
  process.exit(1);
}
