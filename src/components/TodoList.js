import React from 'react';
import PropTypes from 'prop-types';
import {TodoItem} from './TodoItem';

export const TodoList = (props) => {
  // {...todo} is shorthand for the properties of todo, instead of...
  // <TodoItem id={todo.id} name={todo.name}>
  // but what if you only use name={todo.name}? shouldn't that work?
  // no, because we need the id property of todo as well (for deleting)
  return (
    <div className="Todo-List">
      <ul>
        {props.todos.map(todo => <TodoItem handleToggle={props.handleToggle} key={todo.id} {...todo} handleRemove={props.handleRemove}/>)}
      </ul>
    </div>
  );
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired
};