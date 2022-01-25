import axios from 'axios';

const api = axios.create({
  baseURL: 'https://aircnc-oficial.herokuapp.com',
});

export default api;
