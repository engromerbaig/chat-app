import React from 'react';
import Header from '../Header/Header';
import MessageList from '../MessageList/MessageList';
import MessageInput from '../MessageInput/MessageInput';
import UserList from '../UserList/UserList';

const ChatWindow = ({ user, messages, onSendMessage, users, onLogout }) => {
  return (
    <div className="flex h-screen">
      <UserList users={users} />
      <div className="flex flex-col flex-1">
        <Header user={user} onLogout={onLogout} />
        <MessageList messages={messages} />
        <MessageInput onSendMessage={onSendMessage} />
      </div>
    </div>
  );
};

export default ChatWindow;
