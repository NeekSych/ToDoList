import React from "react";
import './filters.css'
export default class  Filters extends React.Component {
  render(){
    const filterItems = this.props.filterItems
    return (
        <ul className="filters">
        <li>
          <button className="selected"
          onClick = {()=>filterItems('all')}
          >All</button>
        </li>
        <li>
          <button
          onClick = {()=>filterItems('active')}
          >Active</button>
        </li>
        <li>
          <button
          onClick = {()=>filterItems('completed')}
          >Completed</button>
        </li>
      </ul>
    )
    }
}
