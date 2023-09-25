import React from "react";
import Task from '../task/task.js'
  const TaskList = () => {
      return (
        <ul class='todo-list'>
            <li>
                <Task/>
            </li>
        </ul>
      )
  }

export default TaskList; 