import Style from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
    <div className={Style.info}>
      <p className="profile-name"><strong>Ivan I.</strong></p>
      <p className="profile-birthday">Date of birth: <strong>01.01.2000</strong></p>
      <p className="profile-city">City: <strong>Chelyabinsk</strong></p>
      <p className="profile-education">Education: <strong>BGUIR'11</strong></p>
      <p className="profile-site">Web-site: <strong>https://ya.ru</strong></p>
    </div>
  );
}

export default ProfileInfo;