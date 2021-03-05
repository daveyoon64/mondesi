import React from 'react';
import PropTypes from 'prop-types'

// onChange={() => props.handleToggle(props.id)}
export const TodoItem = (props) => {
  return (
    <li>
      <input type="checkbox" onChange={() => props.handleToggle(props.id)} 
        checked={props.isComplete}/> {props.name}
    </li>
  );
}

TodoItem.propTypes = {
  name: PropTypes.string.isRequired,
  isComplete: PropTypes.bool,
  id: PropTypes.number.isRequired
};