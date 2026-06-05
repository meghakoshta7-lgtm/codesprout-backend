import api from '@/services/api';
import type { DashboardData } from '../types/dashboard';

export const dashboardApi = {
  get: () => api.get<DashboardData>('/dashboard'),
};
