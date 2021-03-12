import React, {Component} from 'react';
import PropTypes from 'prop-types';

const getCurrentPath = () => {
  const path = document.location.pathname;
  return path.substring(path.lastIndexOf('/'));
}

export const RouterContext = React.createContext();

export class Router extends Component {
  state = {
    route: getCurrentPath()
  }

  handleLinkClick = (route) => {
    this.setState({route});
    window.history.pushState(null, '', route);
  }

  render() {
    return <div>
        <RouterContext.Provider value={{route: this.state.route, linkHandler: this.handleLinkClick}} >
          {this.props.children}
        </RouterContext.Provider>
      </div>
  }
}

Router.propTypes = {
  to: PropTypes.string.isRequired
};