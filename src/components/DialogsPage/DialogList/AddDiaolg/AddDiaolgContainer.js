import { addDialogActionCreator } from '../../../../store/dialogsReducer';
import AddDiaolg from './AddDiaolg';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  newDialog: state.dialogsPage.newDialog
});
const mapDispatchToProps = (dispatch) => ({
  addDialogHandler: (text) => dispatch(addDialogActionCreator(text)),
});

const AddDiaolgContainer = connect(mapStateToProps, mapDispatchToProps)(AddDiaolg);

export default AddDiaolgContainer;