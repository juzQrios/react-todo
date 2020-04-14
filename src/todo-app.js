import React from "react";
import TodoInput from "./todo-input";
import TodoList from "./todo-list";

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoItems: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(todo) {
    let tI = this.state.todoItems;
    tI.push(todo);
    this.setState({ todoItems: tI });
  }
  render() {
    return (
      <div className="container">
        <TodoInput onSubmit={this.handleSubmit} />
        <TodoList todoItems={this.state.todoItems} />
      </div>
    );
  }
}

export default TodoApp;
