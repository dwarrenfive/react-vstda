import React, { Component } from 'react';

class TodoRow extends React.Component {
  render() {

    return (
      <div>
        <p value={this.props.alert}></p>
      </div>
    )
  }
}

class TodoTable extends React.Component {
  render() {

    return (
      <div className='container'>
        <div className="card">

          <TodoRow />
        </div>
      </div>
    )
  }
}

class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      priority: '0',
      textArea: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleNewTodo = this.handleNewTodo.bind(this);
    this.handleTodoPriority = this.handleTodoPriority.bind(this);
  }

  handleChange() {
    this.setState({ [target.name]: target.value })
  }

  handleNewTodo() {
    this.setState({ [target.name]: target.value })
  }

  handleTodoPriority() {
    this.setState({ [target.name]: target.value })
  }

  render() {
    let alert = {
      1: 'alert-success',
      2: 'alert-warning',
      3: 'alert-danger'
    };

    return (
      <div className="container">
        <div className="card">
          <div className="card-header">Add New Todo</div>
          <h4 className="text-black">Add New Todo</h4>
          <textarea cols="30" rows="10" value={this.state.textArea} onChange={this.handleChange} className="create-todo-text"></textarea>
          <h4>How much of a priority is this?</h4>
          <select defaultValue={alert} className="create-todo-priority">
            <option>Select a priority</option>
            <option value={1}>Priority Low</option>
            <option value={2}>Priority Medium</option>
            <option value={3}>Priority High</option>
          </select>
          <button onClick={this.handleTodoPriority, this.handleNewTodo}>Add</button>
        </div>
      </div>
    )
  }
}

class App extends Component {

  render() {
    return (
      <div className='container'>
        <h1>Very Simple Todo App</h1>
        <h4>Track all of the things</h4>
        <hr />
        <AddTodo />
        <TodoTable />
      </div>
    );
  }
}

export default App;
