import UsersAPI from './UsersAPI';
import {
  toggleFollow,
  setIsFollowingProgress,
  getUsers,
  changePageHandler,
} from '../../store/usersReducer';
import { connect } from 'react-redux';
import withAuthRedirect from '../../HOC/withAuthRedirect';
import { compose } from 'redux';

const mapStateToProps = (state) => ({
  users: state.usersPage.users,
  pageSize: state.usersPage.pageSize,
  totalUsersCount: state.usersPage.totalUsersCount,
  currentPage: state.usersPage.currentPage,
  isFetching: state.usersPage.isFetching,
  isFollowingProgress: state.usersPage.isFollowingProgress,
});

const mapDispatchToProps = {
  toggleFollow,
  setIsFollowingProgress,
  getUsers,
  changePageHandler,
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(UsersAPI);