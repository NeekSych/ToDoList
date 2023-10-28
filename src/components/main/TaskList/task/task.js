import React from "react";
import TaskLabel from "./task-label/task-label";

import './task.css'
export default class Task extends React.Component {
  
  render(){ 
    const itemProps = this.props;
    const onDeleted = this.props.onDeleted
    const onToggleDone  = this.props.onToggleDone;
    
    const onToggleTimer = this.props.onToggleTimer
  
  
    const id = this.props.id;
    return (
      <div className='view'>
              
              <TaskLabel 
              {...itemProps}
              onToggleDone={()=> onToggleDone(id)}
              
              onToggleTimer={()=>onToggleTimer(id)}
              />
                
              <button className="icon icon-edit"
              ></button>
              <button className="icon icon-destroy"
              onClick={onDeleted}></button>
      </div>
    ) 
}
}
