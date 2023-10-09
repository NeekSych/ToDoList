import React from "react";
import './filters.css'
export default class  Filters extends React.Component {
  state= {
    selectedFilter: 'all',
  };
  handleFilterClick= (filter)=> {
    this.setState({ selectedFilter: filter });
  }

  render(){
    const filterItems = this.props.filterItems
    return (
        <ul className="filters">
        <li>
          <button className={this.state.selectedFilter === 'all' ? 'selected' : ''}
          onClick={() => {this.handleFilterClick('all');filterItems('all')}}
          >All</button>
        </li>
        <li>
          <button className={this.state.selectedFilter === 'active' ? 'selected' : ''}
          onClick={() => {this.handleFilterClick('active'); filterItems('active')}}
          >Active</button>
        </li>
        <li>
          <button className={this.state.selectedFilter === 'completed' ? 'selected' : ''}
          onClick={()=>{this.handleFilterClick('completed'); filterItems('completed')}}
          
          >Completed</button>
        </li>
      </ul>
    )
    }
}
