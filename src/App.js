import { Component } from 'react';
import './App.css';
import {TodoForm, TodoList} from './components'

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
  }

  handleChange(e) {
    this.setState({currentTodo: e.target.value});
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
            currentTodo={this.state.currentTodo}/>
          <TodoList todos={this.state.todos}/>
        </div>
      </div> 
    );
  }
}
  

export default App;
