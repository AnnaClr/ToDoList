import React, { useState, useEffect } from "react";
import { TodoListWrapper, ModalWrapper } from "./style";
import TodoItem from "../ToDoItem";
import { FaEdit, FaTrash } from "react-icons/fa";
import { FaXmark } from 'react-icons/fa6'
import { FiPlus } from "react-icons/fi";
import Modal from "react-modal";

const ToDoList = () => {
  const [lists, setLists] = useState([]);
  const [newListName, setNewListName] = useState("");
  const [newItemText, setNewItemText] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedList, setSelectedList] = useState(null);
  const [editingListId, setEditingListId] = useState(null);

  const OpenModal = (list) => {
    setSelectedList(list);
    setModalIsOpen(true);
  };

  const CloseModal = () => {
    setModalIsOpen(false);
  };

  Modal.setAppElement("#root");

  useEffect(() => {
    const storedLists = JSON.parse(localStorage.getItem("ToDoLists"));
    if (storedLists) {
      setLists(storedLists);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("ToDoLists", JSON.stringify(lists));
  }, [lists]);

  const handleNewListNameChange = (e) => {
    setNewListName(e.target.value);
  };

  const handleNewItemTextChange = (e) => {
    setNewItemText(e.target.value);
  };

  const handleAddList = () => {
    if (newListName.trim() !== "") {
      const newList = {
        id: Date.now(),
        name: newListName,
        date: new Date().toLocaleDateString(),
        items: [],
      };
      setLists([...lists, newList]);
      setNewListName("");
    }
  };

  const handleDeleteList = (id) => {
    const updatedLists = lists.filter((list) => list.id !== id);
    setLists(updatedLists);
  };

  const handleAddItem = (listId) => {
    if (newItemText.trim() !== "") {
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
      setNewItemText("");
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

  const handleEditListName = (id) => {
    setEditingListId(id);
  };

  const handleSaveListName = (id, newName) => {
    const updatedLists = lists.map((list) =>
      list.id === id ? { ...list, name: newName } : list
    );
    setLists(updatedLists);
    setEditingListId(null);
  };

  return (
    <TodoListWrapper>
      <div className="newListDiv">
        <input
          className="newList"
          type="text"
          value={newListName}
          onChange={handleNewListNameChange}
          placeholder="Criar Nova Lista"
        />
        <button className="newListButton" onClick={handleAddList}>
          <FiPlus />
        </button>
      </div>
      {lists.map((list) => (
        <div key={list.id} className="listBox">
          <div className="listNameCreate">
            {editingListId === list.id ? (
              <input
                type="text"
                value={list.name}
                onChange={(e) => handleSaveListName(list.id, e.target.value)}
              />
            ) : (
              <>
                <h2>{list.name}</h2>
                <p>Criada em: {list.date}</p>
              </>
            )}
            <button className="openModalButton" onClick={() => OpenModal(list)}>
              <FaEdit />
            </button>
          </div>
        </div>
      ))}
      {selectedList && (
        <Modal
          className="ModalBox"
          isOpen={modalIsOpen}
          onRequestClose={CloseModal}
          key={selectedList.id}
        >
          <ModalWrapper>
            <div className="listNameModal" key={selectedList.id}>
              <h2>{selectedList.name}</h2>
              <p>Criada em: {selectedList.date}</p>
            </div>
            <div className="addItens">
              <input
                className="addItem"
                type="text"
                value={newItemText}
                onChange={handleNewItemTextChange}
                placeholder="Adicionar item"
              />
              <button
                className="addItemButton"
                onClick={() => handleAddItem(selectedList.id)}
              >
                <FiPlus />
              </button>
            </div>
            <div>
              <button
                className="closeModalButton"
                onClick={CloseModal}
              >
                <FaXmark />
              </button>
              <button
                className="deleteButton"
                onClick={() => handleDeleteList(selectedList.id)}
              >
                <FaTrash />
              </button>
              <button
                className="editButton"
                onClick={() => handleEditListName(selectedList.id)}
              >
                <FaEdit />
              </button>
            </div>
            {selectedList.items.map((item) => (
              <TodoItem
                key={item.id}
                item={item}
                onEdit={(newText) =>
                  handleEditItem(selectedList.id, item.id, newText)
                }
                onDelete={() => handleDeleteItem(selectedList.id, item.id)}
                onToggleComplete={() =>
                  handleToggleComplete(selectedList.id, item.id)
                }
              />
            ))}
          </ModalWrapper>
        </Modal>
      )}
    </TodoListWrapper>
  );
};

export default ToDoList;



