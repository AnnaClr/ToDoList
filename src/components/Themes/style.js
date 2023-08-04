import styled from 'styled-components';
export const ThemesWrapper = styled.div`
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
`;

