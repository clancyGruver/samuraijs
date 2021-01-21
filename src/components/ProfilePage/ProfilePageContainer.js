import { connect } from 'react-redux';
import ProfilePageAPI from './ProfilePageAPI';
import { setUserProfile } from '../../store/profileReducer';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state) => ({
  posts: state.profilePage.posts,
  profile: state.profilePage.userProfile,
});
const mapDispatchToProps = {
  setUserProfile,
};

const ProfilePageAPIWithRouter = withRouter(ProfilePageAPI);

const ProfilePageContainer = connect(mapStateToProps, mapDispatchToProps)(ProfilePageAPIWithRouter);

export default ProfilePageContainer;