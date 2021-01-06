import Style from './DialogsPage.module.css';
import DialogName from './DialogName/DialogName';
import DialogList from './DialogList/DialogList';


const DialogsPage = (props) => {
  return (
    <div className={Style.wrapper}>
      <h2 className={Style.header}>Dialogs</h2>
      <div className={Style.nameContainer}>
        {props.users.map((user, idx) => (<DialogName key={idx} user={user} />))}
      </div>
      <div className={Style.dialogContainer}>
        <ul className={Style.dialogList}>
          {props.dialogs.map((dialog, idx) => (<DialogList key={idx} dialogItem={dialog} />))}
        </ul>
      </div>
    </div>
  );
}

export default DialogsPage;