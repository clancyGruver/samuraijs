import initialState from './profile';

const ADD_POST = 'ADD-POST';
const EDIT_POST_TEXT = 'EDIT-POST-TEXT';


const profileReducer = (state = initialState, action) => {
  const stateCopy = {...state};

  switch (action.type) {
    case ADD_POST:
      let maxId = 0;
      const posts = stateCopy.posts;
      maxId = Math.max(...posts.map( post => Number.parseInt(post.id, 10) ));
      const newPost = {
        id: maxId + 1,
        text: state.newPostText,
        likeCount: 0,
      }
      stateCopy.posts = [...state.posts];
      stateCopy.posts.push(newPost);
      stateCopy.newPostText = '';
      break;
    case EDIT_POST_TEXT:
      stateCopy.newPostText = action.text;
      break;
    default:
      break;
  };
  return stateCopy;
};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const editPostActionCreator = (text) => ({
  type: EDIT_POST_TEXT,
  text
});

export default profileReducer;