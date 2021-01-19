import { addDialogActionCreator, editNewDialogActionCreator } from '../../../../store/dialogsReducer';
import AddDiaolg from './AddDiaolg';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  newDialog: state.dialogsPage.newDialog
});
const mapDispatchToProps = (dispatch) => ({
  addDialogHandler: () => dispatch(addDialogActionCreator()),
  changeNewDialogHandler: (text) => dispatch(editNewDialogActionCreator(text)),
});

const AddDiaolgContainer = connect(mapStateToProps, mapDispatchToProps)(AddDiaolg);

export default AddDiaolgContainer;