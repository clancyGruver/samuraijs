import initialState from './profile';

const ADD_POST = 'ADD-POST';
const EDIT_POST_TEXT = 'EDIT-POST-TEXT';


const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let maxId = 0;
      const posts = state.posts;
      maxId = Math.max(...posts.map( post => Number.parseInt(post.id, 10) ));
      const newPost = {
        id: maxId + 1,
        text: state.newPostText,
        likeCount: 0,
      }
      posts.push(newPost);
      state.newPostText = '';
      break;
    case EDIT_POST_TEXT:
      state.newPostText = action.text;
      break;
    default:
      break;
  };
  return state;
};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const editPostActionCreator = (text) => ({
  type: EDIT_POST_TEXT,
  text
});

export default profileReducer;