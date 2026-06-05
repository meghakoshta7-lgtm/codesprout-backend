export interface SubscriptionData {
  plan?: string;
  status?: string;
  start_date?: string;
  end_date?: string;
}

const PLAN_KEY = 'subscription';
const DATA_KEY = 'subscription_data';

const getUserId = (): string | null => {
  try {
    const raw = localStorage.getItem('user');
    if (!raw) return null;
    const u = JSON.parse(raw);
    return u?.id || u?._id || null;
  } catch {
    return null;
  }
};

const keysFor = (userId: string) => ({
  plan: `${PLAN_KEY}_${userId}`,
  data: `${DATA_KEY}_${userId}`,
});

export const subscriptionStorage = {
  isPremium(userId?: string | null): boolean {
    const id = userId ?? getUserId();
    if (!id) return false;
    return localStorage.getItem(keysFor(id).plan) === 'premium';
  },

  get(userId?: string | null): SubscriptionData | null {
    const id = userId ?? getUserId();
    if (!id) return null;
    try {
      const raw = localStorage.getItem(keysFor(id).data);
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  },

  set(plan: string, data: SubscriptionData, userId?: string | null) {
    const id = userId ?? getUserId();
    if (!id) return;
    const k = keysFor(id);
    localStorage.setItem(k.plan, plan);
    localStorage.setItem(k.data, JSON.stringify(data));
  },

  clear(userId?: string | null) {
    const id = userId ?? getUserId();
    if (!id) return;
    const k = keysFor(id);
    localStorage.removeItem(k.plan);
    localStorage.removeItem(k.data);
  },

  clearAll() {
    for (let i = localStorage.length - 1; i >= 0; i--) {
      const key = localStorage.key(i);
      if (key && (key.startsWith(`${PLAN_KEY}_`) || key.startsWith(`${DATA_KEY}_`))) {
        localStorage.removeItem(key);
      }
    }
  },
};
