import React from "react";
import Filters from "./filters/filters";
import './footer.css'
export default class Footer extends React.Component{
    render(){
    const doneCount = this.props.doneCount;
    const filterItems = this.props.filterItems;
    const deleteCompleted = this.props.deleteCompleted;
    return (
    <footer className='footer'>
        <span className='todo-count'>{doneCount} items left</span>
        <Filters
        filterItems ={filterItems}/>
        <button 
        className='clear-completed'
        onClick={deleteCompleted}
        >Clear completed</button>
    </footer>
    )
}
}
 