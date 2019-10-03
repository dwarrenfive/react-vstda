import React, { Component } from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      textArea: '',
      priority: '1',
      newTodo: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleObject = this.handleObject.bind(this);
  }
  handleChange(e) {
    this.setState({ textArea: e.target.value })
  }

  handleObject(todoItem) {
    const todo = this.state.newTodo;
    todo.push(todoItem);
    this.setState({ newTodo: todo, textArea: '' });
  }

  render() {
    return (
      <div className='container mt-2'>
        <h1 className='text-white'>Simple Todo App</h1>
        <h4 className='text-white'>Track all of the things</h4>
        <hr style={{ borderTop: "1px solid white" }} />
        <div className="row">
          <AddTodo
            priority={this.state.priority}
            textArea={this.state.textArea}
            handleChange={this.handleChange}
            handleNewTodo={this.handleObject}
          />

          <TodoList
            newTodo={this.state.newTodo}
          />
        </div>
      </div>
    );
  }
}

export default App;
