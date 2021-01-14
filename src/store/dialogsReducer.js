import dialogsPage from './dialogs';

const ADD_DIALOG = 'ADD-DIALOG';
const EDIT_NEW_DIALOG = 'EDIT-NEW-DIALOG';

const dialogsReducer = (state = dialogsPage, action) => {
  switch (action.type) {
    case ADD_DIALOG:
      const obj = {
        id: 1,
        name: 'me',
        text: state.newDialog,
      }
      state.dialogs.push(obj);
      state.newDialog = '';
      break;

      case EDIT_NEW_DIALOG:
        state.newDialog = action.text;
      break;
  
    default:
      break;
  };
  return state;
};

export const addDialogActionCreator = () => ({ type: ADD_DIALOG });
export const editNewDialogActionCreator = (text) => ({
  type: EDIT_NEW_DIALOG,
  text
});

export default dialogsReducer;
