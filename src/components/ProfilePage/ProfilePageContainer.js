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

const mapStateToPropsRedirect = (state) => ({
  isAuth: state.auth.isAuth,
});

let AuthRedirect = withAuthRedirect(ProfilePageAPI);
AuthRedirect = connect(mapStateToPropsRedirect)(AuthRedirect);

const ProfilePageAPIWithRouter = withRouter(AuthRedirect);

const ProfilePageContainer = connect(mapStateToProps, mapDispatchToProps)(ProfilePageAPIWithRouter);

export default ProfilePageContainer;