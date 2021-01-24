import React from 'react';
import Header from './Header';
import { isAuthenticated } from '../../store/authReducer';
import { connect } from 'react-redux';

class HeaderContainer extends React.Component {

  componentDidMount() {
    this.props.isAuthenticated();
  }

  render () {
    return (<Header {...this.props} />);
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});

const mapDispatchToProps = {
  isAuthenticated
}

const HeaderContainerState = connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);

export default HeaderContainerState;