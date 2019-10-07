import React from "react";

class UpdateTodo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            updatedTextArea: this.props.todoItem[0],
            updatedPriority: this.props.todoItem[1],
            updatedId: this.props.todoItem[2]
        };
        this.handleChange = this.handleChange.bind(this);
        this.handlePriority = this.handlePriority.bind(this);
        this.handleUpdatedTodo = this.handleUpdatedTodo.bind(this);
    }

    handleChange(e) {
        this.setState({ textArea: e.target.value })
    }

    handlePriority(e) {
        this.setState({ priority: e.target.value })
    }

    handleUpdatedTodo() {
        this.props.updatedTodo(
            this.state.updatedTextArea,
            this.state.updatedPriority,
            this.state.updateId
        )
    }

    render() {
        return (
            <div className="card mb-0">
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <div>Description</div>
                        <textarea
                            onChange={this.handleChange}
                            className="update-todo-text"
                        ></textarea>
                        <h6 className="mt-2">Change priority?</h6>
                        <select
                            onChange={this.handlePriority}
                            className="update-todo-priority btn border">
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
                        <br />
                        <button
                            onClick={this.handleUpdatedTodo}
                            className="update-todo btn btn-success float-right">
                            Save
                        </button>
                    </li>
                </ul>
            </div>
        );
    }
}

export default UpdateTodo;
