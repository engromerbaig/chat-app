import React from 'react';
import Header from './Header';
import MessageList from './MessageList';
import MessageInput from './MessageInput';
import UserList from './UserList';

const ChatWindow = ({ user }) => {
  return (
    <div className="flex h-screen">
      <UserList />
      <div className="flex flex-col flex-1">
        <Header user={user} />
        <MessageList />
        <MessageInput />
      </div>
    </div>
  );
};

export default ChatWindow;
