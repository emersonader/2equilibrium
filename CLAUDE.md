# 2Equilibrium - Complete Project Documentation

## Project Overview

**2Equilibrium by Graziella De Souza** is a premium coaching platform built with React, TypeScript, and Node.js. This platform enables high-end fitness and lifestyle coaching with member management, progress tracking, and admin capabilities.

**Tech Stack (100% Free):**
- Frontend: React 19 + TypeScript + Vite
- Routing: React Router v6
- Backend: Node.js + Express
- Database: SQLite (file-based)
- Authentication: JWT
- Email: Nodemailer (Gmail)
- UI: Custom design with Lucide icons + Recharts

## Features

### 🌐 Multi-Page Website
- **Home Page (/)**: Welcome hero, philosophy, bio, features, pricing tiers
- **About Page (/about)**: Graziella's credentials, philosophy, certifications
- **Approach Page (/approach)**: 3-step process, FAQ section
- Responsive navigation with mobile hamburger menu
- Shared header and footer across all public pages
- URL-based routing with React Router v6
- Three membership levels: Circle ($97/mo), Mentorship ($297/mo), Private ($597/mo)
- Fully responsive design

### 👤 User Dashboard
- Personalized greeting with member name
- Weekly check-in system (weight, energy level, notes)
- Progress tracking with interactive charts
- Graziella's personal feedback cards
- Access to private vault and resources
- Weekly guidance videos

### 🔐 Authentication System
- Secure JWT-based authentication
- Email/password registration and login
- Password hashing with bcrypt
- Protected API routes
- Persistent sessions with localStorage

### 📊 Admin Dashboard
- **Overview Tab:**
  - Total members count
  - Total check-ins submitted
  - Weekly activity stats
  - Members breakdown by tier
  - Recent check-ins preview

- **Members Tab:**
  - Complete member list
  - Member details (name, email, tier, join date)
  - Total check-ins per member
  - Last activity tracking

- **Check-Ins Tab:**
  - Detailed view of all submissions
  - Weight and energy metrics
  - Personal notes from members
  - Filterable and searchable

### 📧 Email Notifications
- **Welcome emails** to new members (beautiful branded template)
- **Admin alerts** when new members join
- **Check-in notifications** when members submit data
- Gmail integration (500 emails/day free)
- Professional HTML email templates

### 💾 Database Schema
```sql
users:
  - id, email, password, name, tier, is_admin, created_at

check_ins:
  - id, user_id, weight, energy_level, notes, created_at

progress_data:
  - id, user_id, date, weight, energy_level

messages:
  - id, user_id, sender, message, created_at (for future features)
```

## Getting Started

### Prerequisites
- Node.js (v16+)
- npm or yarn

### Installation

1. **Clone and install:**
   ```bash
   cd 2equilibrium-by-graziella-de-souza
   npm install
   ```

2. **Start development servers:**
   ```bash
   npm run dev
   ```
   This runs both frontend (port 3000) and backend (port 3001) concurrently.

3. **Access the app:**
   - Frontend: http://localhost:3000/
   - Backend API: http://localhost:3001/

### Creating an Admin User

1. **Register a new account** at http://localhost:3000/

2. **Make yourself admin:**
   ```bash
   npm run make-admin your-email@example.com
   ```

3. **Log out and log back in** to see the "Admin Panel" button

## Project Structure

