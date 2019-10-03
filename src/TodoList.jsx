import React from "react";

class TodoList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editClicked: false
    };

    this.handleEdit = this.handleEdit.bind(this);
    this.updateTodo = this.updateTodo.bind(this);
  }

  handleEdit() {
    this.setState({ editClicked: true });
  }

  updateTodo(todoId, updateTodoItem, priority) {
    this.setState({ editClicked: false });
    this.props.editTodo(todoId, updateTodoItem, priority);
  }

  render() {
    console.log(this.props.newTodo);
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
                {this.props.newTodo.map(todo => {
                  todo[1] === "1" ? (
                    <li key={todo[3]} className="list-group-item alert-success">
                      {todo[0]}
                    </li>
                  ) : null;
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
