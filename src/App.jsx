import React, { Component } from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTodo: []
    };
    this.handleObject = this.handleObject.bind(this);
    this.deleteObject = this.deleteObject.bind(this);
    this.updateObject = this.updateObject.bind(this);
  }

  handleObject(todoItem) {
    const todo = this.state.newTodo;
    todo.push(todoItem);
    this.setState({ newTodo: todo });
  }

  updateObject(updateItem, UpdatePriority, UpdateId) {
    const todo = this.state.newTodo;
    todo.push(updateItem, UpdatePriority, UpdateId);
    this.setState({ newTodo: todo });
  }

  deleteObject(id) {
    this.setState({
      newTodo: this.state.newTodo.filter(x => x.id != id)
    });
  }

  render() {
    return (
      <div className='container mt-2'>
        <h1 className='text-white'>Simple Todo App</h1>
        <h4 className='text-white'>Track all of the things</h4>
        <hr style={{ borderTop: "1px solid white" }} />
        <div className="row">
          <AddTodo
            handleNewTodo={this.handleObject}
          />

          <TodoList
            newTodo={this.state.newTodo}
            deleteFunc={this.deleteObject}
            updateObject={this.updateObject}
          />
        </div>
      </div>
    );
  }
}

export default App;
