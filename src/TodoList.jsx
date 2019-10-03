import React from "react";

class TodoList extends React.Component {
  constructor(props) {
    super(props);

    this.updateTodo = this.updateTodo.bind(this);
    // this.handlePriority = this.handlePriority.bind(this);
  }

  updateTodo(todoId, updateTodoItem, priority) {
    this.props.editTodo(todoId, updateTodoItem, priority);
  }

  // handlePriority(priority) {
  //   if (priority == '1') {
  //     return 'alert-success'
  //   } else if (priority == '2') {
  //     return 'alert-warning'
  //   } else if (priority == '3') {
  //     return 'alert-danger'
  //   }
  // }

  render() {
    // console.log(this.props.newTodo)
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
                    this.props.newTodo.map((todo) => {
                      return (
                        <li key={todo[0].todoId} id={"p" + todo[0].todoPriority} className="list-group-item">
                          <input type='checkbox' />
                          {todo[0].textArea}
                        </li>
                      )
                    })}
                </ul>
              </div>
            )}
        </div>
      </div>
    );
  }
}

export default TodoList;
