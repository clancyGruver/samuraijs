import Style from './Profile.module.css';
import Avatar from './Avatar/Avatar';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = () => {
  return (
    <div className={Style.profile}>
      <Avatar />
      <ProfileInfo />
    </div>
  );
}

export default Profile;