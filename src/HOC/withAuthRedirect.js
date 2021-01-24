import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToPropsRedirect = (state) => ({ isAuth: state.auth.isAuth, });

const withAuthRedirectComponent = (Component) => {

  class AuthRedirectComponent extends React.Component {
    render() {
      if (!this.props.isAuth) return (<Redirect to='/login' />);
      return <Component {...this.props} />
    }
  }

  return connect(mapStateToPropsRedirect)(AuthRedirectComponent);

}

export default withAuthRedirectComponent;