import styled from 'styled-components';
export const TodoItemWrapper = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Anonymous+Pro:wght@700&family=Inter:wght@600;700&family=Lato&family=Roboto:ital@0;1&display=swap');
  .itensDiv {
    display: flex;
    flex-direction: row;
    text-align: left;
    justify-content: flex-start;
    color: #011F26;
    font-family: 'Lato', sans-serif;
    padding: 1.5px; 
    gap: 5px;
  }

  button {
    background: none;
    border: none;
  }

  .saveButton, 
  .deleteItemButton{
    padding: 5px;
    font-size: 1.5rem;
    background: none;
    border: none;
    color: #011F26;
    cursor: pointer;
  }
`;





