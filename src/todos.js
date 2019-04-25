import React from "react";

const Todos = ({ todos, handleClick }) => {
  const todoList =
    todos.length > 0 ? (
      todos.map(todo => {
        return (
          <div className="collection-item" key={todo.id}>
            <span>{todo.content}</span>
            <a className="todo-anchor" href="#/" className="secondary-content">
              <i
                id={todo.id}
                className="material-icons small"
                onClick={() => {
                  handleClick(todo.id);
                }}
              >
                check_box_outline_blank
              </i>
            </a>
          </div>
        );
      })
    ) : (
      <p className="center">There is no todo's left, Yay!</p>
    );

  return <div className="todos collection">{todoList}</div>;
};

export default Todos;
