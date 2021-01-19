import Style from './SideBar.module.css';
import Menu from './Menu/Menu';
import Friends from './Friends/Friends';

const SideBar = (props) => {
  return (
    <div className={Style.sideMenu}>
      <Menu menuItems={props.menuItems} />
      <Friends friends={props.friends} />
    </div>
  );
}

export default SideBar;