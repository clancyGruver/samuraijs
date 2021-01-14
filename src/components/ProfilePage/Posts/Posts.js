import PostsFormContainer from './PostsForm/PostsFormContainer';
import PostItem from './PostItem/PostItem';

const Posts = (props) => {
  return (
    <div className="posts">
      <h3 className="description">My posts</h3>
      <PostsFormContainer
        newPostText={props.newPostText}
        dispatch={props.dispatch}
      />
      {props.posts.map(post => (
        <PostItem
          text={post.text}
          likesCount={post.likeCount}
          key={post.id}
        />
      ))}
    </div>
  );
}

export default Posts;