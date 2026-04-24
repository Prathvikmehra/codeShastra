import axios from 'axios';
import { getToken, clearAuthData } from '@/utils/storage';
import { ROUTES, API_BASE_URL } from '@/utils/constants';

/**
 * Core Axios Instance
 * Pre-configured with base URL, timeouts, and interceptors for auth & error handling.
 */
const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request Interceptor: Attach token automatically
api.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response Interceptor: Handle global errors (e.g., 401 Unauthorized)
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // If the server returns 401, the token is invalid or expired
    if (error.response && error.response.status === 401) {
      clearAuthData();
      // Force redirect to login if not already there
      if (window.location.pathname !== ROUTES.LOGIN) {
        window.location.href = ROUTES.LOGIN;
      }
    }
    return Promise.reject(error);
  }
);

export default api;
