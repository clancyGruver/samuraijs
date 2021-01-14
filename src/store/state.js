import profilePage from './profile';
import dialogsPage from './dialogs';
import sideBar from './sideBar';

import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';
import sidebarReducer from './sidebarReducer';

const store = {
  _state: {
    profilePage,
    dialogsPage,
    sideBar,
  },
  _render: () => {},
  getState() {
    return this._state;
  },
  subscribe(fn) {
    this._render = fn;
  },
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sideBar = sidebarReducer(this._state.sideBar, action);

    this._render(this._state);
  },
};

window.store = store;
export default store;