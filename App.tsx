import React, { useState } from 'react';
import LandingPage from './components/LandingPage';
import Dashboard from './components/Dashboard';
import AdminDashboard from './components/AdminDashboard';
import { useAuth } from './context/AuthContext';

const App: React.FC = () => {
  const { isAuthenticated, user } = useAuth();
  const [showAdmin, setShowAdmin] = useState(false);

  if (!isAuthenticated) {
    return <LandingPage />;
  }

  // If user is admin and admin view is toggled
  if (user?.isAdmin && showAdmin) {
    return <AdminDashboard />;
  }

  // Regular user dashboard (with admin toggle if admin)
  return <Dashboard onAdminToggle={user?.isAdmin ? () => setShowAdmin(!showAdmin) : undefined} />;
};

export default App;