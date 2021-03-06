import Style from './ProfilePage.module.css';
import Profile from './Profile/Profile';
import MainImage from './MainImage/MainImage';
import Posts from './Posts/Posts';

const ProfilePage = (props) => {
  return (
    <>
      <MainImage />
      <div className={Style.container}>
        <Profile
          profile={props.profile}
          status={props.status}
          updateStatus={props.updateStatus}
        />
        <Posts
          posts={props.posts}
        />
      </div>
    </>
  );
}

export default ProfilePage;