import { Component } from 'react';
import testUtils from 'react-dom/test-utils';
import './App.css';
import {TodoForm, TodoList, Footer} from './components';
import {RouterContext} from './components/Router';
import {addTodo, generateId, findById, toggleTodo, updateTodo, removeTodo, filterTodos, store} from './lib/todoHelpers';

class App extends Component {
  state = {
    todos: [],
    currentTodo: ''
  };

  // using localStorage for persistence layer
  todosDB = store('todos-react');

  handleRemove = (id, e) => {
    e.preventDefault(); // stops the default behavior from updating the address bar
    const updatedTodos = removeTodo(this.state.todos, id);
    this.setState({todos: updatedTodos});
    store('todos-react', updatedTodos);
  }

  handleToggle = (id) => {
    const todo = findById(id, this.state.todos);
    const toggled = toggleTodo(todo);
    const updatedTodos = updateTodo(this.state.todos, toggled);
    this.setState({todos: updatedTodos});
    store('todos-react', updatedTodos);
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
    store('todos-react', updatedTodos);
  }

  // gives us access to this.context.route
  static contextType = RouterContext;
  render() {
    const submitHandler = this.state.currentTodo ? this.handleSubmit : this.handleEmptySubmit;
    const displayTodos = filterTodos(this.state.todos, this.context.route);
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
            todos={displayTodos}
            handleRemove={this.handleRemove} />
          <Footer />
        </div>
      </div> 
    );
  }
}
  

export default App;
