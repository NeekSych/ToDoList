import React from "react";
import './task-label.css'
import { formatDistance} from 'date-fns'


export default class TaskLabel extends React.Component{
  constructor(props){
    super(props)
    this.state = {props,
      timer:0
  }
    this.onToggleDone=this.props.onToggleDone,
    this.onToggleTimer = this.props.onToggleTimer
    }
  onLabelClick=()=>{
    this.setState((state)=>{
      return {
        done: !state.done
      }
    })
  }
  updateTime = this.props.updateTime
  createDate= Date.now();
  componentDidMount() {
    this.onToggleTimer()
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render(){
    const {label} = this.props
    const { elapsedTime, timerRunning } = this.props; 
    
    
    const minutes = Math.floor(elapsedTime / 60);
  const seconds = String(elapsedTime % 60).padStart(2, '0');
  const timeDisplay = `${minutes}:${seconds}`;
    
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
                  <div>
                  <span className='timer-display'>{timeDisplay}</span> 
                  <button 
                    className='timer-button' 
                    onClick={() => this.onToggleTimer()} 
                  >
                    {timerRunning ? `⏸️` : '▶️'} 
                  </button>
                  </div>
                <span className="created">{formatDistance(this.createDate, new Date(), {addSuffix: true})}</span>
              </label>
              
    )
}
}
