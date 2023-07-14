import React, { useState, useEffect } from 'react';
import { TodoListWrapper } from './style';
import TodoItem from '../ToDoItem/index';


const TodoList = () => {
  const [lists, setLists] = useState([]);
  const [newListName, setNewListName] = useState('');
  const [newItemText, setNewItemText] = useState('');

  useEffect(() => {
    const storedLists = JSON.parse(localStorage.getItem('todoLists'));
    if (storedLists) {
      setLists(storedLists);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todoLists', JSON.stringify(lists));
  }, [lists]);

  const handleNewListNameChange = (e) => {
    setNewListName(e.target.value);
  };

  const handleNewItemTextChange = (e) => {
    setNewItemText(e.target.value);
  };

  const handleAddList = () => {
    if (newListName.trim() !== '') {
      const newList = {
        id: Date.now(),
        name: newListName,
        date: new Date().toLocaleDateString(),
        items: [],
      };
      setLists([...lists, newList]);
      setNewListName('');
    }
  };

  const handleDeleteList = (id) => {
    const updatedLists = lists.filter((list) => list.id !== id);
    setLists(updatedLists);
  };

  const handleEditList = (id, newName) => {
    const updatedLists = lists.map((list) => {
      if (list.id === id) {
        return { ...list, name: newName };
      }
      return list;
    });
    setLists(updatedLists);
  };

  const handleAddItem = (listId) => {
    if (newItemText.trim() !== '') {
      const updatedLists = lists.map((list) => {
        if (list.id === listId) {
          const newItem = {
            id: Date.now(),
            text: newItemText,
            completed: false,
          };
          return { ...list, items: [...list.items, newItem] };
        }
        return list;
      });
      setLists(updatedLists);
      setNewItemText('');
    }
  };

  const handleDeleteItem = (listId, itemId) => {
    const updatedLists = lists.map((list) => {
      if (list.id === listId) {
        const updatedItems = list.items.filter((item) => item.id !== itemId);
        return { ...list, items: updatedItems };
      }
      return list;
    });
    setLists(updatedLists);
  };

  const handleEditItem = (listId, itemId, newText) => {
    const updatedLists = lists.map((list) => {
      if (list.id === listId) {
        const updatedItems = list.items.map((item) => {
          if (item.id === itemId) {
            return { ...item, text: newText };
          }
          return item;
        });
        return { ...list, items: updatedItems };
      }
      return list;
    });
    setLists(updatedLists);
  };

  const handleToggleComplete = (listId, itemId) => {
    const updatedLists = lists.map((list) => {
      if (list.id === listId) {
        const updatedItems = list.items.map((item) => {
          if (item.id === itemId) {
            return { ...item, completed: !item.completed };
          }
          return item;
        });
        return { ...list, items: updatedItems };
      }
      return list;
    });
    setLists(updatedLists);
  };

  return (
    <TodoListWrapper>
      <h1>To-Do List</h1>

      {/* Add Box para adicionar nova lista */}
      <div>
        <input type="text" value={newListName} onChange={handleNewListNameChange} placeholder="Enter list name" />
        <button onClick={handleAddList}>Add List</button>
      </div>

      {/* Renderizar as listas existentes */}
      {lists.map((list) => (
        <div key={list.id}>
          <h2>{list.name}</h2>
          <div>Date: {list.date}</div>

          {/* Add Box para adicionar novo item à lista */}
          <div>
            <input type="text" value={newItemText} onChange={handleNewItemTextChange} placeholder="Enter item" />
            <button onClick={() => handleAddItem(list.id)}>Add Item</button>
          </div>

          {/* Renderizar os itens da lista */}
          {list.items.map((item) => (
            <TodoItem
              key={item.id}
              item={item}
              onEdit={(newText) => handleEditItem(list.id, item.id, newText)}
              onDelete={() => handleDeleteItem(list.id, item.id)}
              onToggleComplete={() => handleToggleComplete(list.id, item.id)}
            />
          ))}

          <button onClick={() => handleDeleteList(list.id)}>Delete List</button>
          <button onClick={(newName) => handleEditList(list.id, newName)}>Edit List Name</button>
        </div>
      ))}
    </TodoListWrapper>
  );
};

export default TodoList;
