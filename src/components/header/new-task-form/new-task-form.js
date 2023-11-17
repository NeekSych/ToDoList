import React, {useState, useContext, useRef} from "react";
import './new-task-form.css'
import { ToDoContext } from "../../../Context";

const NewTaskForm = React.forwardRef((props, ref)=>{
    const [inputValue, setInputValue]  = useState('');
    const [minValue, setMinValue] = useState('');
    const [secValue, setSecValue] = useState('');
    const inputChange = (e) =>{
      setInputValue(e.target.value)
    }
    const minChange = (e) =>{
      setMinValue(e.target.value)
    }
    const secChange = (e) =>{
      setSecValue(e.target.value)
    }
    
    const {addItem} = useContext(ToDoContext)
  return(
       <form
       className = 'input-form' 
       onKeyDown={(e)=> {
        if(e.key==='Enter'){
        console.log('hyt')
        e.preventDefault();
        addItem(inputValue, minValue, secValue);
        setInputValue('');
        setMinValue('');
        setSecValue('');
        }
       }
      }>
        <input className="new-todo new-todo-input" 
          placeholder="What needs to be done?" 
          ref={ref}
          value={inputValue}
          autoFocus
          onChange={(e)=> inputChange(e)}
        />
        <input 
          type='number'
          className="new-todo new-todo-form__timer" 
          placeholder="Min" 
          min="0" 
          max="59"
          value={minValue}
          onChange={(e)=> minChange(e)}
          />
        <input 
          type='number'
          min="0" 
          max="59"
          className="new-todo new-todo-form__timer" 
          placeholder="Sec" 
          value ={secValue}
          onChange={(e)=> secChange(e)}
        />
      </form>
  )
})
export default NewTaskForm;