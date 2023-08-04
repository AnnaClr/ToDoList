import React from 'react';
import { Outlet } from 'react-router-dom'
import { AppWrapper } from './style.js'
import { Header } from '../components/Header';
import ToDoList from '../components/ToDoList/index.jsx';

export function App() {
  return (
    <AppWrapper>
        <header>
          <Header/>
        </header>

        <main>
          <Outlet/>
          <ToDoList/>
        </main>
    </AppWrapper>
  );
};





