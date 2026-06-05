import { useState, useEffect } from 'react';
import { topicsApi } from '../api/topicsApi';
import type { Topic, TopicDetail } from '../types/topic';

export function useTopics() {
  const [topics, setTopics] = useState<Topic[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    topicsApi.getAll()
      .then((res) => setTopics(res.data))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  return { topics, loading };
}

export function useTopic(slug: string) {
  const [topic, setTopic] = useState<TopicDetail | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;
    topicsApi.getBySlug(slug)
      .then((res) => setTopic(res.data))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [slug]);

  return { topic, loading };
}
