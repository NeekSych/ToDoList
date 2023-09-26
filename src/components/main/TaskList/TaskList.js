import React from "react";
import Task from './task/task.js'

function TaskList({data}){
  const elements = data.map((item)=>{
  const {id, ...itemProps} = item;

  return(
    <li key ={id}>
      <Task {...itemProps}/>
    </li>
  )
  })

  return (
        <ul className='todo-list'>
            {elements}
        </ul>
      )
}

export default TaskList; 