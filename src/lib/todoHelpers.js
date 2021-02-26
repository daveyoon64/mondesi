import React from 'react';
import PropTypes from 'prop-types';

export const addTodo = (list, item) => {
  // return list.concat(item);
  // this also works
  return [...list, item];
};

export const generateId = () => {
  Math.floor(Math.random() * 100000);
}