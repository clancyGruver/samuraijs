import DialogsPage from './DialogsPage';
import { connect } from 'react-redux';


const mapStateToProps = (state) => ({
  users: state.dialogsPage.users,
  dialogs: state.dialogsPage.dialogs,
});


const DialogsPageContainer = connect(mapStateToProps)(DialogsPage);

export default DialogsPageContainer;