import React from 'react';
import ProfilePage from './ProfilePage';

export default class ProfilePageAPI extends React.Component {
  render() {
    return (
      <ProfilePage {...this.props} />
    );
  }
}