import axios from 'axios';

const api = axios.create({
  baseURL: 'https://aircnc-api.ialexanderbrito.dev',
});

export default api;
