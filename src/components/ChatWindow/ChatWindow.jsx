import React from 'react';
import Header from '../Header/Header';
import MessageList from '../MessageList/MessageList';
import MessageInput from '../MessageInput/MessageInput';
import UserList from '../UserList/UserList';

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
