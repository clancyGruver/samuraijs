import Style from './Friends.module.css';

const Friend = (props) => (
  <div className={Style.item}>
    <div className={Style.ava} style={{backgroundColor: props.color}}></div>
    <span className={Style.name}>{props.name}</span>
</div>
);

const Friends = (props) => {
  return (
    <div className={Style.wrapper}>
      <h4 className={Style.description}>friends</h4>
      <div className={Style.friendsContainer}>
        {props.friends.map((friend, idx) => (
          <Friend name={friend.name} color={friend.color} key={idx} />
        ))}
      </div>
    </div>
  );
}

export default Friends;