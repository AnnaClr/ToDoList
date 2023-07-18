import React from 'react';
import ToDoList from '../components/ToDoList';
import { AppWrapper } from './style.js'

export function App() {
  return (
    <AppWrapper>
      <header>
        <h1>To Do List</h1>
      </header>
      
      <main>
        <ToDoList/>
      </main>

      <footer>
        {/* <p>MyFooter</p> */}
      </footer>
    </AppWrapper>
  );
};



