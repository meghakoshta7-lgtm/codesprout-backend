import api from '@/services/api';

export const adminApi = {
  getStats: () => api.get('/admin/stats'),
  getQuestions: () => api.get('/admin/questions'),
  getQuestion: (slug: string) => api.get(`/admin/questions/${slug}`),
  getUsers: () => api.get('/admin/users'),
  addQuestion: (data: any) => api.post('/admin/questions', data),
  updateQuestion: (id: string, data: any) => api.put(`/admin/questions/${id}`, data),
  deleteQuestion: (id: string) => api.delete(`/admin/questions/${id}`),
  addCheatSheet: (data: any) => api.post('/admin/cheatsheets', data),
  updateCheatSheet: (id: string, data: any) => api.put(`/admin/cheatsheets/${id}`, data),
  addTopic: (data: any) => api.post('/admin/topics', data),
  getTestCases: (slug: string) => api.get(`/admin/questions/${slug}/testcases`),
  addTestCase: (slug: string, data: any) => api.post(`/admin/questions/${slug}/testcases`, data),
  updateTestCase: (id: string, data: any) => api.put(`/admin/testcases/${id}`, data),
  deleteTestCase: (id: string) => api.delete(`/admin/testcases/${id}`),
  emailStatus: () => api.get<{ enabled: boolean }>('/email/status'),
  testEmail: (type: string, to?: string) => api.post('/email/test', { type, to }),
  checkExpiring: () => api.post('/email/check-expiring', {}),
  streakNudge: (userId: string, days: number) => api.post(`/email/streak-nudge/${userId}`, { days }),
};
