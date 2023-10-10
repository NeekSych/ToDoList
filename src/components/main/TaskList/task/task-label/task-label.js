import React from "react";
import './task-label.css'
import { formatDistance} from 'date-fns'


export default class TaskLabel extends React.Component{
  constructor(props){
    super(props)
    this.state = props
    this.onToggleDone=this.props.onToggleDone
    }
  onLabelClick=()=>{
    this.setState((state)=>{
      return {
        done: !state.done
      }
    })
  }
  createDate= Date.now();
  render(){
    const {label} = this.props
    
    
    const {done} = this.state
    let classItem = 'description'
    if (done){
      classItem += '  complete'
    }
    
    
    return (
              
              <label
              className="label">
                <span 
                role="button"
                tabIndex={0}
                className={classItem} 
                onClick={this.onToggleDone}
                onKeyDown={this.onToggleDone}
                >
                  <span 
                role="button"
                tabIndex={0} 
              onClick={this.onLabelClick}
              onKeyDown = {this.onLabelClick}>{label}</span>
                  
                  </span>
                <span className="created">{formatDistance(this.createDate, new Date(), {addSuffix: true})}</span>
              </label>
              
    )
}
}
