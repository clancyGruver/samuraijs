import Style from './Avatar.module.css';
import avatar from '../../../../assets/images/avatar.png';

const Avatar = () => {
  return (
    <div className={Style.wrapper}>
      <img src={avatar} alt="avatar" className={Style.image} />
    </div>
  );
}

export default Avatar;