import { useState } from 'react';
import { paymentApi } from '../api/paymentApi';
import type { PaymentInit, PaymentStatus, PaymentVerify } from '../types/payment';
import toast from 'react-hot-toast';

export function usePaymentInit() {
  const [payment, setPayment] = useState<PaymentInit | null>(null);
  const [loading, setLoading] = useState(false);

  const init = async () => {
    setLoading(true);
    try {
      const res = await paymentApi.init();
      setPayment(res.data);
      return res.data;
    } catch (err: any) {
      toast.error(err.response?.data?.error || 'Failed to initiate payment');
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { payment, loading, init };
}

export function usePaymentVerify() {
  const [verifying, setVerifying] = useState(false);

  const verify = async (utr: string, paymentId?: string): Promise<PaymentVerify | null> => {
    setVerifying(true);
    try {
      const res = await paymentApi.verify(utr, paymentId);
      toast.success(res.data.message);
      localStorage.setItem('subscription', 'premium');
      if (res.data.subscription) {
        localStorage.setItem('subscription_data', JSON.stringify(res.data.subscription));
      }
      return res.data;
    } catch (err: any) {
      toast.error(err.response?.data?.error || 'Verification failed');
      return null;
    } finally {
      setVerifying(false);
    }
  };

  return { verifying, verify };
}

export function usePaymentStatus() {
  const [status, setStatus] = useState<PaymentStatus | null>(null);
  const [loading, setLoading] = useState(false);

  const check = async () => {
    setLoading(true);
    try {
      const res = await paymentApi.status();
      setStatus(res.data);
    } catch {
      // ignore
    } finally {
      setLoading(false);
    }
  };

  return { status, loading, check };
}
