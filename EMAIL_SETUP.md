# Email Notifications Setup Guide

Email notifications are **100% FREE** using Gmail! Follow these steps to enable them.

## Step 1: Get Gmail App Password

1. Go to your Google Account: https://myaccount.google.com/
2. Navigate to **Security** → **2-Step Verification** (enable if not already)
3. Scroll down to **App passwords**
4. Create a new app password:
   - App: Mail
   - Device: Other (Custom name) → "2Equilibrium"
5. **Copy the 16-character password**

## Step 2: Configure .env.local

Open `.env.local` and update these values:

```env
EMAIL_ENABLED=true
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=xxxx xxxx xxxx xxxx  # Your 16-char app password
ADMIN_EMAIL=emersonader@hotmail.com
```

## Step 3: Restart Server

```bash
# Kill current server (Ctrl+C)
npm run dev
```

## What Emails Will Be Sent?

### 1. Welcome Email (to new members)
- Sent when someone registers
- Beautiful branded template
- Links to dashboard

### 2. New Member Alert (to you)
- Notification when someone joins
- Shows member details and tier
- Link to admin panel

### 3. Check-In Notification (to you)
- Sent when members submit check-ins
- Shows weight, energy, and notes
- Link to admin panel

## Testing Email Setup

1. Create a test account
2. Check your inbox for welcome email
3. Submit a check-in
4. Check admin email for notifications

## Free Tier Limits

**Gmail Free Account:**
- **500 emails/day**
- More than enough for a growing coaching business
- Completely free forever

## Troubleshooting

### "Invalid login" error
- Make sure you're using an **App Password**, not your regular Gmail password
- Enable 2-Step Verification first

### Not receiving emails
- Check spam folder
- Verify `EMAIL_ENABLED=true`
- Check console logs for errors

### Want to disable emails?
Set `EMAIL_ENABLED=false` in `.env.local`

## Alternative Free Options

Don't want to use Gmail? Other free options:

1. **Resend** - 3,000 emails/month free
2. **SendGrid** - 100 emails/day free
3. **MailerSend** - 12,000 emails/month free

Just ask if you want me to set up a different provider!
