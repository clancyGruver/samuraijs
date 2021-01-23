import UsersAPI from './UsersAPI';
import {
  toggleFollow,
  setIsFollowingProgress,
  getUsers,
  changePageHandler,
} from '../../store/usersReducer';
import { connect } from 'react-redux';

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


const UsersPageContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPI);

export default UsersPageContainer;