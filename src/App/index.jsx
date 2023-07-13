import React from 'react';
import ToDoList from '../components/ToDoList';
import { MyCalendar } from '../components/Calendar';
import { AppWrapper } from './style.js'

export function App() {
  return (
    <AppWrapper>
      <header>
        <h1>To Do List</h1>
      </header>
      
      <main>
        <ToDoList/>
        <MyCalendar/>
      </main>

      <footer>
        <p>MyFooter</p>
      </footer>

    </AppWrapper>
  );
};
