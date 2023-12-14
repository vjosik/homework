import React from 'react';
import './mainContent.css';

const MainContent = ({ content }) => {
  return (
    <div className="main-content">
      <p>{content}</p>
    </div>
  );
}

export default MainContent;