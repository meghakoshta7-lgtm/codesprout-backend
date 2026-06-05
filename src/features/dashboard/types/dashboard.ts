export interface DashboardData {
  bookmarks: { id: string; question_id: string; title: string; slug: string; difficulty: string }[];
  recent_questions: { id: string; title: string; slug: string; difficulty: string; viewed_at: string }[];
  completed_topics: { id: string; name: string; slug: string }[];
  subscription: { plan: string; status: string } | null;
}
