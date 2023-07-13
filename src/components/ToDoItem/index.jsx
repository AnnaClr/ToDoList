import React, { useState } from 'react';
import { TodoItemWrapper } from './style.js'

const TodoItem = ({ todo, onDelete, onEdit, onToggleComplete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(todo.text);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditedText(todo.text);
  };

  const handleSaveEdit = () => {
    if (editedText.trim() !== '') {
      onEdit(todo.id, editedText);
      setIsEditing(false);
    }
  };

  return (
    <TodoItemWrapper>
      {isEditing ? (
        <>
          <input type="text" value={editedText} onChange={(e) => setEditedText(e.target.value)} />
          <button onClick={handleSaveEdit}>Salvar</button>
          <button onClick={handleCancelEdit}>Cancelar</button>
        </>
      ) : (
        <>
          <input type="checkbox" checked={todo.completed} onChange={() => onToggleComplete(todo.id)} />
          <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.text}</span>
          <button onClick={handleEdit}>Editar</button>
          <button onClick={() => onDelete(todo.id)}>Deletar</button>
        </>
      )}
    </TodoItemWrapper>
  );
};

export default TodoItem;
