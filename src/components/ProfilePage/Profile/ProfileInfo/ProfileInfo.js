import Style from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
  return (
    <div className={Style.info}>
      <p className="name"><strong>{props.profile.fullName}</strong></p>
      <p className="aboutMe"><strong>{props.profile.aboutMe}</strong></p>
      <div className={Style.contacts}>
        {props.profile.contacts.facebook && <a rel="noreferrer" target="_blank" href={props.profile.contacts.facebook}><i class="fab fa-facebook"></i></a> }
        {props.profile.contacts.website && <a rel="noreferrer" target="_blank" href={props.profile.contacts.website}><i class="fas fa-globe"></i></a> }
        {props.profile.contacts.vk && <a rel="noreferrer" target="_blank" href={props.profile.contacts.vk}><i class="fab fa-vk"></i></a> }
        {props.profile.contacts.twitter && <a rel="noreferrer" target="_blank" href={props.profile.contacts.twitter}><i class="fab fa-twitter"></i></a> }
        {props.profile.contacts.instagram && <a rel="noreferrer" target="_blank" href={props.profile.contacts.instagram}><i class="fab fa-instagram"></i></a> }
        {props.profile.contacts.youtube && <a rel="noreferrer" target="_blank" href={props.profile.contacts.youtube}><i class="fab fa-youtube"></i></a> }
        {props.profile.contacts.github && <a rel="noreferrer" target="_blank" href={props.profile.contacts.github}><i class="fab fa-github"></i></a> }
        {props.profile.contacts.mainLink && <a rel="noreferrer" target="_blank" href={props.profile.contacts.mainLink}><i class="fas fa-link"></i></a> }
      </div>
      {props.profile.lookingForAJob && <p>{props.profile.lookingForAJobDescription}</p>}
    </div>
  );
}

export default ProfileInfo;