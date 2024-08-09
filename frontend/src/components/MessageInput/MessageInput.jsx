import React, { useState } from 'react';

const MessageInput = ({ onSendMessage }) => {
  const [message, setMessage] = useState('');

  const sendMessage = () => {
    if (message.trim()) {
      onSendMessage(message);
      setMessage('');
    }
  };

  return (
    <div className="p-4 bg-gray-200">
      <input
        type="text"
        placeholder="Type your message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
        className="w-full px-4 py-2 border rounded-md"
      />
      <button
        onClick={sendMessage}
        className="mt-2 px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
      >
        Send
      </button>
    </div>
  );
};

export default MessageInput;
