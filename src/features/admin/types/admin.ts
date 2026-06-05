export interface AdminStats {
  total_users: number;
  total_questions: number;
  total_topics: number;
  total_bookmarks: number;
  premium_users: number;
}

export interface AdminQuestion {
  id: string;
  title: string;
  slug: string;
  difficulty: string;
  topic_id: string;
  topic_name: string;
  pattern: string;
  description?: string;
  visualization_type?: string;
  algorithm_type?: string;
  sample_input?: string;
  enable_visualization?: boolean;
  problem_statement?: string;
  input_format?: string;
  output_format?: string;
  constraints?: string;
  explanation?: string;
  starter_code?: Record<string, string>;
  companies?: string[];
  company_frequency?: string;
  examples?: { input: string; output: string; explanation?: string }[];
}

export interface AdminUser {
  id: string;
  name: string;
  email: string;
  role: string;
  subscription_plan: string;
  created_at: string;
}
