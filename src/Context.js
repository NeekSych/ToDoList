import React, { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const ToDoContext = createContext()
export const ToDoProvider = ({children})=>{
  const [data, setData] = useState([])
  const [toDoFilter, setToDoFilter] = useState('all');

//   const createElement = (label) => {
//   return{
//   label,
//   important: false,
//   done: false,
//   id: uuidv4(),
//   timerId: null,
//   timerRunning: false,
//   firstRunning: true,
//   elapsedTime: 0,
//   }
// };

// completed------------------------
const addItem = (value, minutes,seconds) =>  {

    const i = {
    label: value,
    done: false,
    important: false,
    timerId: null,
    id: uuidv4(),
    timerRunning: true,
    createDate: Date.now(),
    elapsedTime: (+minutes*60)+(+seconds)
  };
  setData([...data, i])  
}

// completed------------------------
const onToggleDone = (id) => {
  console.log('ty')
      setData(data.map(elem=>
        elem.id===id?{...elem, done: !elem.done, elapsedTime: 0}:elem
      ))
}

//completed----------------------------
const deleteItem = (id)=>{
  return setData(data.filter(p=>p.id!==id)
      //clearInterval(task.timerId);  
  )
};


//work                            ------
const deleteCompleted = ()=>{ 
  data.forEach(item => {
    if (item.done) {
      clearInterval(item.timerId);
    }
  });
  setData(data.filter((elem)=>!elem.done))
};

//completed
const filterItems = (filter)=>{
  setToDoFilter(filter) 
};




  
let activeArray = data;
  if (toDoFilter === 'active') {
    activeArray = data.filter((el) => !el.done);
  } else if (toDoFilter === 'completed') {
    activeArray = data.filter((el) => el.done);
  }
  
const doneCount = data.filter((el) => !el.done).length;
const contextValue ={
    data,
    toDoFilter,
    addItem,
    onToggleDone,
    deleteItem,
    deleteCompleted,
    filterItems,
    activeArray,
    doneCount,
};

return (
    <ToDoContext.Provider value={contextValue}>
        {children}
    </ToDoContext.Provider>
)
}