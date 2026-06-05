import api from '@/services/api';

export const subscriptionApi = {
  getStatus: () => api.get('/subscription'),
  create: (plan: string) => api.post('/subscription', { plan }),
  cancel: () => api.post('/subscription/cancel'),
};
