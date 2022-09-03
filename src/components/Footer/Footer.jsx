import React, { Component } from 'react'
import "./Footer.css"

export default class Footer extends Component {
  render() {

    const{todos} = this.props  

    //the amount of the tasks have been done
    const doneCount = todos.reduce((sum, currentObj) => {
      if(currentObj.done === true){
        return sum + 1;
      }
      else{
        return sum;
      }
    }, 0)

    //total tasks
    const total = todos.length

    return (
      <div className="todo-footer">
        <label>
          <input type="checkbox" checked={doneCount === total && total !== 0 ? true: false}
                                 onChange={this.handleCheckAll}/>
        </label>
        <span>
          <span>done{doneCount}</span> / total{total}
        </span>
        <button className="btn btn-danger" onClick={this.handleClearAllDone}>Delete all done</button>
      </div>
    )
  }

  
  handleCheckAll = (event) => {
    this.props.checkAllTodo(event.target.checked)
  }

  
  handleClearAllDone = () => {
    this.props.clearAllDone()
  }
}
