import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { authApi } from '../api/authApi';
import { userStorage } from '@/shared/utils/userStorage';
import { subscriptionStorage } from '@/shared/utils/subscriptionStorage';
import { subscriptionApi } from '@/features/subscription/api/subscriptionApi';
import toast from 'react-hot-toast';
import type { LoginPayload, RegisterPayload } from '../types/auth';

async function refreshUserAndSubscription() {
  try {
    const meRes = await authApi.me();
    const me = meRes.data;
    await userStorage.set({
      id: me.id,
      name: me.name,
      email: me.email,
      role: me.role,
      picture: me.picture,
      plan: me.plan,
      subscription_status: me.subscription_status,
      subscription_end: me.subscription_end,
    });
    if (me.is_premium && me.subscription_active) {
      await subscriptionStorage.set('premium', {
        plan: 'premium',
        status: 'active',
        start_date: me.subscription_start,
        end_date: me.subscription_end,
      });
    }
    return me;
  } catch {
    try {
      const subRes = await subscriptionApi.getStatus();
      const sub = subRes.data;
      await subscriptionStorage.set(sub.plan || 'free', {
        plan: sub.plan,
        status: sub.status,
        start_date: sub.start_date,
        end_date: sub.end_date,
      });
      return null;
    } catch { return null; }
  }
}

export function useLogin() {
  const [loading, setLoading] = useState(false);
  const navigating = useRef(false);
  const navigate = useNavigate();

  const login = async (payload: LoginPayload) => {
    if (loading || navigating.current) return;
    navigating.current = true;
    setLoading(true);
    try {
      const res = await authApi.login(payload);
      localStorage.setItem('token', res.data.token);
      subscriptionStorage.clearAll();
      await userStorage.set(res.data.user);
      await refreshUserAndSubscription();
      window.dispatchEvent(new Event('codesprout_user_change'));
      toast.success('Welcome back!');
      navigate('/');
    } catch (err: any) {
      toast.error(err.response?.data?.error || 'Login failed');
    } finally {
      setLoading(false);
      navigating.current = false;
    }
  };

  return { login, loading };
}

export function useRegister() {
  const [loading, setLoading] = useState(false);
  const navigating = useRef(false);
  const navigate = useNavigate();

  const register = async (payload: RegisterPayload) => {
    if (loading || navigating.current) return;
    navigating.current = true;
    setLoading(true);
    try {
      await authApi.register(payload);
      toast.success('Account created! Please sign in.');
      navigate('/login', {
        state: {
          prefilledEmail: payload.email,
          prefilledPassword: payload.password,
          fromSignup: true,
        },
      });
    } catch (err: any) {
      toast.error(err.response?.data?.error || 'Registration failed');
    } finally {
      setLoading(false);
      navigating.current = false;
    }
  };

  return { register, loading };
}
