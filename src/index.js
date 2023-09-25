import React from 'react';
import  ReactDOM  from 'react-dom';

import AppHeader from  './components/header/header.js';
import AppMain from './components/main/main.js';

import './style.css'
const root = ReactDOM.createRoot(document.getElementById('root'));

const App = () =>{

    return (
    <section className='todoapp'>
      <AppHeader />
      <AppMain />
    </section>
  );
}
root.render(<App />)

