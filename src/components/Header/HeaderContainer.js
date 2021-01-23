import React from 'react';
import Header from './Header';
import { isAuthentcated } from '../../store/authReducer';
import { connect } from 'react-redux';

class HeaderContainer extends React.Component {

  componentDidMount() {
    isAuthentcated();
  }

  render () {
    return (<Header {...this.props} />);
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});

const HeaderContainerState = connect(mapStateToProps)(HeaderContainer);

export default HeaderContainerState;