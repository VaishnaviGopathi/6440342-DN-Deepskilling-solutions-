import React, { useState } from 'react';
import GuestPage from './components/GuestPage';
import UserPage from './components/UserPage';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);

  let page;
  let button;

  if (isLoggedIn) {
    page = <UserPage />;
    button = <LogoutButton onClick={handleLogout} />;
  } else {
    page = <GuestPage />;
    button = <LoginButton onClick={handleLogin} />;
  }

  return (
    <div className="App">
      <h1>Flight Ticket Booking</h1>
      {page}
      {button}
    </div>
  );
}

export default App;
