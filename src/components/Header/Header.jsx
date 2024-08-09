import React from 'react';

const Header = ({ user }) => {
  return (
    <header className="p-4 bg-blue-600 text-white">
      <h1 className="text-lg font-bold">Welcome, {user}!</h1>
    </header>
  );
};

export default Header;
