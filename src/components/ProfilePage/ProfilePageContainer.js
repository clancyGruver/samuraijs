import { connect } from 'react-redux';
import ProfilePageAPI from './ProfilePageAPI';
import { setUserProfile } from '../../store/profileReducer';
import { withRouter } from 'react-router-dom';
import withAuthRedirect from '../../HOC/withAuthRedirect';
import { compose } from 'redux';

const mapStateToProps = (state) => ({
  posts: state.profilePage.posts,
  profile: state.profilePage.userProfile,
});
const mapDispatchToProps = {
  setUserProfile,
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter,
  //withAuthRedirect
)(ProfilePageAPI);