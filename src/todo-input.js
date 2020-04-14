import React from "react";
import "./todo-input-styles.css";

class TodoInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    let currentInput = event.target.value;
    this.setState({
      value: currentInput
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(this.state.value);
    this.setState({
      value: ""
    });
  }
  render() {
    return (
      <form className="todo__form" onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
          className="todo__input"
          required
          minLength="3"
        />
        <input className="todo__add" type="submit" value="+" />
      </form>
    );
  }
}

export default TodoInput;
