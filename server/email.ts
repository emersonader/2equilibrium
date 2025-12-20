import nodemailer from 'nodemailer';

const EMAIL_ENABLED = process.env.EMAIL_ENABLED === 'true';
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'admin@example.com';

// Create transporter (Gmail example)
const createTransporter = () => {
  if (!EMAIL_ENABLED) return null;

  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD // Use App Password for Gmail
    }
  });
};

const transporter = createTransporter();

// Email Templates
const emailTemplates = {
  welcome: (name: string) => ({
    subject: '🎉 Welcome to 2Equilibrium!',
    html: `
      <div style="font-family: serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #FAF8F3;">
        <div style="background-color: #0B1C33; color: white; padding: 30px; text-align: center;">
          <h1 style="margin: 0; font-size: 32px;">2EQUILIBRIUM</h1>
          <p style="color: #BFA15F; margin: 10px 0 0 0; font-size: 14px; letter-spacing: 2px;">GDS</p>
        </div>

        <div style="background-color: white; padding: 40px; margin-top: 20px;">
          <h2 style="color: #0B1C33; font-size: 28px; margin-bottom: 20px;">Welcome, ${name}!</h2>

          <p style="color: #666; line-height: 1.6; font-size: 16px;">
            You've just taken the first step towards transforming your lifestyle with Graziella's proven 2Equilibrium Method.
          </p>

          <p style="color: #666; line-height: 1.6; font-size: 16px;">
            This isn't just another program—this is direct access to Graziella's private world of high-performance living.
          </p>

          <div style="background-color: #E8E4DC; padding: 20px; margin: 30px 0; border-left: 4px solid #BFA15F;">
            <p style="margin: 0; font-style: italic; color: #0B1C33; font-size: 18px;">
              "I don't coach to maintain. I coach to transform."
            </p>
            <p style="margin: 10px 0 0 0; font-size: 12px; color: #BFA15F; letter-spacing: 2px;">— GRAZIELLA DE SOUZA</p>
          </div>

          <h3 style="color: #0B1C33; font-size: 20px; margin-top: 30px;">What's Next?</h3>
          <ul style="color: #666; line-height: 1.8;">
            <li>Submit your first weekly check-in</li>
            <li>Track your progress with our analytics</li>
            <li>Access Graziella's Private Vault</li>
            <li>Join the next group Q&A session</li>
          </ul>

          <div style="text-align: center; margin-top: 40px;">
            <a href="http://localhost:3000" style="background-color: #0B1C33; color: white; padding: 15px 40px; text-decoration: none; display: inline-block; font-size: 12px; letter-spacing: 2px; font-weight: bold;">
              ACCESS DASHBOARD
            </a>
          </div>
        </div>

        <div style="text-align: center; padding: 20px; color: #999; font-size: 12px;">
          <p>© 2025 Graziella De Souza. All Rights Reserved.</p>
        </div>
      </div>
    `
  }),

  newCheckIn: (memberName: string, memberEmail: string, weight: number, energy: number, notes: string) => ({
    subject: `📊 New Check-In from ${memberName}`,
    html: `
      <div style="font-family: serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #FAF8F3;">
        <div style="background-color: #0B1C33; color: white; padding: 30px; text-align: center;">
          <h1 style="margin: 0; font-size: 32px;">2EQUILIBRIUM</h1>
          <p style="color: #BFA15F; margin: 10px 0 0 0; font-size: 14px; letter-spacing: 2px;">ADMIN NOTIFICATION</p>
        </div>

        <div style="background-color: white; padding: 40px; margin-top: 20px;">
          <h2 style="color: #0B1C33; font-size: 28px; margin-bottom: 20px;">New Check-In Submitted</h2>

          <div style="background-color: #E8E4DC; padding: 20px; margin: 20px 0;">
            <h3 style="color: #0B1C33; font-size: 18px; margin: 0 0 10px 0;">Member Details</h3>
            <p style="margin: 5px 0; color: #666;"><strong>Name:</strong> ${memberName}</p>
            <p style="margin: 5px 0; color: #666;"><strong>Email:</strong> ${memberEmail}</p>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin: 30px 0;">
            <div style="background-color: #BFA15F; color: white; padding: 20px; text-align: center;">
              <p style="margin: 0; font-size: 12px; letter-spacing: 2px; opacity: 0.9;">WEIGHT</p>
              <p style="margin: 10px 0 0 0; font-size: 36px; font-weight: bold;">${weight} kg</p>
            </div>
            <div style="background-color: #0B1C33; color: white; padding: 20px; text-align: center;">
              <p style="margin: 0; font-size: 12px; letter-spacing: 2px; opacity: 0.9;">ENERGY</p>
              <p style="margin: 10px 0 0 0; font-size: 36px; font-weight: bold;">${energy}/10</p>
            </div>
          </div>

          ${notes ? `
          <div style="background-color: #FAF8F3; padding: 20px; margin: 20px 0; border-left: 4px solid #BFA15F;">
            <h4 style="color: #0B1C33; margin: 0 0 10px 0; font-size: 14px; letter-spacing: 2px;">MEMBER NOTES</h4>
            <p style="color: #666; margin: 0; font-style: italic; line-height: 1.6;">${notes}</p>
          </div>
          ` : ''}

          <div style="text-align: center; margin-top: 40px;">
            <a href="http://localhost:3000" style="background-color: #0B1C33; color: white; padding: 15px 40px; text-decoration: none; display: inline-block; font-size: 12px; letter-spacing: 2px; font-weight: bold;">
              VIEW IN ADMIN PANEL
            </a>
          </div>
        </div>

        <div style="text-align: center; padding: 20px; color: #999; font-size: 12px;">
          <p>This is an automated notification from your 2Equilibrium platform.</p>
        </div>
      </div>
    `
  }),

  newMember: (name: string, email: string, tier: string) => ({
    subject: `🎉 New Member Joined: ${name}`,
    html: `
      <div style="font-family: serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #FAF8F3;">
        <div style="background-color: #0B1C33; color: white; padding: 30px; text-align: center;">
          <h1 style="margin: 0; font-size: 32px;">2EQUILIBRIUM</h1>
          <p style="color: #BFA15F; margin: 10px 0 0 0; font-size: 14px; letter-spacing: 2px;">NEW MEMBER ALERT</p>
        </div>

        <div style="background-color: white; padding: 40px; margin-top: 20px;">
          <h2 style="color: #0B1C33; font-size: 28px; margin-bottom: 20px;">New Member Registered!</h2>

          <div style="background-color: #E8E4DC; padding: 30px; margin: 20px 0; text-align: center;">
            <div style="width: 80px; height: 80px; background-color: #BFA15F; border-radius: 50%; margin: 0 auto 20px; display: flex; align-items: center; justify-content: center; color: white; font-size: 32px; font-weight: bold;">
              ${name.charAt(0).toUpperCase()}
            </div>
            <h3 style="color: #0B1C33; font-size: 24px; margin: 0 0 10px 0;">${name}</h3>
            <p style="margin: 5px 0; color: #666;">${email}</p>
            <div style="margin-top: 20px;">
              <span style="background-color: #BFA15F; color: white; padding: 8px 20px; font-size: 12px; letter-spacing: 2px; font-weight: bold; text-transform: uppercase;">
                ${tier}
              </span>
            </div>
          </div>

          <div style="text-align: center; margin-top: 40px;">
            <a href="http://localhost:3000" style="background-color: #0B1C33; color: white; padding: 15px 40px; text-decoration: none; display: inline-block; font-size: 12px; letter-spacing: 2px; font-weight: bold;">
              VIEW IN ADMIN PANEL
            </a>
          </div>
        </div>
      </div>
    `
  })
};

// Send Email Function
export const sendEmail = async (to: string, template: { subject: string; html: string }) => {
  if (!EMAIL_ENABLED || !transporter) {
    console.log('📧 Email notifications disabled. Would have sent:', template.subject);
    return;
  }

  try {
    await transporter.sendMail({
      from: `"2Equilibrium" <${process.env.EMAIL_USER}>`,
      to,
      subject: template.subject,
      html: template.html
    });
    console.log(`✅ Email sent: ${template.subject} to ${to}`);
  } catch (error) {
    console.error('❌ Email send failed:', error);
  }
};

// Notification Functions
export const notifications = {
  async sendWelcomeEmail(name: string, email: string) {
    await sendEmail(email, emailTemplates.welcome(name));
  },

  async notifyAdminNewMember(name: string, email: string, tier: string) {
    await sendEmail(ADMIN_EMAIL, emailTemplates.newMember(name, email, tier));
  },

  async notifyAdminCheckIn(memberName: string, memberEmail: string, weight: number, energy: number, notes: string) {
    await sendEmail(ADMIN_EMAIL, emailTemplates.newCheckIn(memberName, memberEmail, weight, energy, notes));
  }
};
