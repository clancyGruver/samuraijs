import dialogsPage from './dialogs';

const ADD_DIALOG = 'ADD-DIALOG';
const EDIT_NEW_DIALOG = 'EDIT-NEW-DIALOG';

const dialogsReducer = (state = dialogsPage, action) => {
  const stateCopy = {...state};
  switch (action.type) {
    case ADD_DIALOG:
      const newDialog = {
        id: 1,
        name: 'me',
        text: stateCopy.newDialog,
      }
      stateCopy.dialogs = [...state.dialogs];
      stateCopy.dialogs.push(newDialog);
      stateCopy.newDialog = '';
      break;

      case EDIT_NEW_DIALOG:
        stateCopy.newDialog = action.text;
      break;
  
    default:
      break;
  };
  return stateCopy;
};

export const addDialogActionCreator = () => ({ type: ADD_DIALOG });
export const editNewDialogActionCreator = (text) => ({
  type: EDIT_NEW_DIALOG,
  text
});

export default dialogsReducer;
