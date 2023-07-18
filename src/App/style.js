import styled from 'styled-components';
export const AppWrapper = styled.div`
   width: 100%;
   height: 100vh;
   overflow: auto;
   background: linear-gradient(180deg, #4F97A5, #57A6B6);

   header {
    width: 100%;
    height: 10.0rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
   }

   h1 {
    text-align: left;
    color: #FFFFFF;
    font-size: 3.5rem;
    background-color: transparent;
    padding-top: 3.0rem;
    padding-left: 1.0rem;
    font-family: Helvetica, sans-serif;
   }

   main {
    width: 100%;
    height: 100vh;

    margin: 0 auto;
    padding: 2.4rem 0 7.6rem;
    text-align: justify;
   }

   footer {
    font-size: 2.0rem;
    text-align: center;

    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 2.6rem;
   }
`;