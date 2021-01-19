import Style from './UsersPage.module.css';
import avatarImg from '../../assets/images/avatar-dialog.svg';
import * as axios from 'axios';

const UsersPage = (props) => {

  const getUsers = () => {
    if (props.users.length === 0){

      axios
        .get('https://social-network.samuraijs.com/api/1.0/users')
        .then((res) => {
          props.setUsers(res.data.items)
        });
    }
  };

  const changeFollowHandler = (userId) => props.changeFollow(userId);
  
  const usersElements = props.users.map( user => (
    <div key={user.id} className={Style.userContainer}>
      <div className={Style.avatarContainer}>
        <img className={Style.avatarImage} src={user.photos.small || avatarImg} alt="user avatar" />
        <button
          type="button"
          className={Style.followBtn}
          onClick={() => changeFollowHandler(user.id)}
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
      <button onClick={getUsers}>load users</button>
      {usersElements}
    </div>
  );
}

export default UsersPage;