import axios from 'axios';
import axiosRetry from 'axios-retry';
import { subscriptionStorage } from '@/shared/utils/subscriptionStorage';
import { userStorage } from '@/shared/utils/userStorage';
import { getCached, setCache, clearApiCache } from '@/shared/utils/apiCache';

const api = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL || ''}/api`,
  headers: { 'Content-Type': 'application/json' },
});

axiosRetry(api, {
  retries: 4,
  retryDelay: (retryCount) => retryCount * 2000,
  retryCondition: (error) => {
    return axiosRetry.isNetworkError(error) || [429, 502, 503].includes(error.response?.status ?? 0);
  },
  onRetry: (retryCount, error) => {
    console.warn(`[api] Retry #${retryCount} ${error.config?.url} (${error.response?.status || 'net'})`);
  },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  if (config.data instanceof FormData) delete config.headers['Content-Type'];

  if (config.method?.toUpperCase() === 'GET' && config.url) {
    const cached = getCached<any>(config.url);
    if (cached) {
      config.adapter = () => Promise.resolve({ data: cached, status: 200, statusText: 'OK', headers: config.headers, config });
    }
  }

  return config;
});

api.interceptors.response.use(
  (res) => {
    const method = res.config.method?.toUpperCase();
    if (method === 'GET' && res.status === 200 && res.config.url) {
      setCache(res.config.url, res.data);
    }
    if (['POST', 'PUT', 'PATCH', 'DELETE'].includes(method || '')) {
      clearApiCache();
    }
    return res;
  },
  (err) => {
    if (err.config) {
      const method = err.config.method?.toUpperCase();
      if (['POST', 'PUT', 'PATCH', 'DELETE'].includes(method || '')) clearApiCache();
    }
    if (err.response?.status === 401) {
      localStorage.removeItem('token');
      userStorage.clear();
      subscriptionStorage.clear();
      window.location.href = '/login';
    }
    return Promise.reject(err);
  }
);

export default api;
