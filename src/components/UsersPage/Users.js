import Style from './UsersPage.module.css';
import avatarImg from '../../assets/images/avatar-dialog.svg';
import { NavLink } from 'react-router-dom';

const Users = (props) => {

  const pagesElements = () => {
    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }

    let startPage = props.currentPage <= 3 ? 0 : props.currentPage - 3;
    let endPage = props.currentPage + 3 <= pagesCount ? props.currentPage + 3 : pagesCount;

    return pages.slice(startPage, endPage).map(page => (
      <span
        className={props.currentPage === page ? Style.selectedPage : ''}
        onClick={() => props.changePageHandler(page)}
        key={page}
      >{page}</span>
    ))
  }

  const usersElements = () => props.users.map(user => (
    <div key={user.id} className={Style.userContainer}>
      <div className={Style.avatarContainer}>
        <NavLink to={`/profile/${user.id}`}>
          <img className={Style.avatarImage} src={user.photos.small || avatarImg} alt="user avatar" />
        </NavLink>
        <button
          type="button"
          className={Style.followBtn}
          onClick={() => props.changeFollowHandler(user.id)}
        >{user.followed ? 'unfollow' : 'follow'}</button>
      </div>
      <div className={Style.infoContainer}>
        <div className={Style.leftSide}>
          <div className={Style.name}>{user.name}</div>
          <div className={Style.status}>{user.status}</div>
        </div>
        <div className={Style.rightSide}>
          <div className={Style.city}>{"user.location.city"}</div>
          <div className={Style.country}>{"user.location.country"}</div>
        </div>
      </div>
    </div>
  ));

  return (
    <div>
      <h1>Users Page</h1>
      {usersElements()}
      <div className={Style.paginationContainer}>
        {pagesElements()}
      </div>
    </div>
  );
}

export default Users;