```
2equilibrium-by-graziella-de-souza/
├── components/
│   ├── AboutPage.tsx            # About Graziella page
│   ├── AdminDashboard.tsx       # Admin panel interface
│   ├── ApproachPage.tsx         # Our approach page
│   ├── AuthModal.tsx            # Login/register modal
│   ├── Dashboard.tsx            # Member dashboard
│   ├── Footer.tsx               # Shared footer component
│   ├── HomePage.tsx             # Home/landing page
│   ├── LandingPage.tsx          # Legacy landing page (deprecated)
│   ├── PublicLayout.tsx         # Layout wrapper for public pages
│   └── PublicNavigation.tsx     # Shared navigation component
├── context/
│   └── AuthContext.tsx          # Authentication state
├── data/
│   └── equilibrium.db           # SQLite database
├── scripts/
│   └── make-admin.ts            # Admin creation script
├── server/
│   ├── routes/
│   │   ├── admin.routes.ts      # Admin API endpoints
│   │   ├── auth.routes.ts       # Auth endpoints
│   │   ├── checkin.routes.ts    # Check-in endpoints
│   │   └── progress.routes.ts   # Progress data endpoints
│   ├── auth.ts                  # JWT auth logic
│   ├── database.ts              # Database schema
│   ├── email.ts                 # Email service
│   └── index.ts                 # Express server
├── services/
│   ├── adminApi.ts              # Admin API client
│   └── api.ts                   # User API client
├── .env.local                   # Environment variables
├── ADMIN.md                     # Admin features guide
├── CLAUDE.md                    # This file
├── EMAIL_SETUP.md               # Email configuration guide
└── package.json
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Create new account
- `POST /api/auth/login` - Login

### User Endpoints (Protected)
- `POST /api/checkins` - Submit check-in
- `GET /api/checkins/history` - Get user's check-ins
- `GET /api/progress` - Get progress data for charts

### Admin Endpoints (Admin Only)
- `GET /api/admin/members` - List all members
- `GET /api/admin/members/:id` - Get member details
- `GET /api/admin/checkins` - List all check-ins
- `GET /api/admin/stats` - Dashboard statistics

## Routing & Navigation

### Frontend Routes (React Router v6)

**Public Routes** (accessible to all):
- `/` - Home page (HomePage.tsx)
- `/about` - About Graziella page (AboutPage.tsx)
- `/approach` - Our approach page (ApproachPage.tsx)

**Protected Routes** (authentication required):
- `/dashboard` - User dashboard (Dashboard.tsx)
  - Shows "Admin Panel" button for admin users
  - Displays check-in form, progress charts, and feedback cards
- `/admin` - Admin panel (AdminDashboard.tsx)
  - Admin-only access (redirects non-admins to /dashboard)
  - Shows "My Dashboard" button to return to user view
  - Displays member management and analytics

**Route Protection:**
- PrivateRoute component wraps protected routes
- Unauthenticated users redirected to `/` (home)
- Non-admin users attempting `/admin` redirected to `/dashboard`
- Authentication state managed by AuthContext
- JWT token stored in localStorage

**Navigation Components:**
- **PublicNavigation**: Shared header with menu and auth button
  - Desktop: Horizontal menu with active state highlighting
  - Mobile: Hamburger menu with slide-in overlay
  - Shows: Home | About | Approach | Member Access
- **PublicLayout**: Wrapper for public pages (nav + content + footer)
- **Footer**: Shared footer with navigation links

## Available Scripts

```bash
npm run dev              # Start both frontend & backend
npm run dev:client       # Start frontend only (port 3000)
npm run dev:server       # Start backend only (port 3001)
npm run build            # Build for production
npm run make-admin       # Make user an admin
```

## Configuration

### Environment Variables (.env.local)

```env
# Email Configuration (Optional)
EMAIL_ENABLED=false
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
ADMIN_EMAIL=admin@example.com

# Legacy (not used)
GEMINI_API_KEY=PLACEHOLDER_API_KEY
```

### Email Setup (Optional)

See `EMAIL_SETUP.md` for detailed instructions on setting up Gmail notifications.

**Quick steps:**
1. Get Gmail App Password from Google Account
2. Update EMAIL_ENABLED=true in .env.local
3. Add your Gmail credentials
4. Restart server

## Design System

### Colors
- **Brand Navy:** `#0B1C33` - Primary text and buttons
- **Brand Gold:** `#BFA15F` - Accents and highlights
- **Brand Cream:** `#FAF8F3` - Background
- **Brand Blue:** `#E8E4DC` - Secondary backgrounds
- **Brand White:** `#FFFFFF` - Cards and surfaces

### Typography
- Headers: Serif font family
- Body: Sans-serif font family
- Uppercase tracking for labels (letter-spacing: 0.2em)

## Security Features

- ✅ Password hashing with bcrypt (10 rounds)
- ✅ JWT tokens with 7-day expiration
- ✅ Protected API routes with middleware
- ✅ Admin-only endpoints with role checking
- ✅ Input validation on all forms
- ✅ CORS enabled for local development
- ✅ SQL injection protection (parameterized queries)

## Data Flow

### User Registration Flow
1. User visits any public page (/, /about, /approach)
2. User clicks "Member Access" → AuthModal opens
3. User submits registration form → Frontend validates
4. API creates user with hashed password
5. JWT token generated and returned
6. Welcome email sent (if enabled)
7. Admin notified of new member (if enabled)
8. User navigated to `/dashboard` via React Router

### Check-In Flow
1. User fills check-in form
2. API validates and saves to database
3. Progress data updated for charts
4. Admin email notification sent (if enabled)
5. Success message shown

