import api from '@/services/api';
import type { Question, QuestionDetail } from '../types/question';

export const questionsApi = {
  getAll: (params?: { topic?: string; difficulty?: string }) =>
    api.get<Question[]>('/questions', { params }),
  getBySlug: (slug: string) => api.get<QuestionDetail>(`/questions/${slug}`),
  getByDifficulty: (difficulty: string) =>
    api.get<Question[]>('/questions', { params: { difficulty } }),
};
