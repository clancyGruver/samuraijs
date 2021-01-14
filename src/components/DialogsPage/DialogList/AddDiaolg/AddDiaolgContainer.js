import { addDialogActionCreator, editNewDialogActionCreator } from '../../../../store/dialogsReducer';
import AddDiaolg from './AddDiaolg';

const AddDiaolgContainer = (props) => {
  const changeNewDialogHandler = (text) => props.dispatch(editNewDialogActionCreator(text));
  const addDialogHandler = () => props.dispatch(addDialogActionCreator());

  return (
    <AddDiaolg
      addDialogHandler={addDialogHandler}
      changeNewDialogHandler={changeNewDialogHandler}
      newDialog={props.newDialog}
    />
  )
}

export default AddDiaolgContainer;