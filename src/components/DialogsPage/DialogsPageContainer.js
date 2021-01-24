import DialogsPage from './DialogsPage';
import { connect } from 'react-redux';
import withAuthRedirect from '../../HOC/withAuthRedirect';

const mapStateToProps = (state) => ({
  users: state.dialogsPage.users,
  dialogs: state.dialogsPage.dialogs,
});

let AuthRedirect = withAuthRedirect(DialogsPage);

const DialogsPageContainer = connect(mapStateToProps)(AuthRedirect);

export default DialogsPageContainer;