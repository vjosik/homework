import React from 'react';

const TodoItem = ({ todo, onToggleTodo }) => {
    return (
        <li
            onClick={onToggleTodo}
            style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
        >
            {todo.text}
        </li>
    );
};

export default TodoItem;
