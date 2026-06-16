import api from '@/services/api';

export const resumeApi = {
  upload: (file: File) => {
    const fd = new FormData();
    fd.append('resume', file);
    return api.post('/resume/upload', fd, { timeout: 60000 });
  },
  analyze: (resumeId?: string, text?: string) => api.post('/resume/analyze', { resume_id: resumeId, text }),
  list: () => api.get('/resume/list'),
  get: (id: string) => api.get(`/resume/${id}`),
  delete: (id: string) => api.delete(`/resume/${id}`),
  rewrite: (text: string) => api.post('/resume/rewrite', { text }),

  // Template CRUD
  getTemplates: () => api.get('/resume/templates'),
  getTemplate: (id: string) => api.get(`/resume/templates/${id}`),
  createTemplate: (data: { id?: string; name: string; description?: string; category?: string; is_ats_friendly?: boolean; columns?: 1 | 2; colors?: string[] }) =>
    api.post('/resume/templates', data),
  updateTemplate: (id: string, data: Record<string, any>) =>
    api.put(`/resume/templates/${id}`, data),
  deleteTemplate: (id: string) => api.delete(`/resume/templates/${id}`),
  duplicateTemplate: (id: string) => api.post(`/resume/templates/${id}/duplicate`),
};
