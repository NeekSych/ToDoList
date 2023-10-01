import React, {Component} from 'react';
import  ReactDOM  from 'react-dom';
 
import AppHeader from  './components/header/header.js';
import AppMain from './components/main/main.js';

import './style.css'
const root = ReactDOM.createRoot(document.getElementById('root'));
 

export default class App extends Component{
  state = {
    toDoData: [
      {label:'1do something', important: 'true', id:1},
      {label:'2do nothing', important: 'false', id:2},
      {label:'3do something else', important: 'false', id:3},  
      {label:'4do something', important: 'true', id:4},
      {label:'5do nothing', important: 'false', id:5},
      {label:'6do something else', important: 'false', id:6},  
  ]
  }
  deleteItem = (id)=>{
    this.setState(({toDoData})=>{
      const idx = toDoData.findIndex((el)=> el.id === id);
      toDoData.splice(idx, 1)
      const before = toDoData.slice(0, idx);
      const after = toDoData.slice(idx );
      const newArray = [...before, ...after]
      
      return {
        toDoData: newArray
      }
    })
  }
  render(){
    return (
    <section className='todoapp'>
      <AppHeader />
      <AppMain propsData={this.state.toDoData}
      onDeleted={this.deleteItem}/>
    </section>
  );
}
}
root.render(<App />)

