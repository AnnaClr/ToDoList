import styled from 'styled-components';

export const TodoListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;

  .addButton {
    width: 12rem;
    height: 6rem;
    margin-top: 1.6rem;
  }

  .textBox {
    width: 24rem;
    height: 6rem;
    margin-top: 1.6rem;
  }
`;