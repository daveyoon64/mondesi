import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class Router extends Component {
  handleClick = (e) => {
    e.preventDefault();
    window.history.pushState(null, '', this.props.to);
  }
  render() {
    return <a href="#" onClick={this.handleClick}>{this.props.children}</a>
  }
}

Router.propTypes = {
  to: PropTypes.string.isRequired
};