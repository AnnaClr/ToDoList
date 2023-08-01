import React from 'react';
import ToDoList from '../components/ToDoList';
import { AppWrapper } from './style.js'
import { Header } from '../components/Header';

export function App() {
  return (
    <AppWrapper>
        <header>
          <Header/>
        </header>

        <main>
          <ToDoList/>
        </main>
        
    </AppWrapper>
  );
};



