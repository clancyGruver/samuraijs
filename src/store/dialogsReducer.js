import dialogsPage from './dialogs';

const ADD_DIALOG = 'ADD-DIALOG';

const dialogsReducer = (state = dialogsPage, action) => {
  const stateCopy = {...state};
  switch (action.type) {
    case ADD_DIALOG:
      const newDialog = {
        id: 1,
        name: 'me',
        text: action.text,
      }
      stateCopy.dialogs = [...state.dialogs];
      stateCopy.dialogs.push(newDialog);
      stateCopy.newDialog = '';
      break;
  
    default:
      break;
  };
  return stateCopy;
};

export const addDialogActionCreator = (text) => ({
  type: ADD_DIALOG,
  text
});

export default dialogsReducer;
