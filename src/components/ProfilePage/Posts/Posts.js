import PostsForm from './PostsForm/PostsForm';
import PostItem from './PostItem/PostItem';

const Posts = () => {
  return (
    <div className="posts">
      <h3 className="description">My posts</h3>
      <PostsForm />
      <PostItem text="Hello" likesCount="10" />
      <PostItem text="Post 2" likesCount="15" />
      <PostItem text="Post 3. bye!" likesCount="20" />
    </div>
  );
}

export default Posts;