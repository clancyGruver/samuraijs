const PostItem = (props) => {
  return (
    <div className="post-item">
      <div className="avatar"></div>
      <div>{ props.text }</div>
      <div>{ props.likesCount } likes</div>
    </div>
  );
}

export default PostItem;