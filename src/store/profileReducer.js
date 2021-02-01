import initialState from './profile';
import { profileAPI } from '../API/api';

const ADD_POST = 'ADD-POST';
const EDIT_POST_TEXT = 'EDIT-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';


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
    case SET_USER_PROFILE:
      stateCopy.userProfile = {...action.userProfile};
      break;
    case SET_STATUS: 
      stateCopy.status = action.status;
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
const setUserProfileAction = (userProfile) => ({
  type: SET_USER_PROFILE,
  userProfile
})
const setProfileStatus = (status) => ({
  type: SET_STATUS,
  status,
})

//thunk 

export const setUserProfile = (userId) => (dispatch, getState) => {
  const { auth } = getState();
  const id = userId || auth.id || 14165;
  if (id) {
    profileAPI
      .getProfile(id)
      .then((data) => {
        dispatch(setUserProfileAction(data));
      });
  }
}

export const getStatus = (userId) => (dispatch, getState) => {
  const { auth } = getState();
  const id = userId || auth.id || 14165;
  profileAPI
    .getStatus(id)
    .then((data) => {
      dispatch(setProfileStatus(data));
    })
}

export const updateStatus = (newStatus) => (dispatch) => {
  profileAPI
    .updateStatus(newStatus)
    .then((data) => {
      if(data.resultCode === 0){
        dispatch(setProfileStatus(data));
      }
    })
}

export default profileReducer;