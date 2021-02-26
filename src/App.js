import { Component } from 'react';
import './App.css';
import {TodoForm, TodoList} from './components';
import {addTodo, generateId} from './lib/todoHelpers';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {id: 1, name: 'Learn JSX', isComplete: true},
        {id: 2, name: 'Build an awesome app', isComplete: false},
        {id: 3, name: 'Ship it', isComplete: false}
      ],
      currentTodo: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({currentTodo: e.target.value});
  }

  handleSubmit(e) {
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
      currentTodo: ''
    })


  }

  // handleKeyPress = (e) => {
  //   if (e.key === 'Enter') {
  //     const newTodo = [{
  //       id: 123,
  //       name: e.target.value,
  //       isComplete: false
  //     }];
  //     const prevState = this.state.todos;
  //     this.setState(prevState => ({
  //       todos: [...prevState.todos, newTodo]
  //     }))
  //   }
  // }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>Todos React</h2>
        </header>
        <div className="Todo-App">
          <TodoForm handleChange={this.handleChange}
            currentTodo={this.state.currentTodo}
            handleSubmit={this.handleSubmit} />
          <TodoList todos={this.state.todos}/>
        </div>
      </div> 
    );
  }
}
  

export default App;
