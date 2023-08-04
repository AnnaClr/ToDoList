import styled from 'styled-components';
export const HeaderContainer = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Anonymous+Pro:wght@700&family=Inter:wght@300;600;700&family=Lato:ital@0;1&family=Poppins:wght@900&family=REM:wght@500&family=Roboto:ital@0;1&family=Sen:wght@500&family=Staatliches&display=swap');
  width: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-between;

  .title {
    text-align: end;
    color: #FFFFFF;
    font-size: 4.5rem;
    font-family: 'Josefin Sans', sans-serif;
    margin-top: 1.6rem;
    margin-right: 1.6rem;
  }

  .paragraph {
    text-align: end;
    color: #6F6F6F;
    font-size: 1.5rem;
    font-family: 'Lato', sans-serif;
    margin-right: 1.6rem;
  }

  button {
    background: none;
    border: none;
  }

  .menuIcon {
    margin-top: 1.6rem;
    text-align: left;
    color: #B7E4E4;
    font-size: 3.5rem;
    margin-left: 1.6rem;
  }
`;
