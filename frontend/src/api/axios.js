import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3001',
});

instance.interceptors.request.use((config) => {
  // config.headers.authorization = window.localStorage.getItem('token');
  config.headers.Authorization = document.cookie.replace('login-token=', '');
  config.withCredentials = true;

  return config;
});

export default instance;