### Admin Access Flow
1. Admin user logs in normally → Redirected to `/dashboard`
2. "Admin Panel" button shown in dashboard (only for admins)
3. Click navigates to `/admin` route
4. AdminDashboard component loads with analytics
5. "My Dashboard" button available to return to `/dashboard`
6. Admin API calls protected by middleware (requireAdmin check)

## Future Features (Planned)

### Free Features
- [ ] CSV export for member data
- [ ] Advanced filtering and search
- [ ] Member progress photos
- [ ] Bulk email to members
- [ ] Custom tier creation
- [ ] Weekly/monthly reports
- [ ] Member messaging system

### Paid Integrations (Optional)
- [ ] Stripe payment processing
- [ ] Video call integration (Zoom/Google Meet)
- [ ] SMS notifications (Twilio)
- [ ] WhatsApp integration
- [ ] Cloud file storage (AWS S3)

## Database Management

### Backup Database
```bash
cp data/equilibrium.db data/equilibrium.db.backup
```

### Reset Database
```bash
rm data/equilibrium.db
npm run dev  # Will recreate with schema
```

### View Database
Use any SQLite viewer like:
- DB Browser for SQLite (Free desktop app)
- SQLite Viewer (VS Code extension)

## Troubleshooting

### Port Already in Use
```bash
# Kill processes on ports
lsof -ti:3000 | xargs kill -9
lsof -ti:3001 | xargs kill -9
npm run dev
```

### Database Errors
If you get "no such column" errors:
```bash
rm data/equilibrium.db
npm run dev  # Recreates database
```

### Email Not Sending
1. Check `EMAIL_ENABLED=true` in .env.local
2. Verify you're using Gmail App Password (not regular password)
3. Enable 2-Step Verification on Google Account
4. Check console logs for error messages

### Admin Panel Not Showing
1. Verify user is admin: `npm run make-admin your@email.com`
2. Log out completely
3. Log back in
4. Look for "Admin Panel" button in dashboard header

## Development Tips

### Hot Reload
- Frontend: Vite hot-reloads automatically
- Backend: tsx watch reloads on file changes

### Database Inspection
```bash
# Open SQLite CLI
sqlite3 data/equilibrium.db

# List tables
.tables

# View users
SELECT * FROM users;

# View check-ins
SELECT * FROM check_ins;
```

### Testing Email Templates
Set `EMAIL_ENABLED=false` and check console logs to see email content without actually sending.

## Performance

- **Frontend:** Lightning fast with Vite
- **Backend:** Express handles 1000s of requests/sec
- **Database:** SQLite perfect for <100k records
- **Email:** Async, non-blocking (won't slow down responses)

## Deployment Ready?

This app is ready to deploy to:
- **Vercel** (Frontend)
- **Railway/Render** (Backend + Database)
- **Netlify** (Frontend)

For production, you'll want to:
1. Move to PostgreSQL (from SQLite)
2. Add rate limiting
3. Set up SSL/HTTPS
4. Use production email service
5. Add monitoring (Sentry)

## Recent Updates

### January 2026 - Multi-Page Website Migration
- **Added React Router v6** for URL-based navigation
- **Created three public pages:**
  - Home: Welcome hero, philosophy, Graziella bio, features, pricing
  - About: Full credentials, certifications, philosophy
  - Approach: 3-step process, interactive FAQ
- **Built navigation system:**
  - PublicNavigation with desktop/mobile responsive menu
  - Active page highlighting
  - Shared PublicLayout wrapper
  - Footer with navigation links
- **Migrated content** from existing 2equilibrium.com website
- **Enhanced routing:**
  - Public routes: /, /about, /approach
  - Protected routes: /dashboard, /admin
  - PrivateRoute component for authentication
  - Seamless navigation between admin and user views
- **Fixed content typos** throughout all pages

## Credits

Built with Claude Code by Anthropic.

**Created for:** Emerson Ader
**Project:** 2Equilibrium by Graziella De Souza
**Date:** December 2024 - January 2026

---

## Quick Command Reference

```bash
# Development
npm run dev                              # Start everything

# Admin
npm run make-admin email@example.com     # Make user admin

# Database
rm data/equilibrium.db                   # Reset database

# Ports
localhost:3000                           # Frontend
localhost:3001                           # Backend API
```

---

**For questions or support, refer to:**
- `ADMIN.md` - Admin feature guide
- `EMAIL_SETUP.md` - Email configuration
- `README.md` - Basic setup instructions
