export interface Topic {
  id: string;
  name: string;
  slug: string;
  description: string;
  questionCount: number;
}

export type VisualizationType = 'array' | 'hashmap' | 'linkedlist' | 'tree' | 'graph' | 'stack' | 'queue' | 'binarysearch' | 'slidingwindow' | 'heap' | 'dp' | 'none';

export interface Question {
  id: string;
  title: string;
  slug: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  topic_id: string;
  topic_name: string;
  pattern: string;
  description?: string;
  problem_statement?: string;
  input_format?: string;
  output_format?: string;
  constraints?: string;
  explanation?: string;
  starter_code?: Record<string, string>;
  visualization_type?: VisualizationType;
  algorithm_type?: string;
  sample_input?: string;
  enable_visualization?: boolean;
  companies?: string[];
  company_frequency?: string;
  key_insight?: string;
  related_problems?: { title: string; slug: string; difficulty: string }[];
  examples?: { input: string; output: string; explanation?: string }[];
  test_cases?: { id: string; input: string; expected_output: string; is_hidden: boolean }[];
}

export interface CheatSheet {
  question_id: string;
  pattern: string;
  recognition: string[];
  approach: string;
  approach_steps: string[];
  approach_diagram: string;
  approach_images?: { url: string; caption: string }[];
  complexity: { time: string; space: string };
  template: Record<string, string>;
  mistakes: string[];
  premium_content?: {
    recognition_signals?: string[];
    interview_notes: string;
    edge_cases?: string[];
    optimization_tricks?: string[];
    pattern_deep_dive?: string;
    company_frequency: Record<string, string>;
    related_chains: string[];
  };
}

export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  role: 'user' | 'admin';
  created_at: string;
  picture?: string;
  provider?: 'local' | 'google';
}

export interface Bookmark {
  id: string;
  user_id: string;
  question_id: string;
  created_at: string;
}

export interface Subscription {
  id: string;
  user_id: string;
  plan: 'free' | 'premium';
  status: 'active' | 'inactive' | 'cancelled';
  start_date: string;
  end_date?: string;
}

export interface PatternFlowStep {
  step: string;
  desc: string;
}

export interface PatternDetail {
  slug: string;
  name: string;
  category: string;
  summary: string;
  flow: PatternFlowStep[];
  template: string;
  tips: string[];
  traps: string[];
  time_complexity: string;
  space_complexity: string;
  updated_at?: string;
}

// ====== COMMUNITY ORIGINAL ======

export interface Community {
  id: string;
  name: string;
  description: string;
  created_by: string;
  created_by_name: string;
  invite_code: string;
  members: { user_id: string; name: string; joined_at: string }[];
  created_at: string;
}

export interface Answer {
  id: string;
  question_slug: string;
  user_id: string;
  user_name: string;
  code: string;
  language: string;
  explanation: string;
  created_at: string;
  upvotes: number;
  is_accepted?: boolean;
}

export interface ChatMessage {
  id: string;
  community_id: string;
  user_id: string;
  user_name: string;
  message: string;
  created_at: string;
}

// ====== COMMUNITY NEW FEATURES ======

export interface Discussion {
  id: string;
  question_slug: string;
  user_id: string;
  user_name: string;
  title: string;
  content: string;
  created_at: string;
  replies: DiscussionReply[];
}

export interface DiscussionReply {
  id: string;
  user_id: string;
  user_name: string;
  content: string;
  created_at: string;
}

export interface StudyProgress {
  id: string;
  user_id: string;
  user_name: string;
  community_id: string;
  date: string;
  questions_solved: number;
  note: string;
}

export interface PointsEntry {
  id: string;
  user_id: string;
  user_name: string;
  community_id: string;
  points: number;
  reason: string;
  created_at: string;
}

export interface WeeklyChallenge {
  id: string;
  community_id: string;
  created_by: string;
  title: string;
  description: string;
  days: ChallengeDay[];
  start_date: string;
  end_date: string;
  active: boolean;
}

export interface ChallengeDay {
  day: number;
  title: string;
  question_slug: string;
  question_title: string;
}

export interface ChallengeProgress {
  id: string;
  challenge_id: string;
  user_id: string;
  completed_days: number[];
}

export interface CommunityNote {
  id: string;
  community_id: string;
  user_id: string;
  user_name: string;
  title: string;
  content: string;
  created_at: string;
  updated_at: string;
}

export interface InterviewExperience {
  id: string;
  community_id: string;
  user_id: string;
  user_name: string;
  company: string;
  role: string;
  rounds: number;
  questions_asked: string[];
  experience: string;
  result: string;
  created_at: string;
}

export interface CommunityResource {
  id: string;
  community_id: string;
  user_id: string;
  user_name: string;
  title: string;
  type: 'youtube' | 'article' | 'pdf' | 'roadmap' | 'other';
  url: string;
  description: string;
  created_at: string;
}

export interface Contest {
  id: string;
  community_id: string;
  created_by: string;
  title: string;
  description: string;
  questions: { slug: string; title: string }[];
  duration_minutes: number;
  start_time: string;
  end_time: string;
  active: boolean;
}

export interface ContestSubmission {
  id: string;
  contest_id: string;
  user_id: string;
  user_name: string;
  question_slug: string;
  passed: boolean;
  submitted_at: string;
}

export interface Roadmap {
  id: string;
  community_id: string;
  created_by: string;
  title: string;
  description: string;
  steps: RoadmapStep[];
  created_at: string;
}

export interface RoadmapStep {
  order: number;
  title: string;
  description: string;
  topic_slug: string;
}

export interface RoadmapProgress {
  id: string;
  roadmap_id: string;
  user_id: string;
  completed_steps: number[];
}
