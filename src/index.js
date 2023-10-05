import React, {Component} from 'react';
import {useState} from 'react';
import  ReactDOM  from 'react-dom/client';
 
import AppHeader from  './components/header/header.js';
import AppMain from './components/main/main.js';

import './style.css'
const root = ReactDOM.createRoot(document.getElementById('root'));
 

class App extends Component{
  id=0;
  state = {
    toDoData: [
      this.createElement("do somethin"),
      this.createElement('do something else'),
      this.createElement('do it again'),
      this.createElement('and again'),
      this.createElement('one more time'),
  ],
  toDoFilter: 'all'
  }
  
  createElement(label){
    return{
    label,
    important: false,
    done: false,
    id: this.id++,
    }
  }
  
  deleteItem = (id)=>{
    this.setState(({toDoData})=>{
      const idx = toDoData.findIndex((el)=> el.id !== id);
      const newArray = [...toDoData.slice(0, idx), ...toDoData.slice(idx +1)]
      
      return {
        toDoData: newArray
      }
    })
  }
  
  
  filterItems= (filter)=>{
    this.setState({toDoFilter:filter})
    
  }


  addItem = (value) =>  {
    const i = {
      label: value,
      importent: false,
      id:this.id++
    };
    this.setState(({toDoData})=>{
      
      const newArray=[...toDoData, i];
      return {
        toDoData: newArray
      }
    })   
  }

  onToggleDone = (id) =>{
    this.setState(({toDoData})=>{
      const idElem = toDoData.findIndex((el)=> el.id===id);
      const oldElem = toDoData[idElem];      
      const newElem = {...oldElem, done: !oldElem.done};      
      const newArray = [...toDoData.slice(0, idElem), newElem, ...toDoData.slice(idElem+1)]    
    return {
      toDoData: newArray
    }
  })
  }
 
  render(){
    let {toDoData, toDoFilter} = this.state
    let activeArray=toDoData
    if ( toDoFilter==='active'){
      activeArray = toDoData.filter((el)=>el.done===false);
  }
    if ( toDoFilter==='completed'){   
        activeArray = toDoData.filter((el)=>el.done===true);
    }
    
    let doneCount = this.state.toDoData.filter((el)=>!el.done).length;  
    return (
    <section className='todoapp'>
      <AppHeader 
      addItem ={this.addItem}/>
      <AppMain propsData={activeArray}
      filterItems ={this.filterItems}
      onDeleted={this.deleteItem}
      onToggleDone = {this.onToggleDone}
      doneCount = {doneCount}
      />
    </section>
  );
}
}
root.render(<App />)

