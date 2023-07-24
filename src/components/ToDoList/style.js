import styled from 'styled-components';

export const TodoListWrapper = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Anonymous+Pro:wght@700&family=Inter:wght@600;700&display=swap');
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #57A6B6;
  padding: 20px;
  font-family: 'Anonymous Pro', monospace;
  font-size: 16px;

  @media (max-width: 600px) {
    padding: 10px;
    font-size: 14px;
  }

  .openModalButton {
    background: none;
    border: none;
  }

  .listBox {
    width: 100%;
    max-width: 600px;
    background: linear-gradient(125deg, #CDFFD8, #8FB7FF);
    margin: 10px 0;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);

    @media (max-width: 600px) {
      max-width: 90%;
    }
  }

  .newListDiv {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 2.6rem;
    margin-top: 4.5rem;
    border: 2px solid #011F26;
    background: linear-gradient(125deg, #025159, #1C6461);
  }

  .newList {
    width: 100%;
    max-width: 250px;
    padding: 15px;
    outline-color: #F9E22A;
    color: #FFFFFF;
    background: linear-gradient(125deg, #025159, #1C6461);
    border: none;

    @media (max-width: 600px) {
      max-width: 80%;
    }
  }

  .newList::placeholder {
    color: #FFFFFF;
    font-weight: bold;
    text-align: center;
    font-family: 'Inter', sans-serif;
    font-size: 20px;
  }

  .newList:focus {
    outline: none;
    border: 2px solid #1C6461;
  }

  .newListButton {
    width: 75px;
    padding: 15px;
    background: #1C6461;
    color: #FFFFFF;
    font-size: 15px;
    border: none;
    cursor: pointer;
  }

  .listNameCreate {
    display: flex;
    flex-direction: column;
    justify-content: left;
    margin-bottom: 10px;
  }
`;

export const ModalWrapper = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Anonymous+Pro:wght@700&family=Inter:wght@600;700&display=swap');
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: linear-gradient(90deg, #CDFFD8, #8FB7FF);
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  max-width: 90%;
  max-height: 90%;

  @media (max-width: 600px) {
    padding: 10px;
    font-size: 14px;
  }

  .listNameModal {
    display: flex;
    flex-direction: column;
    justify-content: left;
    margin-bottom: 10px;
    font-family: 'Anonymous Pro', monospace;
    color: #011F26;
  }

  .addItem {
    width: 155px;
    padding: 5px;
    margin-bottom: 2.0rem;
    background: #FFFFFF;
    color: #011F26;
    border: 2px solid #FFCC00;
  }

  .addItem:focus {
    outline: none;
    border: 2px solid #F9E22A;
  }

  .addItemButton {
    width: 35px;
    padding: 5px;
    font-size: 14.5px;
    text-align: center;
    background: #FFFFFF;
    color: #011F26;
    border: 2px solid #FFCC00;
    cursor: pointer;
  }

  .deleteButton,
  .editButton,
  .closeModalButton {
    padding: 5px;
    font-size: 20px;
    margin-left: 5px;
    background: none;
    border: none;
    color: #011F26;
    cursor: pointer;
  }
`;

