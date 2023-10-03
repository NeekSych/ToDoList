import React, {Component} from 'react';
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
  ]
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
      const idx = toDoData.findIndex((el)=> el.id === id);
      const before = toDoData.slice(0, idx);
      const after = toDoData.slice(idx +1);
      const newArray = [...before, ...after]
      
      return {
        toDoData: newArray
      }
    })
  }
  addItem = () =>  {
    const i = {
      label:'add',
      importent: false,
      id:8
    };
    this.setState(({toDoData})=>{
      
      const newArray=[...toDoData, i];
      return {
        toDoData: newArray
      }
    })   
  }

  onToggleDone = (id) =>{
    console.log('chaban')
    this.setState(({toDoData})=>{
      const idElem = toDoData.findIndex((el)=> el.id===id);

      const oldElem = toDoData[idElem];
      
      const newElem = {...oldElem, done: !oldElem.done};
      
      const newArray = [...toDoData.slice(0, idElem), newElem, ...toDoData.slice(idElem+1)]
    console.log(newArray)
    return {
      toDoData: newArray
    }
  })
  }
 
  render(){
    let doneCount = this.state.toDoData.filter((el)=>el.done).length;  
    return (
    <section className='todoapp'>
      <AppHeader 
      addItem ={this.addItem}/>
      <AppMain propsData={this.state.toDoData}
      onDeleted={this.deleteItem}
      onToggleDone = {this.onToggleDone}
      doneCount = {doneCount}
      />
    </section>
  );
}
}
root.render(<App />)

