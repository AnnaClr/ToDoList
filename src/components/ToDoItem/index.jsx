import React, { useState } from 'react';
import { FaCheck, FaTrash } from 'react-icons/fa';
import { TodoItemWrapper } from "./style";

const TodoItem = ({ item, onEdit, onDelete, onToggleComplete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(item.text);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSaveEdit = () => {
    if (editedText.trim() !== '') {
      onEdit(editedText);
    }
    setIsEditing(false);
  };

  return (
   <TodoItemWrapper>
     <div>
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}/>
           <button className="saveButton" onClick={handleSaveEdit}><FaCheck/></button>
           <button className="deleteItemButton" onClick={onDelete}><FaTrash /></button>
        </>
      ) : (
        <>
          <div className='itensDiv'>
            <input type="checkbox" checked={item.completed} onChange={onToggleComplete}/>
            <p style={{ textDecoration: item.completed ? 'line-through' : 'none',}} onClick={handleEdit}>{item.text}</p>
          </div>
        </>
      )}
    </div>
   </TodoItemWrapper>
  )
};

export default TodoItem;

