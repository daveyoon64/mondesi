import React from 'react';
import {Router} from './Router';

// stateless functional component
export const Footer = () => {
  return (
    <div className='Footer'>
      <Router to='/'>All</Router>
      <Router to='/active'>Active</Router>
      <Router to='/complete'>Complete</Router>
    </div>
  )
}