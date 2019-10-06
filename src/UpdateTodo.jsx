import React from "react";

class UpdateTodo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            textArea: '',
            priority: '1',
            newId: 0
        };
        this.handleChange = this.handleChange.bind(this);
        this.handlePriority = this.handlePriority.bind(this);
        this.handleNewTodo = this.handleNewTodo.bind(this);
    }

    handleChange(e) {
        this.setState({ textArea: e.target.value })
    }

    handlePriority(e) {
        this.setState({ priority: e.target.value })
    }

    handleNewTodo() {
        let todoListItem = {
            text: this.state.textArea,
            priority: this.state.priority,
            id: Math.random(this.state.newId)
        }
        this.props.handleNewTodo(todoListItem)
        this.setState({
            textArea: ''
        })
    }

    render() {
        return (
            <div className="col-lg-8 col-sm-12">
                <div className="card rounded-ld shadow-lg">
                    <div className="card-header">Description</div>
                    <div className="card-body">
                        <textarea
                            onChange={this.handleChange}
                            value={this.state.textArea}
                            className="update-todo-text"
                        ></textarea>
                        <h6 className="mt-2">Change priority?</h6>
                        <select
                            onChange={this.handlePriority}
                            className="update-todo-priority btn border btn-block">
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
                    </div>
                    <div className="card-footer">
                        <button
                            onClick={this.handleNewTodo}
                            className="update-todo btn btn-success btn-block"
                        >
                            Save
            </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default UpdateTodo;
