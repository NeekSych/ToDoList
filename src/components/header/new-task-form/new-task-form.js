import React from "react";
import './new-task-form.css'

export default class NewTaskForm extends React.Component{
  state= {value: ''}
  inputChange = (e) =>{
    this.setState({value: e.target.value})
  }

  render(){
    const addItem = this.props.addItem;
      return <form onSubmit={(e)=> {
        e.preventDefault();
        addItem(this.state.value)
        this.setState({
          value:''
        })
      }}>
        <input className="new-todo" 
      placeholder="What needs to be done?" 
      autoFocus 
      value={this.state.value}
      onChange={(e)=> this.inputChange(e)}
      
      //onClick={()=> console.log('click')} 
      />
      </form>
  }
}

