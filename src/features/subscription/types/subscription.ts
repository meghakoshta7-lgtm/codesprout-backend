export interface Subscription {
  id: string;
  plan: 'free' | 'premium';
  status: 'active' | 'inactive' | 'cancelled';
  start_date?: string;
  end_date?: string;
}

export interface PricingPlan {
  name: string;
  price: number;
  features: string[];
  popular?: boolean;
}
