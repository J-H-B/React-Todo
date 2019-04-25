import React, { Component } from "react";

class AddTodo extends Component {
  state = {
    todo: {
      id: null,
      content: ""
    }
  };

  handleChange = e => {
    this.setState({
      todo: {
        id: Math.random(),
        content: e.target.value
      }
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.addTodo(this.state.todo);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="todo" name="todo">
          Add new Todo to the list:
        </label>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.todo.content}
        />
        <button className="waves-effect waves-light btn btn-large center-align">
          Add Todo
        </button>
      </form>
    );
  }
}

export default AddTodo;
