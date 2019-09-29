import React, { Component } from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      priority: '1',
      textArea: '',
      newTodo: [],
      editEnabled: false,
      // newId: 0 += 1
    }
    this.handleChange = this.handleChange.bind(this);
    // this.handleNewTodo = this.handleNewTodo.bind(this);
    this.handleTodoPriority = this.handleTodoPriority.bind(this);
  }
  handleChange(e) {
    this.setState({ textArea: e.target.value })
  }

  handleTodoPriority(e) {
    this.setState({ priority: e.target.value })
  }

  deleteTodoList() {
    this.setState({ textArea: '' })
  }

  // handleNewTodo() {
  //   let todoCopy = this.state.newTodo
  //   todoCopy.push({
  //     textArea: this.state.textArea,
  //     priority: this.state.priority,
  //     editEnabled: this.state.editEnabled,
  //     newId: this.state.newId += 1
  //   })
  //   this.setState({ newTodo: todoCopy })
  //   console.log(todoCopy)
  // }

  render() {
    return (
      <div className='container mt-2'>
        <h1 className='text-white'>Simple Todo App</h1>
        <h4 className='text-white'>Track all of the things</h4>
        <hr style={{ borderTop: "1px solid white" }} />
        <div className="row">
          <AddTodo
            handleTodoPriority={this.handleTodoPriority}
            handleChange={this.handleChange}
            handleNewTodo={this.handleNewTodo}
            deleteTodoList={this.deleteTodoList}
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
