import React, { useState } from 'react';
import Login from './components/Login/Login';
import ChatWindow from './components/ChatWindow/ChatWindow';

function App() {
  const [user, setUser] = useState(null);
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState(['John', 'Jane', 'Doe']);

  const handleSendMessage = (messageText) => {
    const newMessage = {
      id: messages.length + 1,
      text: messageText,
      sender: user,
    };
    setMessages([...messages, newMessage]);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div className="App">
      {user ? (
        <ChatWindow
          user={user}
          messages={messages}
          onSendMessage={handleSendMessage}
          users={users}
          onLogout={handleLogout}
        />
      ) : (
        <Login setUser={setUser} />
      )}
    </div>
  );
}

export default App;
