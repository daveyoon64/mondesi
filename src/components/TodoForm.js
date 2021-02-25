import React from 'react'

export const TodoForm = (props) => (
  <form>
    <input type="text"
      onChange={props.handleChange}
      value={props.currentTodo}/>
  </form>
);