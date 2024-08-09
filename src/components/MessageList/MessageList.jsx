import React from 'react';

const MessageList = () => {
  const messages = [
    { id: 1, text: 'Hello!', sender: 'John' },
    { id: 2, text: 'Hi there!', sender: 'Jane' },
  ];

  return (
    <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
      {messages.map((msg) => (
        <div key={msg.id} className="mb-2">
          <span className="font-bold text-blue-600">{msg.sender}: </span>
          <span>{msg.text}</span>
        </div>
      ))}
    </div>
  );
};

export default MessageList;
