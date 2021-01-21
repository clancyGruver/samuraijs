import Style from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
  return (
    <div className={Style.info}>
      <p className="profile-name"><strong>{props.profile.fullName}</strong></p>
      <p className="profile-about">{props.profile.aboutMe}</p>
      <p className="profile-city">City: <strong>Chelyabinsk</strong></p>
      <p className="profile-education">Education: <strong>BGUIR'11</strong></p>
      <p className="profile-site">Web-site: <strong>https://ya.ru</strong></p>
    </div>
  );
}

export default ProfileInfo;