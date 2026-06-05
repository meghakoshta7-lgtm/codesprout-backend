import { useState, useEffect } from 'react';
import { dashboardApi } from '../api/dashboardApi';
import type { DashboardData } from '../types/dashboard';

export function useDashboard() {
  const [data, setData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dashboardApi.get()
      .then((res) => setData(res.data))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  return { data, loading };
}
