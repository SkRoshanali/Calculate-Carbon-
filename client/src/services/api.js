import axios from 'axios';

const API_URL = 'https://calculate-carbon.onrender.com/api';

const api = axios.create({
  baseURL: API_URL,
});
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const register = (data) => api.post('/auth/register', data);
export const login = (data) => api.post('/auth/login', data);
export const calculateFootprint = (data) => api.post('/calculator/calculate', data);
export const getHistory = () => api.get('/calculator/history');

export default api;
