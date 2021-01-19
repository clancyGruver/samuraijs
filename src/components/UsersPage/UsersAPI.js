import * as axios from 'axios';
import React from 'react';
import Users from './Users';

class UsersAPI extends React.Component{
  changeFollowHandler = (userId) => this.props.changeFollow(userId);

  getUsers = () => {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then((res) => {
        this.props.setUsers(res.data.items)
        this.props.setUsersCount(res.data.totalCount)
      });
  };

  changePageHandler = (page) => {
    this.props.setPage(page);
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
      .then((res) => {
        this.props.setUsers(res.data.items)
      });
  }

  componentDidMount() {
    this.getUsers();
  }

  render() {
    return (<Users
      totalUsersCount={this.props.totalUsersCount}
      pageSize={this.props.pageSize}
      currentPage={this.props.currentPage}
      users={this.props.users}
      changePageHandler={this.changePageHandler}
      changeFollowHandler={this.changeFollowHandler}
    />);
  }
} 

export default UsersAPI;