import Style from './DialogsPage.module.css';
import DialogName from './DialogName/DialogName';
import DialogList from './DialogList/DialogList';


const DialogsPage = (props) => {
  const userElements = props.state.users.map((user, idx) => (<DialogName key={idx} user={user} />));
  const dialogElements = props.state.dialogs.map((dialog, idx) => (<DialogList key={idx} dialogItem={dialog} />));

  return (
    <div className={Style.wrapper}>
      <h2 className={Style.header}>Dialogs</h2>
      <div className={Style.nameContainer}>
        { userElements }
      </div>
      <div className={Style.dialogContainer}>
        <ul className={Style.dialogList}>
          {dialogElements}
        </ul>
      </div>
    </div>
  );
}

export default DialogsPage;