import React from "react";
import "./todo-list-styles.css";

class TodoList extends React.Component {
  render() {
    let todoItems = this.props.todoItems;
    let todoItemsTemplate = todoItems.map(todoItem => (
      <li className="todo__item" key={todoItem.toString()}>
        <input type="checkbox" />
        <div>{todoItem}</div>
      </li>
    ));
    return <ul className="todo__list">{todoItemsTemplate}</ul>;
  }
}

export default TodoList;
