import {editPostActionCreator, addPostActionCreator } from '../../../../store/profileReducer';
import PostForm from './PostsForm';

const PostsFormContainer = (props) => {
  const postEditHandler = (text) => props.dispatch(editPostActionCreator(text));
  const addPostHandler = () => props.dispatch(addPostActionCreator());

  return (
    <PostForm
      addPostHandler={addPostHandler}
      postEditHandler={postEditHandler}
      newPostText={props.newPostText}
    />
  );
}

export default PostsFormContainer;