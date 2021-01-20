import UsersAPI from './UsersAPI';
import {
  changeFollowAC as changeFollow,
  setUsersAC as setUsers,
  setCurrentPageAC as setCurrentPage,
  setUsersCountAC as setUsersCount,
  setIsFetchingAC as setIsFetching
} from '../../store/usersReducer';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  users: state.usersPage.users,
  pageSize: state.usersPage.pageSize,
  totalUsersCount: state.usersPage.totalUsersCount,
  currentPage: state.usersPage.currentPage,
  isFetching: state.usersPage.isFetching,
});

const mapDispatchToProps = {
  changeFollow,
  setUsers,
  setCurrentPage,
  setUsersCount,
  setIsFetching,
};


const UsersPageContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPI);

export default UsersPageContainer;