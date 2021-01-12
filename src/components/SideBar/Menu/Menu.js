import Style from './Menu.module.css';
import { NavLink } from 'react-router-dom';

const Link = (props) => (
  <div className={Style.item}>
    <NavLink
      className={Style.link}
      to={props.to}
      activeClassName={Style.active}
    >{props.name}</NavLink>
</div>
);

const Menu = (props) => {
  return (
    <nav className={Style.menu}>
      {props.menuItems.map(item => <Link to={item.to} name={item.name} key={item.name} />)}
    </nav>
  );
}

export default Menu;