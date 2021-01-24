import DialogsPage from './DialogsPage';
import { connect } from 'react-redux';
import withAuthRedirect from '../../HOC/withAuthRedirect';

const mapStateToProps = (state) => ({
  users: state.dialogsPage.users,
  dialogs: state.dialogsPage.dialogs,
});

const mapStateToPropsRedirect = (state) => ({ isAuth: state.auth.isAuth, });

let AuthRedirect = withAuthRedirect(DialogsPage);
AuthRedirect = connect(mapStateToPropsRedirect)(AuthRedirect);

const DialogsPageContainer = connect(mapStateToProps)(AuthRedirect);

export default DialogsPageContainer;