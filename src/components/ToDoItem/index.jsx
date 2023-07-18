import React, { useState } from 'react';
import { TodoItemWrapper } from './style';
import { FaCheck } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'

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
          <input type="text" className='inputText' value={editedText} onChange={(e) => setEditedText(e.target.value)} />
          <button className='saveButton' onClick={handleSaveEdit}><FaCheck/></button>
          <button className='cancelButton' onClick={handleCancelEdit}><FiX/></button>
        </>
      ) : (
        <>
          <input type="checkbox" checked={item.completed} onChange={onToggleComplete} />
          <span style={{ textDecoration: item.completed ? 'line-through' : 'none' }}>{item.text}</span>
        </>
      )}
    </TodoItemWrapper>
  );
};

export default TodoItem;
