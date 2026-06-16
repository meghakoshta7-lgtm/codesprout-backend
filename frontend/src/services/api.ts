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
  retries: 3,
  retryDelay: axiosRetry.exponentialDelay,
  retryCondition: (error) => {
    // Avoid retry storms: do NOT retry when server responds 429 (rate limited).
    // Only retry on network errors or idempotent requests that are not 429.
    return axiosRetry.isNetworkOrIdempotentRequestError(error) && error.response?.status !== 429;
  },
  onRetry: (retryCount, error) => {
    console.warn(`Retry #${retryCount} for ${error.config?.url} (${error.response?.status || 'network error'})`);
  },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  if (config.data instanceof FormData) {
    delete config.headers['Content-Type'];
  }

  // Serve GET from cache if fresh
  if (config.method === 'get' || config.method === 'GET') {
    const cached = getCached<any>(config.url || '');
    if (cached) {
      config.adapter = () => Promise.resolve({ data: cached, status: 200, statusText: 'OK', headers: config.headers, config });
    }
  }

  return config;
});

api.interceptors.response.use(
  (res) => {
    const url = res.config.url || '';
    const method = res.config.method;
    // Cache successful GET responses
    if (method === 'get' && res.status === 200 && url) {
      setCache(url, res.data);
    }
    // Invalidate cache on mutating requests
    if (['post', 'put', 'patch', 'delete'].includes(method || '')) {
      clearApiCache();
    }
    return res;
  },
  (err) => {
    // Invalidate cache on mutating requests
    if (err.config) {
      const method = err.config.method;
      const url = err.config.url || '';
      if (['post', 'put', 'patch', 'delete'].includes(method)) {
        clearApiCache();
      }
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
