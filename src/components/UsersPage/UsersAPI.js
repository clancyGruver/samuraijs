import * as axios from 'axios';
import React from 'react';
import Users from './Users';
import Preloader from '../Preloader/Preloader';

class UsersAPI extends React.Component{
  changeFollowHandler = (userId) => this.props.changeFollow(userId);

  getUsers = () => {
    this.props.setIsFetching(true);
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then((res) => {
        this.props.setUsers(res.data.items)
        this.props.setUsersCount(res.data.totalCount)
        this.props.setIsFetching(false);
      });
  };

  changePageHandler = (page) => {
    this.props.setIsFetching(true);
    this.props.setCurrentPage(page);
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
      .then((res) => {
        this.props.setUsers(res.data.items)
        this.props.setIsFetching(false);
      });
  }

  componentDidMount() {
    this.getUsers();
  }

  render() {
    return (
      <>
        { this.props.isFetching 
        ? <Preloader />
        : <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          users={this.props.users}
          changePageHandler={this.changePageHandler}
          changeFollowHandler={this.changeFollowHandler}
          isFetching={this.props.isFetching}
        />
        }
      </>
    );
  }
} 

export default UsersAPI;