import React from 'react';
import TodoList from './components/TodoList';
import "./App.css"

const App = () => {
  return (
    <div className='mainDiv'>
      <h1>ToDo List </h1>
      <TodoList />
    </div>
  );
};

export default App;