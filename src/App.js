import { Component } from 'react';
import './App.css';

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
          <form>
            <input type="text" 
                   value={this.state.currentTodo}
                   onChange={this.handleChange}
                   onKeyDown={this.handleKeyPress} />
          </form>
          <ul>
            {this.state.todos.map(todo => 
              <li key={todo.id}>
                <input type="checkbox" defaultChecked={todo.isComplete}/> {todo.name}
              </li>
            )}
          </ul>
        </div>
      </div> 
    );
  }
}
  

export default App;
