import React, { Component } from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTodo: []
    };
    this.newObject = this.newObject.bind(this);
    this.deleteObject = this.deleteObject.bind(this);
    this.updateObject = this.updateObject.bind(this);
  }

  newObject(todoItem) {
    const todo = this.state.newTodo;
    todo.push(todoItem);
    this.setState({ newTodo: todo });
  }

  updateObject(text, priority, id) {
    const editTodo = this.state.newTodo;
    const updatedTodo = { text, priority, id };
    console.log(updatedTodo);
    const splice = editTodo.map(todo => todo[0]).indexOf(id);
    editTodo.splice(splice, 1, updatedTodo)
    this.setState({ editTodo });
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
            handleNewTodo={this.newObject}
          />

          <TodoList
            newTodo={this.state.newTodo}
            deleteFunc={this.deleteObject}
            callbackFromApp={this.updateObject}
          />
        </div>
      </div>
    );
  }
}

export default App;
