import Style from './DialogName.module.css';
import { NavLink } from 'react-router-dom';

const DialogName = (props) => {
  return (
    <div className={Style.wrapper}>
      <NavLink
        className={Style.link}
        activeClassName={Style.active}
        to={`/dialogs/${props.user.id}`}
      >
        {props.user.name}
      </NavLink>
    </div>
  );
}

export default DialogName;