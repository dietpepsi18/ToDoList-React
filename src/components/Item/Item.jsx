import React, { Component } from 'react'
import "./Item.css"

export default class Item extends Component {

  state = {mouse: false}

  render() {

    const {id, name, done} = this.props
    return (
      <li onMouseEnter={this.handleMouse(true)}
          onMouseLeave={this.handleMouse(false)}
          style={{backgroundColor: this.state.mouse === true ? "#ddd" : "white"}}>

        <label>
          <input type="checkbox" checked={done} onChange={this.handleCheck(id)}/>
          <span>{name}</span>
        </label>

        <button className="btn btn-danger" 
                style={{display: this.state.mouse === true ? "block" : "none"}}
                onClick={() => this.handleDelete(id)}>Delete</button>

      </li>
    )
  }

  //callback:
  handleMouse = (flag) => {
    return () => {   
      this.setState({mouse: flag})
    }
  }

  
    handleCheck = (id) => {
      return (event) => {
        this.props.updateTodo(id, event.target.checked)
      }
    }
  
  handleDelete = (id) => {
    if(window.confirm("Are you sure you want to delete?") === true){
      this.props.deleteTodo(id)
    }
  }
}




