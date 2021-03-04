import { Component } from 'react';
import './App.css';
import {TodoForm, TodoList} from './components';
import {addTodo, generateId} from './lib/todoHelpers';

class App extends Component {
  state = {
    todos: [
      {id: 1, name: 'Learn JSX', isComplete: true},
      {id: 2, name: 'Build an awesome app', isComplete: false},
      {id: 3, name: 'Ship it', isComplete: false}
    ],
    currentTodo: ''
  };

  constructor(props) {
    super(props);
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
          <TodoList todos={this.state.todos}/>
        </div>
      </div> 
    );
  }
}
  

export default App;
