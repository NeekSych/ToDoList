import React from 'react';
import  ReactDOM  from 'react-dom';

import AppHeader from  './components/header/header.js';
import AppMain from './components/main/main.js';

const root = ReactDOM.createRoot(document.getElementById('root'));

const App = () =>{

    return (
    <section>
      <AppHeader />
      <AppMain />
    </section>
  );
}
root.render(<App />)

