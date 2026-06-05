import api from '@/services/api';
import type { PaymentInit, PaymentVerify, PaymentStatus } from '../types/payment';

export const paymentApi = {
  init: () => api.post<PaymentInit>('/payments/init'),
  verify: (utr: string, payment_id?: string) =>
    api.post<PaymentVerify>('/payments/verify', { utr, payment_id }),
  status: () => api.get<PaymentStatus>('/payments/status'),
};
