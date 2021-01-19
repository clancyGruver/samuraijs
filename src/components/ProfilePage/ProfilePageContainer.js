import { connect } from 'react-redux';
import ProfilePage from './ProfilePage'

const mapStateToProps = (state) => ({
  posts: state.profilePage.posts,
});

const ProfilePageContainer = connect(mapStateToProps)(ProfilePage);

export default ProfilePageContainer;