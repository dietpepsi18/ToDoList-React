import React, { Component } from 'react'
import {nanoid} from "nanoid"  
import "./Header.css"
import ProprTypes from "prop-types"

export default class Header extends Component {

  //set limitation to ensure attributes in props have correct datatypes
  static propsType = {
    addTodo: ProprTypes.func.isRequired
  }

  render() {
    return (
      <div className="todo-header">
            <input type="text" placeholder="Please enter your new task here" 
                   onKeyUp={this.handleKeyUp}/>
      </div>
    )
  }

  //callback: when the user releases a key 
  handleKeyUp = (event) => {  
    
    //case1：if the key pressed is not Enter
    if(event.keyCode !== 13){
      return;    
    }

    //case2: if user's entering is empty
    if(event.target.value.trim === ""){
      alert("It cannot be empty");
      return;
    }

    //creater a new task object
    const todoObj = {id: nanoid(), name: event.target.value, done: false}
    
    //call the method passed from App
    this.props.addTodo(todoObj)

    //after successfully add a new task, empty input element's value
    event.target.value = "";
  }
}

