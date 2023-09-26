import React from "react";
import TaskLabel from "./task-label";
const Task = ({...itemProps}) => {
    return (
      <div className='view'>
        <input className="toggle" type="checkbox"/>
              <TaskLabel {...itemProps}/>
              <button className="icon icon-edit"></button>
              <button className="icon icon-destroy"></button>
      </div>
    )
}
export default Task; 