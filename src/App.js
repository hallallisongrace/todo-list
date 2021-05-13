import React, { Component } from 'react';
import Todos from './Todos';
import AddTodo from './AddTodo';

class App extends Component {
  state = {
    todos: [
        {id: 1, content: 'Dance in the evening.'},
        {id: 2, content: 'Cook chicken piccatta.'},
        
    ]
  } 

  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    });
    this.setState({
      todos
    });
  }
  addTodo = (todo) =>{
todo.id = Math.random();
let todos = [...this.state.todos, todo];
this.setState({
  todos
});
  }
  render() {
    return (
      <div className="todo-app container">
        <h1 className="center white-text">My To Do List</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
        <AddTodo addTodo={this.addTodo} />
        </div>
    );
  }
}

export default App;

