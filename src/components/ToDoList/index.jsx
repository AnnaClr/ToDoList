import React, { useState } from 'react';
import TodoItem from '../ToDoItem';
import { TodoListWrapper } from './style.js'

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const handleInputChange = (e) => {
    setNewTodo(e.target.value);
  };

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
      setNewTodo('');
    }
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleEditTodo = (id, newText) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, text: newText };
        }
        return todo;
      })
    );
  };

  const handleToggleComplete = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  };

  return (
    <TodoListWrapper>
      <input type="text" value={newTodo} onChange={handleInputChange} />
      <button onClick={handleAddTodo}>Add</button>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDelete={handleDeleteTodo}
          onEdit={handleEditTodo}
          onToggleComplete={handleToggleComplete}
        />
      ))}
    </TodoListWrapper>
  );
};

export default TodoList;
