import React from "react";
import Task from './task/task.js'

import './task-list.css'
export default class TaskList extends React.Component {
  
  render(){
  const elements = this.props.propsData.map((item)=>{
  const {id, ...itemProps} = item;
  const propsDeleted = this.props.propsDeleted

  return(
    <li //completed editing
      key ={id} 
      className='todo-list-item'
      
    >
      <Task {...itemProps}
      onDeleted = {()=> propsDeleted(id)}/>
    </li>
  )
  })

  return (
        <ul className='todo-list'>
            {elements}
        </ul>
      )
}
}
