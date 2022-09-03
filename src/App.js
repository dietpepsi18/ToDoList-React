import React, { Component } from 'react'
import "./App.css"
import Header from "./components/Header/Header"
import List from "./components/List/List"
import Footer from "./components/Footer/Footer"

export default class App extends Component {
  //Initialize state：
  state = {todos: [
    {id: "001", name: "Cooking", done: true},
    {id: "002", name: "Read a Book", done: true},
    {id: "003", name: "Exercise", done: false},
    {id: "004", name: "Go to the grocery", done: true}
  ]}

  render() {
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo}/>
          <List todos={this.state.todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/>  
          <Footer todos={this.state.todos} checkAllTodo={this.checkAllTodo} clearAllDone={this.clearAllDone}/>
        </div>
      </div>
    )
  }

  //addTodo method: to add a task, this method will be passed to Header component as the props
  addTodo = (todoObj) => {
    const{todos} = this.state;    
    const newTodos = [todoObj, ...todos];  
    this.setState({todos: newTodos});
  }

  //updateTodo method: to update a task, this method will be passed to Item component as the props
  updateTodo = (id, done) => {
    const{todos} = this.state;    

    const updatedTodos = todos.map((todoObj) => {
      if(id === todoObj.id){  
        return {...todoObj, done: done}
      }
      else{
        return todoObj
      }
    })

    this.setState({todos: updatedTodos})
  }

  //deleteTodo method: to delete a task, this method will be passed to Item component as the props
  deleteTodo = (id) => {
    const{todos} = this.state;    

    const updatedTodos = todos.filter((todoObj) => {
      return todoObj.id !== id
    })

    this.setState({todos: updatedTodos})
  }

  //checkAllTodo method: to check/ uncheck all the tasks, this method will be passed to Footer component as the props
  checkAllTodo = (done) => {
    const{todos} = this.state;    

    const updatedTodos = todos.map((todoObj) => {
      return {...todoObj, done: done}
    })

    this.setState({todos: updatedTodos})
  }

  //clearAllDone method: to delete all the tasks that has been done, this method will be passed to Footer component as the props
  clearAllDone = () => {
    const{todos} = this.state;    

    const updatedTodos = todos.filter((todoObj) => {
      return todoObj.done === false
    })

    this.setState({todos: updatedTodos})
  }
}


