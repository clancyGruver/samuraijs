import Style from './SideBar.module.css';
import Menu from './Menu/Menu';
import Friends from './Friends/Friends';

const SideBar = (props) => {
  return (
    <div className={Style.sideMenu}>
      <Menu menuItems={props.state.menuItems} />
      <Friends friends={props.state.friends} />
    </div>
  );
}

export default SideBar;