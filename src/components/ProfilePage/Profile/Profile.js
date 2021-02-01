import Style from './Profile.module.css';
import Avatar from './Avatar/Avatar';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import Preloader from '../../Preloader/Preloader';

const Profile = (props) => {
  const render = () => {
    if (!props.profile) {
      return <Preloader />
    }
    return (<>
      <Avatar avatar={props.profile.photos.small} />
      <ProfileInfo
        profile={props.profile}
        status={props.status}
        updateStatus={props.updateStatus}
      />
    </>)
  }

  return (
    <div className={Style.profile}>
      { render() }
    </div>
  );
}

export default Profile;