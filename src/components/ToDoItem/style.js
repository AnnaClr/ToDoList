import styled from 'styled-components';
export const TodoItemWrapper = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Anonymous+Pro:wght@700&family=Inter:wght@600;700&family=Lato&family=Roboto:ital@0;1&display=swap');
  .itensDiv {
    align-items: flex-start;
    overflow-y: auto; /* Adiciona uma barra de rolagem vertical quando os itens ultrapassam a altura máxima */
    max-height: 250px; /* Define a altura máxima dos itens */
  }

  .itemText {
    text-align: left;
    color: #011F26;
    font-family: 'Lato', sans-serif;
    text-align: left;
    padding: 0.5rem; /* Espaçamento interno entre os itens */
    border-bottom: 1px solid #ccc; /* Adiciona uma linha divisória entre os itens */
  }
`;


