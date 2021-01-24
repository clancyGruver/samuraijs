import DialogsPage from './DialogsPage';
import { connect } from 'react-redux';
import withAuthRedirect from '../../HOC/withAuthRedirect';
import { compose } from 'redux';

const mapStateToProps = (state) => ({
  users: state.dialogsPage.users,
  dialogs: state.dialogsPage.dialogs,
});

export default compose(
  connect(mapStateToProps),
  withAuthRedirect
)(DialogsPage);