import UsersAPI from './UsersAPI';
import { changeFollowAC, setUsersAC, setCurrentPageAC, setUsersCountAC } from '../../store/usersReducer';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  users: state.usersPage.users,
  pageSize: state.usersPage.pageSize,
  totalUsersCount: state.usersPage.totalUsersCount,
  currentPage: state.usersPage.currentPage,
});
const mapDispatchToProps = (dispatch) => ({
  changeFollow(id) {dispatch(changeFollowAC(id));},
  setUsers(users) {dispatch(setUsersAC(users));},
  setPage(pageNumber) {dispatch(setCurrentPageAC(pageNumber))},
  setUsersCount(usersCount) {dispatch(setUsersCountAC(usersCount))},
});

const UsersPageContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPI);

export default UsersPageContainer;