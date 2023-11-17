import React, {useContext, useState, useEffect} from "react";
import './task-label.css';
import { ToDoContext } from "../../../../../Context";
import { formatDistance} from 'date-fns'

export default function TaskLabel (props){
    let {label, elapsedTime,  createDate, timerRunning,   id, done} =props.propsElem;
    const {onToggleDone} = useContext(ToDoContext)
    let [time, setTime] = useState(elapsedTime);
    let [isRunning, setIsRunning] = useState(timerRunning)
    let [createTime, setCreatetime] = useState(formatDistance(createDate, new Date(), {addSuffix: true}))
    
    
    useEffect(()=>{
      
      const interval = setInterval(()=>{
        isRunning&&setTime((time)=>(time>0 ? time-1 : 0))
      }, 1000)
      
      if(time===0&&isRunning===true){
        setIsRunning(false)
        onToggleDone(id)

      }
      return ()=>{
        clearInterval(interval);
      }
        
      },[time, isRunning]
     )
     const timerToggle =()=>{
       setIsRunning(!isRunning)
     }
     
      
    return (
              <label
                className="label">
                
                <span 
                role="button"
                tabIndex={0}
                className={done?'description--completed':'description'} 
                onClick={()=>{
                  onToggleDone(id)}
                }
                onKeyDown={()=>{
                  onToggleDone(id)}
                }
                >
                 {label}
                </span>
                  <div>
                  <span className='timer-display'>{`${Math.floor(time / 60)}:${String(time % 60).padStart(2, '0')}`}</span> 
                  <button 
                    className='timer-button' 
                    onClick = {()=>{
                      timerToggle()
                  }
                    }
                  >
                    {isRunning ? `⏸️` : '▶️'} 
                  </button>
                  </div>
                <span className="created">{createTime}</span>
              </label>
              
    )
    }
