import { userAPI } from '../API/api';

const CHANGE_FOLLOW = 'CHANGE-FOLLOW';
const SET_IS_FETCHING = 'SET-IS-FETCHING';
const SET_IS_FOLLOWING_PROCESS = 'SET-IS-FOLLOWING-PROCESS';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_USERS_COUNT = 'SET-USERS-COUNT';

const initState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 18,
  currentPage: 1,
  isFetching: false,
  isFollowingProgress: [],
};

const usersReducer = (state = initState, action) => {
  const stateCopy = {...state};
  switch (action.type) {
    case CHANGE_FOLLOW:
      stateCopy.users = state.users.map( user => (
        user.id === action.userId
          ? { ...user, followed: action.isFollow }
          : user
      ));
      break;
    case SET_USERS:
      stateCopy.users = [...action.users];
      break;
    case SET_CURRENT_PAGE:
      stateCopy.currentPage = action.currentPage;
      break;
    case SET_USERS_COUNT:
      stateCopy.totalUsersCount = action.totalUsersCount;
      break;
    case SET_IS_FETCHING:
      stateCopy.isFetching = action.isFetching;
      break;
    case SET_IS_FOLLOWING_PROCESS:
      action.isFollowing
        ? stateCopy.isFollowingProgress = [...state.isFollowingProgress, action.userId]
        : stateCopy.isFollowingProgress = state.isFollowingProgress.filter( id => id !== action.userId);
      break;
    default: break;
  }
  return stateCopy;
}

//action creators

export const changeFollow = (userId, isFollow) => ({
  type: CHANGE_FOLLOW,
  userId,
  isFollow
});
export const setUsers = (users) => ({
  type: SET_USERS,
  users: users,
});
export const setCurrentPage = (pageNumber) => ({
  type: SET_CURRENT_PAGE,
  currentPage: pageNumber,
})
export const setUsersCount = (totalUsersCount) => ({
  type: SET_USERS_COUNT,
  totalUsersCount,
});
export const setIsFetching = (isFetching) => ({
  type: SET_IS_FETCHING,
  isFetching,
});
export const setIsFollowingProgress = (isFollowing, userId) => ({
  type: SET_IS_FOLLOWING_PROCESS,
  isFollowing,
  userId,
});

//thunks

export const getUsers = (currentPage, pageSize) => (dispatch) => {
  dispatch(setIsFetching(true));
  userAPI.getUsers(currentPage, pageSize)
    .then((data) => {
      dispatch(setUsers(data.items));
      dispatch(setUsersCount(data.totalCount));
      dispatch(setIsFetching(false));
    });
};

export const changePageHandler = (page, pageSize) => (dispatch) => {
  dispatch(setIsFetching(true));
  dispatch(setCurrentPage(page));
  userAPI.getUsers(page, pageSize)
    .then((data) => {
      dispatch(setUsers(data.items));
      dispatch(setIsFetching(false));
    });
}

export const toggleFollow = (user) => (dispatch) => {
  dispatch(setIsFollowingProgress(true, user.id));
    if (user.followed) {
      userAPI.unfollowUser(user.id)
        .then( (data) => {
          if (data.resultCode === 0) {
            dispatch(changeFollow(user.id, false));
            dispatch(setIsFollowingProgress(false, user.id));
          }
        })
    } else {
      userAPI.followUser(user.id)
        .then( (data) => {
          if (data.resultCode === 0) {
            dispatch(changeFollow(user.id, true));
            dispatch(setIsFollowingProgress(false, user.id));
          }
        })
    }
}

export default usersReducer;