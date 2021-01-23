import React from 'react';
import Users from './Users';
import Preloader from '../Preloader/Preloader';

class UsersAPI extends React.Component{
  changeFollowHandler = (userId, isFollow) => this.props.changeFollow(userId, isFollow);

  changePageHandler = (pageNumber) => {
    this.props.changePageHandler(pageNumber, this.props.pageSize);
  }

  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  render() {
    return (
      <>
        { this.props.isFetching
        ? <Preloader />
        : <Users {...this.props}
          changePageHandler={this.changePageHandler}
          changeFollowHandler={this.changeFollowHandler}
        />
        }
      </>
    );
  }
} 

export default UsersAPI;