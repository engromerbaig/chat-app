import React, { useState } from 'react';

const Login = ({ setUser }) => {
  const [username, setUsername] = useState('');

  const handleLogin = () => {
    setUser(username);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Login</h1>
      <input
        type="text"
        placeholder="Enter your username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="mb-4 px-4 py-2 border rounded-md w-80"
      />
      <button
        onClick={handleLogin}
        className="px-6 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
      >
        Login
      </button>
    </div>
  );
};

export default Login;
