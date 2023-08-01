import styled from 'styled-components';
export const TodoListWrapper = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Anonymous+Pro:wght@700&family=Inter:wght@300;600;700&family=Lato:ital@0;1&family=Poppins:wght@500&family=REM:wght@500&family=Roboto:ital@0;1&family=Sen:wght@500&family=Staatliches&display=swap');
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #090B10;
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
    background: linear-gradient(125deg, #B7E4E4, #7BAAFF);
  }

  .newList {
    width: 100%;
    max-width: 250px;
    padding: 15px;
    outline-color: #F9E22A;
    color: #011F26;
    background: linear-gradient(125deg, #B7E4E4, #7BAAFF);
    border: none;

    @media (max-width: 600px) {
      max-width: 80%;
    }
  }

  .newList::placeholder {
    color: #011F26;
    font-weight: bold;
    text-align: center;
    font-family: 'REM', sans-serif;
    font-size: 20px;
  }

  .newList:focus {
    outline: none;
    border: 2px solid #1C6461;
  }

  .newListButton {
    width: 75px;
    padding: 15px;
    background: #7BAAFF;
    color: #011F26;
    font-size: 1.5rem;
    border: none;
    cursor: pointer;
  }

  .listNameCreate {
    display: flex;
    flex-direction: column;
    justify-content: left;
    margin-bottom: 10px;
    color: #011F26;
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
  background: linear-gradient(125deg, #B7E4E4, #7BAAFF);
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

  .flex {
    width: 100%;
    gap: 45px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .column {
    display: flex;
    flex-direction: column;
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

  .modalButtons {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .deleteButton {
    padding: 5px;
    font-size: 2.0rem;
    background: none;
    border: none;
    color: #011F26;
    cursor: pointer;
  }

  .editButton {
    padding: 5px;
    font-size: 2.3rem;
    background: none;
    border: none;
    color: #011F26;
    cursor: pointer;
  }

  .closeModalButton {
    padding: 1px;
    font-size: 3.0rem;
    background: none;
    border: none;
    color: #011F26;
    cursor: pointer;
  }
`;

