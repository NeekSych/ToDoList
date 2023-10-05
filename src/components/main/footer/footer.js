import React from "react";
import Filters from "./filters/filters";
import './footer.css'
export default class Footer extends React.Component{
    render(){
    let doneCount = this.props.doneCount;
    let filterItems = this.props.filterItems;
    return (
    <footer className='footer'>
        <span className='todo-count'>{doneCount} items left</span>
        <Filters
        filterItems ={filterItems}/>
        <button className='clear-completed'>Clear completed</button>
    </footer>
    )
}
}
 