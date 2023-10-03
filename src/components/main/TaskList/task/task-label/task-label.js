import React from "react";
import './task-label.css'
export default class TaskLabel extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      done: false,
    };
    this.onToggleDone=this.props.onToggleDone
    }
  onLabelClick = () => {
    this.setState((state)=>{
      return {
        done: !state.done
      }
    })
  }
  
  render(){
    const {label} = this.props
    
    const {done} = this.state
    let classItem = 'description'
    if (done){
      classItem += '  complete'
    }
    
    
    return (
              <label onClick={this.onLabelClick}
              className="label">
                <span 
                className={classItem} 
                onClick={this.onToggleDone}
                >
                  {label}
                  
                  </span>
                <span className="created">created 17 seconds ago</span>
              </label>
              
    )
}
}
