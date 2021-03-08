import React from 'react';
import PropTypes from 'prop-types'
import {partial} from '../lib/utils'

// onChange={() => props.handleToggle(props.id)}
export const TodoItem = (props) => {
  const handleRemove = partial(props.handleRemove, props.id);
  return (
    <li>
      <span className='delete-item'><a href="#" onClick={handleRemove}>X</a></span>
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