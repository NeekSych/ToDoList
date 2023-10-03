import React from "react";
import './new-task-form.css'

export default class NewTaskForm extends React.Component{
  render(){
    const addItem = this.props.addItem;
      return <input className="new-todo" placeholder="What needs to be done?" autoFocus onClick={addItem}/>
  }
}

