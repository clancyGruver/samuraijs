import Style from './Avatar.module.css';
import avatar from '../../../../assets/images/avatar.png';

const Avatar = (props) => {
  return (
    <div className={Style.wrapper}>
      <img src={props.avatar || avatar} alt="avatar" className={Style.image} />
    </div>
  );
}

export default Avatar;