import api from '@/services/api';

export const bookmarksApi = {
  getAll: () => api.get('/bookmarks'),
  toggle: (questionId: string) => api.post('/bookmarks/toggle', { question_id: questionId }),
};
