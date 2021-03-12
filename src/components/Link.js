import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Router, RouterContext} from './Router';

export class Link extends Component {
  static contextType = RouterContext;
  handleClick = (e) => {
    e.preventDefault();
    this.context.linkHandler(this.props.to);
  }
  render() {
    const activeClass = this.context.route === this.props.to ? 'active' : '';
    return <a href="#" className={activeClass} onClick={this.handleClick}>{this.props.children}</a>
  }
}

Link.propTypes = {
  to: PropTypes.string.isRequired
};