import { useState, useEffect } from 'react';
import { subscriptionApi } from '../api/subscriptionApi';
import type { Subscription } from '../types/subscription';

export function useSubscription() {
  const [subscription, setSubscription] = useState<Subscription | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    subscriptionApi.getStatus()
      .then((res) => setSubscription(res.data))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  return { subscription, loading, setSubscription };
}
