import React from 'react';
import './sidebar.css'

const Sidebar = ({ onSidebarItemClick }) => {
  const handleItemClick = (content) => {
    onSidebarItemClick(content);
  };

  return (
    <div className="sidebar">
      <ul>
        <li onClick={() => handleItemClick('Зміст 1')}>Пункт 1</li>
        <li onClick={() => handleItemClick('Зміст 2')}>Пункт 2</li>
        <li onClick={() => handleItemClick('Зміст 3')}>Пункт 3</li>
      </ul>
    </div>
  );
}

export default Sidebar;