import { useState, useEffect } from 'react';
import { questionsApi } from '../api/questionsApi';
import type { Question, QuestionDetail } from '../types/question';

export function useQuestions(params?: { topic?: string; difficulty?: string }) {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    questionsApi.getAll(params)
      .then((res) => setQuestions(res.data))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [params?.topic, params?.difficulty]);

  return { questions, loading };
}

export function useQuestion(slug: string) {
  const [question, setQuestion] = useState<QuestionDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [requiresPremium, setRequiresPremium] = useState(false);
  const [lockedInfo, setLockedInfo] = useState<{ title: string; difficulty: string; topic_name: string } | null>(null);

  useEffect(() => {
    if (!slug) return;
    setRequiresPremium(false);
    setLockedInfo(null);
    questionsApi.getBySlug(slug)
      .then((res) => setQuestion(res.data))
      .catch((err) => {
        if (err.response?.status === 403 && err.response?.data?.requiresPremium) {
          setRequiresPremium(true);
          setLockedInfo(err.response.data.question || { title: slug, difficulty: 'Medium', topic_name: '' });
        }
      })
      .finally(() => setLoading(false));
  }, [slug]);

  return { question, loading, requiresPremium, lockedInfo };
}
