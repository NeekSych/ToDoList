import React from "react";
import TaskLabel from "./task-label/task-label";

import './task.css'
export default class Task extends React.Component {
  
  render(){ 
    const itemProps = this.props;
    const onDeleted = this.props.onDeleted
    return (
      <div className='view'>
        <input className="toggle" type="checkbox"/>
              <TaskLabel {...itemProps}/>
              <button className="icon icon-edit"></button>
              <button className="icon icon-destroy"
              onClick={onDeleted}></button>
              {/*  if editing <input type="text" class="edit" value="Editing task"> */ }
      </div>
    ) 
}
}
