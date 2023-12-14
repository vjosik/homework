
import './App.css';
import React, { useState } from 'react';
import Header from './pages/header/Header';
import Sidebar from './pages/sidebar/Sidebar';
import MainContent from './pages/maincontent/MainContent';

const App = () => {
  const [content, setContent] = useState('Welcome 😄');

  const handleSidebarItemClick = (newContent) => {
    setContent(newContent);
  };

  return (
    <div className="app">
      <Header />
      <div className="app__body">
        <Sidebar onSidebarItemClick={handleSidebarItemClick} />
        <MainContent content={content} />
      </div>
    </div>
  );
}

export default App;
