import React, { useState } from 'react';
import TodoItem from './TodoItem';
import '../style/TodoList.css'

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');

    const handleToggleTodo = (index) => {
        const newTodos = [...todos];
        newTodos[index].completed = !newTodos[index].completed;
        setTodos(newTodos);
    };

    const handleAddTodo = () => {
        const newTodos = [...todos, { text: newTodo, completed: false }];
        setTodos(newTodos);
        setNewTodo('');
    };

    return (
        <div className="container">
            <ul>
                {todos.map((todo, index) => (
                    <TodoItem
                        key={index}
                        todo={todo}
                        onToggleTodo={() => handleToggleTodo(index)}
                    />
                ))}
            </ul>
            <div>
                <input
                    type="text"
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                />
                <button onClick={handleAddTodo} disabled={newTodo.trim().length < 3}>
                    Додати
                </button>
            </div>
        </div>
    );
};

export default TodoList;
