import React, { useState } from 'react';
import LandingPage from './components/LandingPage';
import Dashboard from './components/Dashboard';

const App: React.FC = () => {
  // Simple state to simulate authentication flow for demonstration
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      {isLoggedIn ? (
        <Dashboard />
      ) : (
        <LandingPage onLogin={() => setIsLoggedIn(true)} />
      )}
    </>
  );
};

export default App;