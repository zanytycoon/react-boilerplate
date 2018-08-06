import PropTypes from 'prop-types';
import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

const AuthRoute = ({ component: Component, loggedIn, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      loggedIn === true ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/auth',
            state: { from: props.location },
          }}
        />
      )
    }
  />
);

AuthRoute.propTypes = {
  component: PropTypes.node.isRequired,
  location: PropTypes.object.isRequired,
  loggedIn: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
  return {
    loggedIn: state.auth.loggedIn,
  };
}

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    null,
  ),
)(AuthRoute);
