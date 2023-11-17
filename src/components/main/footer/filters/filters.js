import React, { useContext} from "react";
import { ToDoContext } from "../../../../Context";
import './filters.css'
export default function  Filters (){
    const {filterItems, toDoFilter} = useContext(ToDoContext)
   
    return (
        <ul className="filters">
        <li>
          <button className={toDoFilter === 'all' ? 'select' : ''}
          onClick={() => {filterItems('all')}}
          >All</button>
        </li>
        <li>
          <button className={toDoFilter === 'active' ? 'select' : ''}
          onClick={() => {filterItems('active')}}
          >Active</button>
        </li>
        <li>
          <button className={toDoFilter === 'completed' ? 'select' : ''}
          onClick={()=>{filterItems('completed')}}
          
          >Completed</button>
        </li>
      </ul>
    )
    }

