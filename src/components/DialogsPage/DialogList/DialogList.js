import Style from './DialogList.module.css';
import avatarImg from '../../../assets/images/avatar-dialog.svg';

const DialogList = (props) => {
  return (
    <li className={Style.wrapper}>
      <div className={Style.avatarContainer}>
        <img src={avatarImg} alt="avatar" className={Style.avatarImg} />
        <span className={Style.avatarName}>{props.dialogItem.name}</span>
      </div>
      <div className={Style.dialog}>
        {props.dialogItem.text}
      </div>
    </li>
  );
}

export default DialogList;