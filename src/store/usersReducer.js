const CHANGE_FOLLOW = 'CHANGE-FOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_USERS_COUNT = 'SET-USERS-COUNT';

const initState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 18,
  currentPage: 1,
};

const usersReducer = (state = initState, action) => {
  const stateCopy = {...state};
  switch (action.type) {
    case CHANGE_FOLLOW:
      stateCopy.users = state.users.map( user => (
        user.id === action.userId
          ? { ...user, followed: !user.followed }
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
    default: break;
  }
  return stateCopy;
}

export const changeFollowAC = (id) => ({
  type: CHANGE_FOLLOW,
  userId: id,
});
export const setUsersAC = (users) => ({
  type: SET_USERS,
  users: users,
});
export const setCurrentPageAC = (pageNumber) => ({
  type: SET_CURRENT_PAGE,
  currentPage: pageNumber,
})
export const setUsersCountAC = (totalUsersCount) => ({
  type: SET_USERS_COUNT,
  totalUsersCount,
});

export default usersReducer;