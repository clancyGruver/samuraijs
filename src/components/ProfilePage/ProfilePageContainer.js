import { connect } from 'react-redux';
import ProfilePageAPI from './ProfilePageAPI';
import { setUserProfile, getStatus, updateStatus } from '../../store/profileReducer';
import { withRouter } from 'react-router-dom';
import withAuthRedirect from '../../HOC/withAuthRedirect';
import { compose } from 'redux';

const mapStateToProps = (state) => ({
  posts: state.profilePage.posts,
  profile: state.profilePage.userProfile,
  status: state.profilePage.status,
});
const mapDispatchToProps = {
  setUserProfile,
  getStatus,
  updateStatus,
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter,
  //withAuthRedirect
)(ProfilePageAPI);