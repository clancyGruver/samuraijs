import { connect } from 'react-redux';
import ProfilePageAPI from './ProfilePageAPI';
import { setUserProfile } from '../../store/profileReducer';
import { withRouter } from 'react-router-dom';
import withAuthRedirect from '../../HOC/withAuthRedirect';

const mapStateToProps = (state) => ({
  posts: state.profilePage.posts,
  profile: state.profilePage.userProfile,
});
const mapDispatchToProps = {
  setUserProfile,
};

let AuthRedirect = withAuthRedirect(ProfilePageAPI);

const ProfilePageAPIWithRouter = withRouter(AuthRedirect);

const ProfilePageContainer = connect(mapStateToProps, mapDispatchToProps)(ProfilePageAPIWithRouter);

export default ProfilePageContainer;