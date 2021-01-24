import React from 'react';
import ProfilePage from './ProfilePage';

export default class ProfilePageAPI extends React.Component {
  componentDidMount() {
    const { match } = this.props;
    const userId = match.params.userId;
    this.props.setUserProfile(userId);
  }

  render() {
    return (
      <ProfilePage {...this.props} />
    );
  }
}