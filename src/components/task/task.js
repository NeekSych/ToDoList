import React from "react";
import TaskLabel from "./task-label";
const Task = () => {
    return (
      <div>
        <input class="toggle" type="checkbox"/>
              <TaskLabel/>
              <button class="icon icon-edit"></button>
              <button class="icon icon-destroy"></button>
      </div>
    )
}
export default Task; 