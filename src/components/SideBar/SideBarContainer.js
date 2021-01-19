import SideBar from './SideBar';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  menuItems: state.sideBar.menuItems,
  friends: state.sideBar.friends,
});

const mapDisopatchToPropos = (dispatch) => ({});

const SideBarContainer = connect(mapStateToProps, mapDisopatchToPropos)(SideBar);

export default SideBarContainer;