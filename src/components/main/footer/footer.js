import React, {useContext} from "react";
import Filters from "./filters/filters";
import { ToDoContext } from "../../../Context";
import './footer.css'
export default function Footer (){
   const {doneCount, filterItems, deleteCompleted} = useContext(ToDoContext)
    return (
    <footer className='footer'>
        <span className='todo-count'>{doneCount} items left</span>
        <Filters />
        <button 
        className='clear-completed'
        onClick={deleteCompleted}
        >Clear completed</button>
    </footer>
    )
}

 