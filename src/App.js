import React, { Component } from "react";

import Todos from "./todos";
import AddTodo from "./addTodo";

class App extends Component {
  state = {
    todos: [
      { id: 1, content: "buy some milk" },
      { id: 2, content: "play mario kart" }
    ]
  };

  handleClick = id => {
    const todoList = this.state.todos.filter(todo => {
      return todo.id !== id;
    });
    document.getElementById(id).innerText = "check_box";
    setTimeout(id => {
      this.setState({
        todos: todoList
      });
    }, 300);
  };

  addTodo = todo => {
    const newTodoList = [...this.state.todos, todo];
    this.setState({
      todos: newTodoList
    });
  };

  render() {
    return (
      <div className="todo-app container">
        <h1 className="center title ">Todo's</h1>
        <Todos todos={this.state.todos} handleClick={this.handleClick} />
        <AddTodo addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
