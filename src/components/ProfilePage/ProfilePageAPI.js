import React from 'react';
import ProfilePage from './ProfilePage';
import * as axios from 'axios';

export default class ProfilePageAPI extends React.Component {
  componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
      .then((res) => {
        this.props.setUserProfile(res.data);
      });
  }

  render() {
    return (
      <ProfilePage {...this.props} />
    );
  }
}