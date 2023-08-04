import styled from 'styled-components';
export const TodoListWrapper = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Anonymous+Pro:wght@700&family=Inter:wght@300;600;700&family=Lato:ital@0;1&family=Poppins:wght@900&family=REM:wght@500&family=Roboto:ital@0;1&family=Sen:wght@500&family=Staatliches&display=swap');
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
  
  .newListDiv {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 2.6rem;
    margin-top: 4.5rem;
    background: linear-gradient(125deg, #C8E6E6, #81A7ED);
   }

  .newList {
    width: 100%;
    max-width: 250px;
    padding: 15px;
    outline-color: #F9E22A;
    background: linear-gradient(125deg, #C8E6E6, #81A7ED);
    border: none;
    border-radius: 5px 0 0 5px;
  
    @media (max-width: 600px) {
      max-width: 80%;
    }
  }

  .listNameDate {
    width: 200px;
    margin: -10px 0 25px -10px;
    display: flex;
    flex-direction: column;
  }

  .newList::placeholder {
    color: #023D4A;
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
    background: #86ABED;
    color: #011F26;
    font-size: 1.5rem;
    border: none;
    cursor: pointer;
    border-radius: 0 5px 5px 0;
  }

  .listBox {
    width: 100%;
    max-width: 600px;
    height: 100px;
    margin-top: 16px;
    max-height: 300px;
    background: linear-gradient(125deg, #CDFFD8, #8FB7FF);
    margin: 10px 0;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);

    @media (max-width: 600px) {
      max-width: 90%;
    }
  } 

  .listNameCreate {
    display: flex;
    flex-direction: column;
    justify-content: left;
    margin-bottom: 10px;
    color: #025159;
    font-family: 'Anonymous Pro', monospace;
  }

  .openModalButton {
    background: none;
    border: none;
    text-align: end;
    font-size: 2.0rem;
    color: #011F26;
    justify-content: flex-end;
    margin: -60px 0 45px 0;
  }
`;

export const ModalWrapper = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Anonymous+Pro:wght@700&family=Inter:wght@600;700&display=swap');
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 800px;
  height: 400px;
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

  .column {
    display: flex;
    flex-direction: column;
    width: 200px;
    margin-bottom: -40px;
  }

  .modalButtons {
    position: absolute;
    top: 20px;
    right: 20px;
    display: flex;
    flex-direction: row;
    gap: 5px;
}

  .listTitleModal {
    color: #025159;
  }

  .listParagraphModal {
    color: #011F26;
  }

  .listNameModal {
    display: flex;
    flex-direction: column;
    justify-content: left;
    margin-bottom: 50px;
    font-family: 'Anonymous Pro', monospace;
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

  .editListDiv {
    display: flex;
    flex-direction: row;
  }

  button {
    background: none;
    border: none;
  }

  .saveEditButton {
    padding: 5px;
    font-size: 4.0rem;
    background: none;
    border: none;
    color: #011F26;
    cursor: pointer;
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

  .allListsDiv {
    margin-left: 0.5rem;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 5px;
    max-height: 100%;
    height: 250px;
    overflow-x: scroll;
    width: 100%;
    max-width: 95%;
  }

::-webkit-scrollbar {
  width: 10px;
  height: 5px;
}

::-webkit-scrollbar-thumb {
  background-color: #7BAAFF;
  border-radius: 5px;
}

::-webkit-scrollbar-thumb:hover {
  background-color: #4084FF;
}

::-webkit-scrollbar-track {
  background-color: #7BAAFF;
  border-radius: 5px;
}

::-webkit-scrollbar-track:hover {
  background-color: #4084FF;
}

`;
