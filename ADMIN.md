# Admin Features Guide

## Making a User an Admin

To give admin access to a user account:

```bash
npm run make-admin <email>
```

Example:
```bash
npm run make-admin admin@example.com
```

## Admin Dashboard Features

Once you're logged in as an admin, you'll see an **"Admin Panel"** button on your dashboard.

### Overview Tab
- Total members count
- Total check-ins submitted
- This week's check-ins
- Members breakdown by tier (Circle, Mentorship, Private)
- Latest check-ins preview

### Members Tab
- Complete list of all registered members
- See member details: name, email, tier, total check-ins
- Join date for each member
- Sortable table view

### Recent Check-Ins Tab
- Detailed view of all member check-ins
- See weight, energy levels, and personal notes
- Filter by date and member
- Export capabilities (coming soon)

## Admin Access Control

- Admin status is stored in the database (`is_admin` flag)
- Admin users can switch between regular user view and admin panel
- All admin routes are protected with middleware
- Non-admin users cannot access admin endpoints

## Future Features (All Free!)

- [ ] Email notifications for new check-ins
- [ ] Export member data to CSV
- [ ] Member progress charts
- [ ] Send messages to members
- [ ] Bulk operations
- [ ] Custom tier management
