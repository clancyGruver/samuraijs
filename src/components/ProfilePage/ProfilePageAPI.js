import React from 'react';
import ProfilePage from './ProfilePage';
import * as axios from 'axios';

export default class ProfilePageAPI extends React.Component {
  componentDidMount() {
    const { match } = this.props;
    const userId = match.params.userId || 2;
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
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