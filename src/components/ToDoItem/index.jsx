import React, { useState } from 'react';
import { TodoItemWrapper } from './style';

const TodoItem = ({ item, onEdit, onDelete, onToggleComplete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(item.text);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditedText(item.text);
  };

  const handleSaveEdit = () => {
    if (editedText.trim() !== '') {
      onEdit(editedText);
      setIsEditing(false);
    }
  };

  return (
    <TodoItemWrapper>
      {isEditing ? (
        <>
          <input type="text" value={editedText} onChange={(e) => setEditedText(e.target.value)} />
          <button onClick={handleSaveEdit}>Save</button>
          <button onClick={handleCancelEdit}>Cancel</button>
        </>
      ) : (
        <>
          <input type="checkbox" checked={item.completed} onChange={onToggleComplete} />
          <span style={{ textDecoration: item.completed ? 'line-through' : 'none' }}>{item.text}</span>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={onDelete}>Delete</button>
        </>
      )}
    </TodoItemWrapper>
  );
};

export default TodoItem;
