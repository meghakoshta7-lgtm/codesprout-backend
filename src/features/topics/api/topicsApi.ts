import api from '@/services/api';
import type { Topic, TopicDetail } from '../types/topic';

export const topicsApi = {
  getAll: () => api.get<Topic[]>('/topics'),
  getBySlug: (slug: string) => api.get<TopicDetail>(`/topics/${slug}`),
};
