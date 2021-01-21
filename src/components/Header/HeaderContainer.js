import axios from 'axios';
import React from 'react';
import Header from './Header';
import { setUser } from '../../store/authReducer';
import { connect } from 'react-redux';

class HeaderContainer extends React.Component {

  componentDidMount() {
    axios.get(
      'https://social-network.samuraijs.com/api/1.0/auth/me', {
      withCredentials: true,
    })
      .then((res) => {;
        if (res.data.resultCode === 0) {
          this.props.setUser(res.data.data);
        }
      })
  }

  render () {
    return (<Header {...this.props} />);
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});
const mapDispatchToProps = { setUser };

const HeaderContainerState = connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);

export default HeaderContainerState;