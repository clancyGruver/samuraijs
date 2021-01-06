import Style from './DialogsPage.module.css';
import DialogName from './DialogName/DialogName';
import DialogList from './DialogList/DialogList';

const users = [
  {
    id: 1,
    name: 'Andrew',
  },
  {
    id: 2,
    name: 'Dmitry',
  },
  {
    id: 3,
    name: 'Sasha',
  },
  {
    id: 4,
    name: 'Sveta',
  },
];

const dialogs = [
  {
    name: "Sasha",
    text: 'Suspendisse at elit vitae justo volutpat rutrum at vel odio. Pellentesque vel ornare diam. Vivamus.',
  },
  {
    name: "Dimych",
    text: 'Suspendisse at elit vitae justo volutpat rutrum at vel odio. Pellentesque vel ornare diam. Vivamus.',
  },
  {
    name: "Masha",
    text: 'Suspendisse at elit vitae justo volutpat rutrum at vel odio. Pellentesque vel ornare diam. Vivamus.',
  },
  {
    name: "Misha",
    text: 'Suspendisse at elit vitae justo volutpat rutrum at vel odio. Pellentesque vel ornare diam. Vivamus.',
  },
  {
    name: "MOrgenshtern",
    text: 'Suspendisse at elit vitae justo volutpat rutrum at vel odio. Pellentesque vel ornare diam. Vivamus.',
  },
]

const DialogsPage = () => {
  return (
    <div className={Style.wrapper}>
      <h2 className={Style.header}>Dialogs</h2>
      <div className={Style.nameContainer}>
        {users.map((user, idx) => (<DialogName key={idx} user={user} />))}
      </div>
      <div className={Style.dialogContainer}>
        <ul className={Style.dialogList}>
          {dialogs.map((dialog, idx) => (<DialogList key={idx} dialogItem={dialog} />))}
        </ul>
      </div>
    </div>
  );
}

export default DialogsPage;