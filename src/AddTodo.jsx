import React from "react";

class AddTodo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      priority: "1",
      newId: 0
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleNewTodo = this.handleNewTodo.bind(this);
    this.handlePriority = this.handlePriority.bind(this);
  }

  handleChange(e) {
    this.props.handleChange(e);
  }

  handlePriority(e) {
    this.setState({ priority: e.target.value })
  }

  handleNewTodo() {
    let todoCopy = [];
    let todoId = this.state.newId;
    let todoPriority = this.state.priority;
    this.setState({
      newId: todoId + 1
    });
    let textArea = this.props.textArea;
    todoCopy.push({
      textArea,
      todoPriority,
      todoId
    });
    this.props.handleNewTodo(todoCopy);
  }

  render() {
    return (
      <div className="col-lg-4">
        <div className="card rounded-lg shadow-lg">
          <div className="card-header">Add New Todo</div>
          <div className="card-body">
            <h6 className="text-black">I want to...</h6>
            <textarea
              onChange={this.handleChange}
              value={this.props.textArea}
              className="create-todo-text"
            ></textarea>
            <h6 className="mt-2">How much of a priority is this?</h6>
            <select
              onChange={this.handlePriority}
              className="create-todo-priority btn border btn-block"
            >
              <option value="1">Select a Priority</option>
              <option value="1" className="alert-success">
                Priority Low
              </option>
              <option value="2" className="alert-warning">
                Priority Medium
              </option>
              <option value="3" className="alert-danger">
                Priority High
              </option>
            </select>
          </div>
          <div className="card-footer">
            <button
              onClick={this.handleNewTodo}
              className="btn btn-success btn-block"
            >
              Add
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default AddTodo;
