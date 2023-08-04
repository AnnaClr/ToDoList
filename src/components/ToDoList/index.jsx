import React, { useState, useEffect } from "react";
import { TodoListWrapper, ModalWrapper } from "./style";
import TodoItem from "../ToDoItem";
import { FaEdit, FaTrash } from "react-icons/fa";
import { FaXmark } from 'react-icons/fa6'
import { FiPlus } from "react-icons/fi";
import { BsCheck } from 'react-icons/bs'
import Modal from "react-modal";
// import Calendar from "react-calendar";

const ToDoList = () => {
  const [lists, setLists] = useState([]);
  const [newListName, setNewListName] = useState("");
  const [newItemText, setNewItemText] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedList, setSelectedList] = useState(null);
  const [editingListId, setEditingListId] = useState(null);
  const [editedListName, setEditedListName] = useState(selectedList?.name || "");

  const openModal = (list) => {
    setSelectedList(list);
    setModalIsOpen(true);
  };

  const closeModal = () => {
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

  useEffect(() => {
    if (modalIsOpen && selectedList) {
      const updatedSelectedList = lists.find((list) => list.id === selectedList.id);
      setSelectedList(updatedSelectedList);
    }
  }, [modalIsOpen, lists, selectedList]);

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

  const handleSaveListName = (id, newName) => {
    const updatedLists = lists.map((list) =>
      list.id === id ? { ...list, name: newName } : list
    );
    setLists(updatedLists);
    setEditingListId(null);
  };
  

  const handleNewListNameChange = (e) => {
    setNewListName(e.target.value);
  };

  const handleNewItemTextChange = (e) => {
    setNewItemText(e.target.value);
  };

  const handleEditListName = (id) => {
    setEditingListId(id);
    const listToUpdate = lists.find((list) => list.id === id);
    if (listToUpdate) {
      setEditedListName(listToUpdate.name);
    }
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
      <div className="newListDiv">
        <input
          className="newList"
          type="text"
          value={newListName}
          onChange={handleNewListNameChange}
          placeholder="Criar Novo Bloco"
        />
        <button className="newListButton" onClick={handleAddList}>
          <FiPlus />
        </button>
      </div>
      {lists.map((list) => (
        <div key={list.id} className="listBox">
          <div className="listNameCreate">
              <>
                <div className="listNameDate">
                  <h2>{list.name}</h2>
                  <p>Criada em: {list.date}</p>
                </div>
              </>
            <button className="openModalButton" onClick={() => openModal(list)}>
              <FaEdit />
            </button>
          </div>
        </div>
      ))}

      {selectedList && (
        <Modal className='modalBox'
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          key={selectedList.id}
        >
          <ModalWrapper>
              <div className="listNameModal" key={selectedList.id}>
                  {editingListId === selectedList.id ? (
                     <>
                     <div className="editListDiv">
                        <input
                          type="text"
                          value={editedListName}
                          onChange={(e) => setEditedListName(e.target.value)}
                        />
                        <button className="saveNameButton" onClick={() => 
                          handleSaveListName(selectedList.id, editedListName)}>
                          <BsCheck className="saveEditButton"/>
                        </button>
                     </div>
                   </>
                    
                  ) : (
                    <div className="column">
                      <h2 className="listTitleModal">{selectedList.name}</h2>
                      <p className="listParagraphModal">Criada em: {selectedList.date}</p>
                    </div>

                  )}
              </div>
              <div className="modalButtons">
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
                  <button
                    className="closeModalButton"
                    onClick={closeModal}
                  >
                    <FaXmark />
                  </button>
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
            <div className="allListsDiv">
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
            </div>
          </ModalWrapper>
        </Modal>
      )}

    {/* <Calendar/> */}
    </TodoListWrapper>
  );
};

export default ToDoList;