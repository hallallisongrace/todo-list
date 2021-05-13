import React, { Component } from 'react'


    
 class AddTodo extends Component {
     state = {
         content: ''
     }
   
    
    handleChange = (e) => {
this.setState({
content: e.target.value
});
    }
handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state);
    this.setState({
        content: ''
    })
}
    
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                <label class="add-todo-title">Add a new todo:</label>
                <input id="todo-input" type="text" onChange={this.handleChange} value={this.state.content} />
                </form>
            </div>
        )
    }
}

export default AddTodo;