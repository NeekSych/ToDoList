import React from 'react';
import AppHeader from './components/header/header.js';
import AppMain from './components/main/main.js';
import { ToDoProvider } from './Context.js';
import './App.css';

 
export default function App() {

return (
  <ToDoProvider>
  <section className='todoapp'>
    <AppHeader   />
    <AppMain />
  </section>
  </ToDoProvider>
);
}

