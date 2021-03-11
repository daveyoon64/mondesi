import React, {Component} from 'react';
import PropTypes from 'prop-types';

const getCurrentPath = () => {
  const path = document.location.pathname;
  return path.substring(path.lastIndexOf('/'));
}
export class Router extends Component {
  state = {
    route: getCurrentPath()
  }
  render() {
    return <div>{this.props.children}</div>
  }
}

Router.propTypes = {
  to: PropTypes.string.isRequired
};