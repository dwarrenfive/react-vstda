import React, { Component } from 'react';

class TodoRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {

    return (
      <div className='card mb-0'>
        <ul className="list-group list-group-flush">
          <li className='list-group-item' key={this.props.newId}></li>
        </ul>
      </div>
    )
  }
}

class TodoTable extends React.Component {
  render() {
    const todo = [];

    return (
      <div className="col-lg-8 col-sm-12">
        <div className="card rounded-ld shadow-lg">
          <div className="card-header">
            View Todos
          </div>
          <div className="card-body alert-primary">
            <h6>Welcome to Simple Todo App</h6>
            <p className='no-margin'>Get started now by adding a New Todo</p>
          </div>
          {todo}
        </div>
      </div>
    )
  }
}

class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      priority: '1',
      textArea: '',
      newTodo: [],
      editEnabled: true,
      newId: 0
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleNewTodo = this.handleNewTodo.bind(this);
    this.handleTodoPriority = this.handleTodoPriority.bind(this);
  }

  handleChange(e) {
    this.setState({ textArea: e.target.value })
  }

  handleNewTodo() {
    let todoCopy = this.state.newTodo.slice();
    todoCopy.push({
      textArea: this.state.textArea,
      priority: this.state.priority,
      editEnabled: this.state.editEnabled,
      newId: this.state.newId += 1
    })
    this.setState({ newTodo: todoCopy })
    console.log(todoCopy)
  }

  handleTodoPriority(e) {
    this.setState({ priority: e.target.value })
  }

  render() {
    let alert = {
      1: 'alert-success',
      2: 'alert-warning',
      3: 'alert-danger'
    };

    return (
      <div className="col-lg-4">
        <div className="card rounded-lg shadow-lg">
          <div className="card-header">Add New Todo</div>
          <div className="card-body">
            <h6 className="text-black">I want to...</h6>
            <textarea value={this.state.textArea} onChange={this.handleChange} className="create-todo-text"></textarea>
            <h6 className='mt-2'>How much of a priority is this?</h6>
            <select onChange={this.handleTodoPriority} className="create-todo-priority btn border btn-block">
              <option value='1'>Select a Priority</option>
              <option value='1' className={alert[1]}>Priority Low</option>
              <option value='2' className={alert[2]}>Priority Medium</option>
              <option value='3' className={alert[3]}>Priority High</option>
            </select>
          </div>
          <div className="card-footer">
            <button onClick={this.handleNewTodo} className='btn btn-success btn-block'>Add</button>
          </div>
        </div>
      </div>
    )
  }
}

class App extends Component {

  render() {
    return (
      <div className='container mt-2'>
        <h1 className='text-white'>Simple Todo App</h1>
        <h4 className='text-white'>Track all of the things</h4>
        <hr style={{ borderTop: "1px solid white" }} />
        <div className="row">
          <AddTodo />
          <TodoTable todo={this.props.texts} />
        </div>
      </div>
    );
  }
}

export default App;
