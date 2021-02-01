import * as axios from 'axios';

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    "API-KEY": '376cce33-26cd-4d56-905b-986a40a8a739',
  },
});

export const authAPI = {
  isAuthenticated: () => instance.get('auth/me').then((res) => res.data),
  login: (values) => instance.post('auth/login', values).then((res) => res.data),
  logout: () => instance.delete('auth/login').then((res) => res.data),
};

export const userAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    const url = `users?page=${currentPage}&count=${pageSize}`;
    return instance.get(url).then( (res) => res.data );
  },
  followUser(userId) {
    return instance
    .post(`follow/${userId}`)
    .then( (res) => res.data );
  },
  unfollowUser(userId) {
    return instance
      .delete(`follow/${userId}`)
      .then(res => res.data)
  },
  getProfile(userId) {
    console.warn('Use profileAPI');
    return profileAPI.getProfile(userId);
  }
};

export const profileAPI = {
  getProfile(userId) {
    return instance
      .get(`profile/${userId}`)
      .then( res => res.data);
  },
  getStatus(userId) {
    return instance
      .get(`profile/status/${userId}`)
      .then( res => res.data);
  },
  updateStatus(status) {
    return instance.put('/profile/status', { status });
  }
};
