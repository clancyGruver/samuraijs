import * as axios from 'axios';

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    "API-KEY": '376cce33-26cd-4d56-905b-986a40a8a739',
  },
});

export const authAPI = {
  isAuthentcated: () => instance.get('auth/me').then((res) => res.data),
};

export const userAPI = {
  getUsers: (currentPage = 1, pageSize = 10) => {
    const url = `users?page=${currentPage}&count=${pageSize}`;
    return instance.get(url).then( (res) => res.data );
  },
  followUser: (userId) => {
    return instance
    .post(`follow/${userId}`)
    .then( (res) => res.data );
  },
  unfollowUser: (userId) => {
    return instance
      .delete(`follow/${userId}`)
      .then(res => res.data)
  },
};
