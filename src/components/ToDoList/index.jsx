import React, { useState, useEffect } from 'react';
import { TodoListWrapper } from './style';
import TodoItem from '../ToDoItem/index';
import { BiEdit } from 'react-icons/bi'
import { MdOutlineDeleteOutline } from 'react-icons/md'
import { FiPlus } from 'react-icons/fi'

const ToDoList = () => {
  const [lists, setLists] = useState([]);
  const [newListName, setNewListName] = useState('');
  const [newItemText, setNewItemText] = useState('');

  useEffect(() => {
    const storedLists = JSON.parse(localStorage.getItem('ToDoLists'));
    if (storedLists) {
      setLists(storedLists);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('ToDoLists', JSON.stringify(lists));
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

  const handleEditList = (id) => {
    console.log(id)
    const updatedLists = lists.map((list) => {
      if (list.id === id) {
        return { ...list };
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
      <div>
        <input className='newList' type="text" value={newListName} onChange={handleNewListNameChange} placeholder="Criar nova Lista" />
        <button className='newListButton' onClick={handleAddList}><FiPlus/></button>
      </div>

      {lists.map((list) => (
        <div key={list.id} className='listBox'>
          <div className='listNameCreate'>
            <h2>{list.name}</h2>
            <div>Criada em: {list.date}</div>
            <div>
              <input className='addItem' type="text" value={newItemText} onChange={handleNewItemTextChange} placeholder="Adicionar item"/>
              <button className='addItemButton' onClick={() => handleAddItem(list.id)}><FiPlus/></button>
            </div>
          </div>
         

          {list.items.map((item) => (
            <TodoItem
              key={item.id}
              item={item}
              onEdit={(newText) => handleEditItem(list.id, item.id, newText)}
              onDelete={() => handleDeleteItem(list.id, item.id)}
              onToggleComplete={() => handleToggleComplete(list.id, item.id)}
            />
          ))}

          <button className='deleteButton' onClick={() => handleDeleteList(list.id)}><MdOutlineDeleteOutline/></button>
          <button className='editButton' onClick={() => handleEditList(list.id)}><BiEdit/></button>
        </div>
      ))}
    </TodoListWrapper>
  );
};

export default ToDoList;

