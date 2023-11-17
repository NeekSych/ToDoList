import React, {useContext} from "react";
import TaskLabel from "./task-label/task-label";
import './task.css'
import { ToDoContext } from "../../../../Context";
export default function Task (props) {
    const { deleteItem,  toggleTimer, onToggleDone} = useContext(ToDoContext)
    const item = props.propsElem
    return (
      <div className='view'>
              <input 
              className="toggle" 
              type="checkbox"
              onClick={()=>{
                onToggleDone(item.id)}
              }
              />
              <TaskLabel propsElem = {item}
              
              toggleTimer={()=>toggleTimer(item.id)} 
              />
                
              <button className="icon icon-edit"
              ></button>
              <button className="icon icon-destroy"
              onClick={()=>deleteItem(item.id)}></button>
      </div>
    ) 

}
