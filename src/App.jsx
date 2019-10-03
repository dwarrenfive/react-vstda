import React, { Component } from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      priority: "1",
      textArea: "",
      newTodo: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleArray = this.handleArray.bind(this);
    this.updateTodo = this.updateTodo.bind(this);
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleArray(todoCopy) {
    const newTodo = this.state.newTodo;
    newTodo.push(todoCopy);
    this.setState({ newTodo, textArea: "" });
  }

  updateTodo(todoId, updateTodoItem, priority) {
    const newTodo = [...this.state.newTodo];
    const updatedTodo = [todoId, updateTodoItem, priority];
    const spliceIndex = newTodo.map(todoItem => todoItem[0]).indexOf(todoId);
    newTodo.splice(spliceIndex, 1, updatedTodo);
    this.setState({ newTodo });
  }

  render() {
    return (
      <div className="container mt-2">
        <h1 className="text-white">Simple Todo App</h1>
        <h4 className="text-white">Track all of the things</h4>
        <hr style={{ borderTop: "1px solid white" }} />
        <div className="row">
          <AddTodo
            textArea={this.state.textArea}
            priority={this.state.priority}
            handleChange={this.handleChange}
            sendArray={this.handleArray}
          />

          <TodoList newTodo={this.state.newTodo} editTodo={this.updateTodo} />
        </div>
      </div>
    );
  }
}

export default App;
