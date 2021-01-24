import React from 'react';
import { Redirect } from 'react-router-dom';

const withAuthRedirectComponent = (Component) => {

  return class AuthRedirectComponent extends React.Component {
    render() {
      if (!this.props.isAuth) return (<Redirect to='/login' />);
      return <Component {...this.props} />
    }
  }

}

export default withAuthRedirectComponent;