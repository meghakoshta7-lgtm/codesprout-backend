export interface PaymentInit {
  payment_id: string;
  txn_id?: string;
  amount: number;
  currency?: string;
  upi_id: string;
  payee_name?: string;
  qr_data: string;
  upi_deep_link: string;
  status: string;
  expires_in?: string;
}

export interface PaymentVerify {
  success: boolean;
  message: string;
  payment: {
    id: string;
    utr: string;
    amount: number;
    verified_at: string;
  };
  subscription: {
    id: string;
    plan: string;
    status: string;
    start_date: string;
    end_date: string;
  };
}

export interface PaymentStatus {
  id: string;
  status: 'pending' | 'verified' | 'failed' | 'no_payment';
  amount: number;
  upi_id: string;
  utr: string | null;
  created_at: string;
  verified_at: string | null;
}
