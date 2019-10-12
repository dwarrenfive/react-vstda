import React from "react";
import UpdateTodo from './UpdateTodo'

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editClicked: false
    }
    this.handleEdit = this.handleEdit.bind(this);
    this.updatedObject = this.updatedObject.bind(this);
    this.deleteListItem = this.deleteListItem.bind(this);
  }

  handleEdit(id) {
    let tempEdit = this.props.newTodo;
    for (let i = 0; i < tempEdit.length; i++) {
      console.log(tempEdit[i].id)
      if (tempEdit[i].id === id) {
        this.setState({
          editClicked: true
        })
      }
    }
  }

  updatedObject(todoText, todoPriority, todoId) {
    this.setState({ editClicked: false });
    this.props.callbackFromApp(todoText, todoPriority, todoId)
  }

  deleteListItem(id) {
    this.props.deleteFunc(id)
  }

  render() {
    return (
      <div className="col-lg-8 col-sm-12">
        <div className="card rounded-ld shadow-lg">
          <div className="card-header">View Todos</div>
          {this.props.newTodo.length === 0 ? (
            <div className="card-body alert-primary">
              <h6>Welcome to Simple Todo App</h6>
              <p className="no-margin">Get started now by adding a New Todo</p>
            </div>
          ) : (
              <div className="card mb-0">
                <ul className="list-group list-group-flush">
                  {
                    this.props.newTodo.map((todo) => (
                      todo.priority == '1', '2', '3' ?
                        <li key={todo.id} id={"p" + todo.priority} className="list-group-item">
                          <input type='checkbox' />
                          {todo.text}
                          <button className='delete-todo btn float-right' onClick={() => this.deleteListItem(todo.id)}>
                            <i className="fas fa-recycle"></i>
                          </button>
                          <button className='edit-todo btn float-right' onClick={() => this.handleEdit(todo.id)}>
                            <i className="fas fa-user-edit"></i>
                          </button>
                          {this.state.editClicked === true ?
                            <UpdateTodo
                              todoItem={todo}
                              callbackFromUpdate={this.updatedObject}
                            />
                            : null
                          }
                        </li>
                        : null
                    )
                    )}
                </ul>
              </div>
            )}
        </div>
      </div>
    );
  }
}

export default TodoList;
