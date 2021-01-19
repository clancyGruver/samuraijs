import Style from './DialogsPage.module.css';
import DialogName from './DialogName/DialogName';
import DialogList from './DialogList/DialogList';
import AddDiaolgContainer from './DialogList/AddDiaolg/AddDiaolgContainer';


const DialogsPage = (props) => {
  const userElements = props.users.map((user) => (<DialogName key={user.id} user={user} />));
  const dialogElements = props.dialogs.map((dialog, idx) => (<DialogList key={idx} dialogItem={dialog} />));

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
        <AddDiaolgContainer />
      </div>
    </div>
  );
}

export default DialogsPage;