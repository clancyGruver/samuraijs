import { authAPI } from '../API/api';

const SET_CURRENT_USER = 'SET-CURRENT-USER';

const initialState = {
  id: null,
  login: '',
  email: '',
  isAuth: false,
  isFetching: true,
}

const authReducer = (state = initialState, action) => {
  let stateCopy = {...state};

  switch (action.type) {
    case SET_CURRENT_USER:
      stateCopy = {
        ...state,
        ...action.userData,
        isAuth: true,
      };
      break;
    default: break;
  }

  return stateCopy;
}

//action creators

const setUser = (userData) => ({
  type: SET_CURRENT_USER,
  userData,
});

//thunks

export const isAuthenticated = () => (dispatch) =>
    authAPI.isAuthenticated()
      .then( (data) => {
        if (data.resultCode === 0) {
          dispatch(setUser(data.data));
        }
      });

export default authReducer;