import { authAPI } from '../API/api';

const SET_CURRENT_USER = 'SET-CURRENT-USER';
const REMOVE_USER = 'REMOVE-USER';

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
    case REMOVE_USER:
      stateCopy = {
        ...state,
        id: null,
        login: '',
        email: '',
        isAuth: false,
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

const removeUser = (userData) => ({
  type: REMOVE_USER,
});

//thunks

export const isAuthenticated = () => (dispatch) =>
    authAPI.isAuthenticated()
      .then( (data) => {
        if (data.resultCode === 0) {
          dispatch(setUser(data.data));
        }
      });
export const login = (values) => (dispatch) =>
    authAPI.login(values)
      .then( (data) => {
        if (data.resultCode === 0) {
          dispatch(isAuthenticated());
        }
      });
export const logout = () => (dispatch) => 
    authAPI.logout()
      .then( (data) => {
        if (data.resultCode === 0) {
          dispatch(removeUser());
        }
      });

export default authReducer;