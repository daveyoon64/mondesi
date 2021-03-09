import { Component } from 'react';
import './App.css';
import {TodoForm, TodoList, Footer} from './components';
import {addTodo, generateId, findById, toggleTodo, updateTodo, removeTodo} from './lib/todoHelpers';

class App extends Component {
  state = {
    todos: [
      {id: 1, name: 'Learn JSX', isComplete: true},
      {id: 2, name: 'Build an awesome app', isComplete: false},
      {id: 3, name: 'Ship it', isComplete: false}
    ],
    currentTodo: ''
  };

  handleRemove = (id, e) => {
    e.preventDefault(); // stops the default behavior from updating the address bar
    const updatedTodos = removeTodo(this.state.todos, id);
    this.setState({todos: updatedTodos});
  }

  handleToggle = (id) => {
    const todo = findById(id, this.state.todos);
    const toggled = toggleTodo(todo);
    const updatedTodos = updateTodo(this.state.todos, toggled);
    this.setState({todos: updatedTodos});
  }

  handleChange = (e) => {
    this.setState({currentTodo: e.target.value});
  }

  handleEmptySubmit = (e) => {
    e.preventDefault();
    this.setState({
      errorMessage: 'Please supply a todo name!'
    })
  }

  handleSubmit = (e) => {
    e.preventDefault(); // prevents form from trying to submit using GET
    const newId = generateId();
    const newTodo = {
      id: newId,
      name: this.state.currentTodo,
      isComplete: false
    };
    const updatedTodos = addTodo(this.state.todos, newTodo);
    this.setState({
      todos: updatedTodos,
      currentTodo: '',
      errorMessage: ''
    })


  }

  render() {
    const submitHandler = this.state.currentTodo ? this.handleSubmit : this.handleEmptySubmit;
    return (
      <div className="App">
        <header className="App-header">
          <h2>Todos React</h2>
        </header>
        <div className="Todo-App">
          {this.state.errorMessage && <span className='error'>{this.state.errorMessage}</span>}
          <TodoForm handleChange={this.handleChange}
            currentTodo={this.state.currentTodo}
            handleSubmit={submitHandler} />
          <TodoList handleToggle={this.handleToggle} 
            todos={this.state.todos}
            handleRemove={this.handleRemove} />
          <Footer />
        </div>
      </div> 
    );
  }
}
  

export default App;
