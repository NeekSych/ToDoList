import React from "react";
import Task from './task/task.js'

import './task-list.css'
export default class TaskList extends React.Component {
  
  render(){
  const elements = this.props.propsData.map((item)=>{
  const {id, ...itemProps} = item;
  const propsDeleted = this.props.propsDeleted;
  const onToggleDone = this.props.onToggleDone;
  const onToggleTimer = this.props.onToggleTimer;
  const updateTime = this.props.updateTime;
  return(
    <li //completed editing
      key = {id}
      className='todo-list-item'
      
    >
      <Task {...itemProps}
      onDeleted = {()=> propsDeleted(id)}
      onToggleDone = {onToggleDone}
      updateTime = {updateTime}
      onToggleTimer = {onToggleTimer}
      id ={id}
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
}
