import styled from 'styled-components';

export const TodoListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;

  .listNameCreate {
    color: #011F26;
  }

  .addItem {
    width: 35%;
    height: 1.6rem;
    border: 1px solid #FFCC00;

    align-items: center;
    justify-content: center;
  }

  .addItemButton {
    width: 8%;
    height: 1.6rem;
    border: 1px solid #FFCC00;

    align-items: center;
    justify-content: center;

    cursor: pointer;
  }

  .editButton {
    border: none;
    background: none;
    color: #011F26;
  }

  .deleteButton {
    border: none;
    background: none;
    color: #011F26;
  }

  .ListBox {
    width: 100%;
  }
`;
