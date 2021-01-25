import Style from './ProfileInfo.module.css';
import AboutMe from './AboutMe/AboutMe';

const ProfileInfo = (props) => {
  return (
    <div className={Style.info}>
      <p className="name"><strong>{props.profile.fullName}</strong></p>
      <AboutMe status={props.profile.aboutMe} />
      <div className={Style.contacts}>
        {props.profile.contacts.facebook && <a rel="noreferrer" target="_blank" href={props.profile.contacts.facebook}><i className="fab fa-facebook"></i></a> }
        {props.profile.contacts.website && <a rel="noreferrer" target="_blank" href={props.profile.contacts.website}><i className="fas fa-globe"></i></a> }
        {props.profile.contacts.vk && <a rel="noreferrer" target="_blank" href={props.profile.contacts.vk}><i className="fab fa-vk"></i></a> }
        {props.profile.contacts.twitter && <a rel="noreferrer" target="_blank" href={props.profile.contacts.twitter}><i className="fab fa-twitter"></i></a> }
        {props.profile.contacts.instagram && <a rel="noreferrer" target="_blank" href={props.profile.contacts.instagram}><i className="fab fa-instagram"></i></a> }
        {props.profile.contacts.youtube && <a rel="noreferrer" target="_blank" href={props.profile.contacts.youtube}><i className="fab fa-youtube"></i></a> }
        {props.profile.contacts.github && <a rel="noreferrer" target="_blank" href={props.profile.contacts.github}><i className="fab fa-github"></i></a> }
        {props.profile.contacts.mainLink && <a rel="noreferrer" target="_blank" href={props.profile.contacts.mainLink}><i className="fas fa-link"></i></a> }
      </div>
      {props.profile.lookingForAJob && <p>{props.profile.lookingForAJobDescription}</p>}
    </div>
  );
}

export default ProfileInfo;