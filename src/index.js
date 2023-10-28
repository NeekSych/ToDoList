import  {Component} from 'react';
import  ReactDOM  from 'react-dom/client';
import {v4 as uuidv4} from 'uuid';
 
import AppHeader from  './components/header/header.js';
import AppMain from './components/main/main.js';

import './style.css'
const root = ReactDOM.createRoot(document.getElementById('root'));
 

class App extends Component{
  id=0;
  state = {
    toDoData: [
      this.createElement("do somethin"),
      this.createElement('do st else'),
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
    id: uuidv4(),
    timerRunning: false,
    firstRunning: true,
    elapsedTime: 0,
    }
  }
  
  deleteItem = (id)=>{
    this.setState(({toDoData})=>{
      const idx = toDoData.findIndex((el)=> el.id === id);
      const newArray = [...toDoData.slice(0, idx), ...toDoData.slice(idx +1)]
      
      return {
        toDoData: newArray
      }
    })
  }
  
  deleteCompleted = ()=>{ 
    this.setState(({toDoData})=>{
      const newArray = toDoData.filter((elem)=>elem.done===false)
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
      important: false,
      id: uuidv4()
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
 
  
  toggleTimer = (id) => {
    this.setState(({ toDoData }) => {
      const taskIndex = toDoData.findIndex((task) => task.id === id);
      const task = toDoData[taskIndex];
  
      let newTimer = task.timerRunning;
      
      if (task.timerRunning) {
        clearInterval(task.timerId); 
        newTimer = null; 
      } else {
        const timerId = setInterval(() => {
          this.updateTime(id); 
        }, 1000);
        newTimer = timerId;
      }
  
      const updatedTask = {
        ...task,
        timerRunning: !task.timerRunning,
        timerId: newTimer,
      };
  
      const newToDoData = [
        ...toDoData.slice(0, taskIndex),
        updatedTask,
        ...toDoData.slice(taskIndex + 1),
      ];
  
      return { toDoData: newToDoData };
    });
  };
  
  updateTime = (id) => {
    this.setState(({ toDoData }) => {
      const taskIndex = toDoData.findIndex((task) => task.id === id);
      const task = toDoData[taskIndex];
      const updatedTask = { ...task, elapsedTime: task.elapsedTime + 1 }; // увеличиваем на 1 секунду
  
      const newToDoData = [
        ...toDoData.slice(0, taskIndex),
        updatedTask,
        ...toDoData.slice(taskIndex + 1),
      ];
  
      return { toDoData: newToDoData };
    });
  };

  componentWillUnmount() {
    
    this.state.toDoData.forEach(item => {
      if (item.timerId) {
        clearInterval(item.timerId);
      }
    });
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
      deleteCompleted = {this.deleteCompleted}
      onToggleTimer = {this.toggleTimer}
      upDateTime = {this.updateTime}
      timerRunning = {this.state.timerRunning}
      />
    </section>
  );
}
}
root.render(<App />)

