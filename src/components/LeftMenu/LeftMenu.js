import Style from './LeftMenu.module.css';
import { NavLink } from 'react-router-dom';

const LeftMenu = () => {
  return (
    <nav className={Style.menu}>
      <div className={Style.item}>
        <NavLink
          className={Style.link}
          to="/profile"
          activeClassName={Style.active}
        >Profile</NavLink>
      </div>
      <div className={Style.item}>
        <NavLink
          className={Style.link}
          to="/dialogs"
          activeClassName={Style.active}
        >Messages</NavLink>
      </div>
      <div className={Style.item}>
        <NavLink
          className={Style.link}
          to="/news"
          activeClassName={Style.active}
        >News</NavLink>
      </div>
      <div className={Style.item}>
        <NavLink
          className={Style.link}
          to="/music"
          activeClassName={Style.active}
        >Music</NavLink>
      </div>
      <div className={Style.item}>
        <NavLink
          className={Style.link}
          to="/settings"
          activeClassName={Style.active}
        >Settings</NavLink>
      </div>
    </nav>
  );
}

export default LeftMenu;