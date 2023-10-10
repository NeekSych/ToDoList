import React from "react";
import TaskLabel from "./task-label/task-label";

import './task.css'
export default class Task extends React.Component {
  
  render(){ 
    const itemProps = this.props;
    const onDeleted = this.props.onDeleted
    const onToggleDone  = this.props.onToggleDone;
    const id = this.props.id;
    return (
      <div className='view'>
              <TaskLabel 
              {...itemProps}
              onToggleDone={()=> onToggleDone(id)}
              />
              <button className="icon icon-edit"
              ></button>
              <button className="icon icon-destroy"
              onClick={onDeleted}></button>
              {/*  if editing <input type="text" class="edit" value="Editing task"> */ }
      </div>
    ) 
}
}
