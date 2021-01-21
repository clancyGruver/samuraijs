import { connect } from 'react-redux';
import ProfilePageAPI from './ProfilePageAPI';
import { setUserProfile } from '../../store/profileReducer';

const mapStateToProps = (state) => ({
  posts: state.profilePage.posts,
  profile: state.profilePage.userProfile,
});
const mapDispatchToProps = {
  setUserProfile,
};

const ProfilePageContainer = connect(mapStateToProps, mapDispatchToProps)(ProfilePageAPI);

export default ProfilePageContainer;