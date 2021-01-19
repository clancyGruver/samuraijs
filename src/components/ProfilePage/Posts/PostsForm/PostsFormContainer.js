import {editPostActionCreator, addPostActionCreator } from '../../../../store/profileReducer';
import PostForm from './PostsForm';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  newPostText: state.profilePage.newPostText,
});
const mapDispatchToProps = (dispatch) => ({
  postEditHandler: (text) => dispatch(editPostActionCreator(text)),
  addPostHandler: () => dispatch(addPostActionCreator()),
})

const PostsFormContainer = connect(mapStateToProps, mapDispatchToProps)(PostForm);

export default PostsFormContainer;