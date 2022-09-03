import React, { Component } from 'react'
import Item from "../Item/Item"
import "./List.css"
import ProprTypes from "prop-types"

export default class List extends Component {

  //set limitation to ensure attributes in props have correct datatypes
  static propsType = {
    todos: ProprTypes.array.isRequired,
    updateTodo: ProprTypes.func.isRequired,
    deleteTodo: ProprTypes.func.isRequired
  }

  render() {

    const{todos, updateTodo, deleteTodo} = this.props  

    return (
      <ul className="todo-main">

        {  

          todos.map((todo) => {
            return <Item key={todo.id} {...todo} updateTodo={updateTodo} deleteTodo={deleteTodo}/>
          })

        }
        
      </ul>
    )
  }
}
