import React from 'react';

const Header = ({ user, onLogout }) => {
  return (
    <header className="p-4 bg-blue-600 text-white flex justify-between items-center">
      <h1 className="text-lg font-bold">Welcome, {user}!</h1>
      <button
        onClick={onLogout}
        className="px-4 py-2 bg-red-500 rounded-md hover:bg-red-600"
      >
        Logout
      </button>
    </header>
  );
};

export default Header;
