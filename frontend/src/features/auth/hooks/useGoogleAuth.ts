import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGoogleLogin } from '@react-oauth/google';
import { authApi } from '../api/authApi';
import { userStorage } from '@/shared/utils/userStorage';
import { subscriptionStorage } from '@/shared/utils/subscriptionStorage';
import { subscriptionApi } from '@/features/subscription/api/subscriptionApi';
import toast from 'react-hot-toast';

const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID || '';
const isConfigured = GOOGLE_CLIENT_ID && GOOGLE_CLIENT_ID !== 'YOUR_GOOGLE_CLIENT_ID.apps.googleusercontent.com';

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
    } catch { /* ignore */ }
    return null;
  }
}

export function useGoogleAuth() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleCredential = useCallback(async (credential: string) => {
    setLoading(true);
    try {
      const res = await authApi.google(credential);
      localStorage.setItem('token', res.data.token);
      subscriptionStorage.clearAll();
      await userStorage.set(res.data.user);
      await refreshUserAndSubscription();
      window.dispatchEvent(new Event('codesprout_user_change'));
      if (res.data.isNew) {
        toast.success('Account created with Google! Welcome 🎉');
      } else {
        toast.success('Signed in with Google!');
      }
      navigate('/');
    } catch (err: any) {
      toast.error(err.response?.data?.error || 'Google sign-in failed');
    } finally {
      setLoading(false);
    }
  }, [navigate]);

  const googleLogin = useGoogleLogin({
    onSuccess: (tokenResponse) => handleCredential(tokenResponse.access_token),
    onError: () => toast.error('Google sign-in was cancelled'),
    flow: 'implicit',
  });

  const login = useCallback(() => {
    if (!isConfigured) {
      toast.error('Google sign-in not configured. Set VITE_GOOGLE_CLIENT_ID in .env');
      return;
    }
    googleLogin();
  }, [googleLogin]);

  return { login, loading, isConfigured };
}
