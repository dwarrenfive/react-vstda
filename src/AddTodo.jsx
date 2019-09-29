import React from 'react';

class AddTodo extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleNewTodo = this.handleNewTodo.bind(this);
        // this.handleTodoPriority = this.handleTodoPriority.bind(this);
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleNewTodo(e) {
        let todoCopy = this.props.newTodo
        todoCopy.push({
            textArea: e.target.value,
            priority: e.target.value,
            editEnabled: e.target.value,
            newId: e.target.value += 1
        })
        this.setState({ newTodo: todoCopy })
        console.log(todoCopy)
    }
    //     const todoItem = [];
    //     // const newId = this.props.newId;
    //     const textArea = this.props.textArea;
    //     const priority = this.props.priority;
    //     todoItem.push(textArea, priority);
    //     this.props.sendArray(todoItem);
    // console.log(todoItem)
    // handleTodoPriority(e) {
    //     this.setState({ priority: e.target.value })
    // }

    // deleteTodoList() {
    //     this.setState({ textArea: '' })
    // }

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
                        <textarea onChange={this.handleChange} className="create-todo-text"></textarea>
                        <h6 className='mt-2'>How much of a priority is this?</h6>
                        <select onChange={this.handleChange} className="create-todo-priority btn border btn-block">
                            <option value='1'>Select a Priority</option>
                            <option value='1' className={alert[1]}>Priority Low</option>
                            <option value='2' className={alert[2]}>Priority Medium</option>
                            <option value='3' className={alert[3]}>Priority High</option>
                        </select>
                    </div>
                    <div className="card-footer">
                        <button onClick={() => { this.handleNewTodo(); this.deleteTodoList; }} className='btn btn-success btn-block'>Add</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddTodo;