import { useState, useEffect } from 'react';
import { adminApi } from '../api/adminApi';
import type { AdminStats, AdminQuestion, AdminUser } from '../types/admin';

export function useAdminStats() {
  const [stats, setStats] = useState<AdminStats | null>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    adminApi.getStats().then((r) => setStats(r.data)).catch(console.error).finally(() => setLoading(false));
  }, []);
  return { stats, loading };
}

export function useAdminQuestions() {
  const [questions, setQuestions] = useState<AdminQuestion[]>([]);
  const [loading, setLoading] = useState(true);
  const fetch = () => adminApi.getQuestions().then((r) => setQuestions(r.data)).catch(console.error).finally(() => setLoading(false));
  useEffect(() => { fetch(); }, []);
  return { questions, loading, refetch: fetch };
}

export function useAdminUsers() {
  const [users, setUsers] = useState<AdminUser[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    adminApi.getUsers().then((r) => setUsers(r.data)).catch(console.error).finally(() => setLoading(false));
  }, []);
  return { users, loading };
}
