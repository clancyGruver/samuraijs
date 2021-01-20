import { connect } from 'react-redux';
import ProfilePageAPI from './ProfilePageAPI';

const mapStateToProps = (state) => ({
  posts: state.profilePage.posts,
});

const ProfilePageContainer = connect(mapStateToProps)(ProfilePageAPI);

export default ProfilePageContainer;