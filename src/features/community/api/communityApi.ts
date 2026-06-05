import api from '@/services/api';
import type {
  Community, Answer, ChatMessage, Discussion,
  StudyProgress, PointsEntry, LeaderboardEntry,
  WeeklyChallenge, ChallengeProgress,
  CommunityNote, InterviewExperience, CommunityResource,
  Contest, ContestSubmission, ContestLeaderboardEntry,
  Roadmap, RoadmapProgress,
} from '../types/community';

export const communityApi = {
  // Core
  list: () => api.get<Community[]>('/communities'),
  get: (id: string) => api.get<Community>(`/communities/${id}`),
  create: (name: string, description?: string) => api.post<Community>('/communities', { name, description }),
  join: (inviteCode: string) => api.post<Community>('/communities/join', { invite_code: inviteCode }),
  leave: (id: string) => api.delete(`/communities/${id}/members`),
  getByInvite: (code: string) => api.get(`/communities/invite/${code}`),

  // Answers
  getAnswers: (questionSlug: string) => api.get<Answer[]>(`/answers/${questionSlug}`),
  submitAnswer: (data: { question_slug: string; code: string; language?: string; explanation?: string }) =>
    api.post<Answer>('/answers', data),
  upvoteAnswer: (id: string) => api.post<Answer>(`/answers/${id}/upvote`),
  acceptAnswer: (id: string) => api.post<Answer>(`/answers/${id}/accept`),

  // Chat
  getChat: (communityId: string) => api.get<ChatMessage[]>(`/chat/${communityId}`),
  sendChat: (communityId: string, message: string) => api.post<ChatMessage>(`/chat/${communityId}`, { message }),

  // Discussions
  getDiscussions: (questionSlug: string) => api.get<Discussion[]>(`/discussions/${questionSlug}`),
  getAllDiscussions: () => api.get<Discussion[]>('/discussions/all'),
  createDiscussion: (data: { question_slug: string; title?: string; content: string }) =>
    api.post<Discussion>('/discussions', data),
  replyDiscussion: (id: string, content: string) =>
    api.post<Discussion>(`/discussions/${id}/reply`, { content }),

  // Study Progress
  getProgress: (communityId: string) => api.get<StudyProgress[]>(`/progress/${communityId}`),
  addProgress: (data: { community_id: string; questions_solved?: number; note?: string }) =>
    api.post<StudyProgress>('/progress', data),

  // Leaderboard
  getLeaderboard: (communityId: string) => api.get<LeaderboardEntry[]>(`/leaderboard/${communityId}`),
  getGlobalLeaderboard: () => api.get<LeaderboardEntry[]>('/leaderboard/global'),

  // Points
  addPoints: (data: { community_id?: string; points: number; reason: string }) =>
    api.post<PointsEntry>('/points', data),

  // Weekly Challenges
  getChallenges: (communityId: string) => api.get<WeeklyChallenge[]>(`/challenges/${communityId}`),
  createChallenge: (data: { community_id: string; title: string; description?: string; days: any[]; start_date: string; end_date: string }) =>
    api.post<WeeklyChallenge>('/challenges', data),
  updateChallenge: (id: string, data: Partial<WeeklyChallenge>) => api.put<WeeklyChallenge>(`/challenges/${id}`, data),
  updateChallengeProgress: (challengeId: string, completedDays: number[]) =>
    api.post<ChallengeProgress>(`/challenges/${challengeId}/progress`, { completed_days: completedDays }),
  getChallengeProgress: (challengeId: string) => api.get<ChallengeProgress[]>(`/challenges/${challengeId}/progress`),

  // Notes
  getNotes: (communityId: string) => api.get<CommunityNote[]>(`/notes/${communityId}`),
  createNote: (data: { community_id: string; title: string; content?: string }) =>
    api.post<CommunityNote>('/notes', data),
  updateNote: (id: string, data: { title?: string; content?: string }) =>
    api.put<CommunityNote>(`/notes/${id}`, data),

  // Interview Experiences
  getInterviews: (communityId: string) => api.get<InterviewExperience[]>(`/interviews/${communityId}`),
  createInterview: (data: { community_id: string; company: string; role?: string; rounds?: number; questions_asked?: string[]; experience?: string; result?: string }) =>
    api.post<InterviewExperience>('/interviews', data),

  // Resources
  getResources: (communityId: string) => api.get<CommunityResource[]>(`/resources/${communityId}`),
  createResource: (data: { community_id: string; title: string; type: string; url: string; description?: string }) =>
    api.post<CommunityResource>('/resources', data),

  // Contests
  getContests: (communityId: string) => api.get<Contest[]>(`/contests/${communityId}`),
  createContest: (data: { community_id: string; title: string; description?: string; questions: any[]; duration_minutes?: number; start_time?: string }) =>
    api.post<Contest>('/contests', data),
  submitContest: (contestId: string, data: { question_slug: string; passed: boolean }) =>
    api.post<ContestSubmission>(`/contests/${contestId}/submit`, data),
  getContestLeaderboard: (contestId: string) => api.get<ContestLeaderboardEntry[]>(`/contests/${contestId}/leaderboard`),

  // Roadmaps
  getRoadmaps: (communityId: string) => api.get<Roadmap[]>(`/roadmaps/${communityId}`),
  createRoadmap: (data: { community_id: string; title: string; description?: string; steps: any[] }) =>
    api.post<Roadmap>('/roadmaps', data),
  updateRoadmapProgress: (roadmapId: string, completedSteps: number[]) =>
    api.post<RoadmapProgress>(`/roadmaps/${roadmapId}/progress`, { completed_steps: completedSteps }),
  getRoadmapProgress: (roadmapId: string) => api.get<RoadmapProgress[]>(`/roadmaps/${roadmapId}/progress`),
};
