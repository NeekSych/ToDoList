import React from 'react';
import  ReactDOM  from 'react-dom';
 
import AppHeader from  './components/header/header.js';
import AppMain from './components/main/main.js';

import './style.css'
const root = ReactDOM.createRoot(document.getElementById('root'));

 export const toDoData= [
    {label:'do something', important: 'true', id:1},
    {label:'do nothing', important: 'false', id:2},
    {label:'do something else', important: 'false', id:3},  
];

const App = () =>{

    return (
    <section className='todoapp'>
      <AppHeader />
      <AppMain />
    </section>
  );
}
root.render(<App />)

