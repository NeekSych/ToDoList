import React, {useContext} from "react";
import Task from './task/task.js'
import { ToDoContext } from "../../../Context.js";
import './task-list.css'
export default function TaskList (){
  
  const { data, activeArray, deleteItem, onToggleDone, toggleTimer, updateTime } = useContext(ToDoContext);
  const elements = activeArray.map((item)=>{
  const {id} = item;
  return(
    <li  
      key = {id}
      className='todo-list-item'

    >
      <Task propsElem = {item}  
      />
    </li>
  )
  })

  return (
        <ul className='todo-list'>
            {elements}
        </ul>
      )
}

