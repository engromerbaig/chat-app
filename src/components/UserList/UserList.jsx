import React from 'react';

const UserList = () => {
  const users = ['John', 'Jane', 'Doe'];

  return (
    <div className="w-64 p-4 bg-gray-100 border-r">
      <h2 className="text-xl font-bold mb-4">Users</h2>
      <ul>
        {users.map((user, index) => (
          <li key={index} className="mb-2">
            <button className="w-full text-left px-4 py-2 bg-white hover:bg-gray-200 rounded-md">
              {user}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
