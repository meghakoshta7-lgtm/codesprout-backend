export interface CommunityMember {
  user_id: string;
  name: string;
  joined_at: string;
}

export interface Community {
  id: string;
  name: string;
  description: string;
  created_by: string;
  created_by_name: string;
  invite_code: string;
  members: CommunityMember[];
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

export interface LeaderboardEntry {
  user_id: string;
  user_name: string;
  total_points: number;
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

export interface ContestLeaderboardEntry {
  user_id: string;
  user_name: string;
  solved: number;
  total: number;
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
