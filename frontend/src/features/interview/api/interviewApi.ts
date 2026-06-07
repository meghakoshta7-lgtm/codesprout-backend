import api from '@/services/api';
import type {
  InterviewPreference, GeneratedQuestion, MockSession, InterviewKit, AnswerFeedbackResponse,
  MockRoundType, QuestionDifficulty,
} from '../types';

export const interviewApi = {
  getRoles: () => api.get<{ id: string; name: string; description: string; icon: string }[]>('/interview-prep/roles'),
  getRole: (id: string) => api.get(`/interview-prep/role/${id}`),

  getPreferences: () => api.get<InterviewPreference | null>('/interview-prep/preferences'),
  savePreferences: (data: Partial<InterviewPreference>) =>
    api.post<InterviewPreference>('/interview-prep/preferences', data),
  deletePreferences: () => api.delete<{ success: boolean }>('/interview-prep/preferences'),

  generateQuestions: (subject: string, role: string, count?: Partial<Record<QuestionDifficulty, number>>) =>
    api.post<{ generated: number; total: number; questions: GeneratedQuestion[]; message?: string }>(
      '/interview-prep/generate-questions', { subject, role, count_per_difficulty: count }
    ),
  getQuestions: (subject: string) =>
    api.get<{ subject: string; count: number; questions: GeneratedQuestion[] }>(`/interview-prep/questions/${encodeURIComponent(subject)}`),
  clearQuestions: (subject: string) =>
    api.delete<{ removed: number }>(`/interview-prep/questions/${encodeURIComponent(subject)}`),

  startMock: (subject: string, round_type: MockRoundType, num_questions = 5) =>
    api.post<MockSession>('/interview-prep/mock/start', { subject, round_type, num_questions }),
  submitAnswer: (sessionId: string, question_id: string, answer: string, audio_data_url?: string) =>
    api.post<AnswerFeedbackResponse>(`/interview-prep/mock/${sessionId}/answer`, { question_id, answer, audio_data_url }),
  endMock: (sessionId: string) => api.post<MockSession>(`/interview-prep/mock/${sessionId}/end`, {}),
  abandonMock: (sessionId: string) => api.post<MockSession>(`/interview-prep/mock/${sessionId}/abandon`, {}),
  getMockSession: (sessionId: string) => api.get<MockSession>(`/interview-prep/mock/${sessionId}`),
  getMockSessions: () => api.get<MockSession[]>('/interview-prep/mock/sessions'),

  generateKit: (subjects?: string[], max_per_subject = 25) =>
    api.post<InterviewKit>('/interview-prep/kit/generate', { subjects, max_per_subject }),
  getKits: () => api.get<InterviewKit[]>('/interview-prep/kits'),
  getKit: (id: string) => api.get<InterviewKit>(`/interview-prep/kit/${id}`),

  // AI Interview Engine (Multi-Round)
  startAiInterview: () =>
    api.post<{ sessionId: string; reply: string; round: string; state: any }>('/interview-prep/ai-interview/start', {}),
  sendAiMessage: (sessionId: string, message: string) =>
    api.post<{
      reply: string; round: string; difficulty: string;
      roundNumber: number; totalRounds: number;
      interviewComplete: boolean; completedRounds: { type: string; score?: number }[];
    }>(`/interview-prep/ai-interview/${sessionId}/chat`, { message }),
  getAiSession: (sessionId: string) =>
    api.get<{ state: any }>(`/interview-prep/ai-interview/${sessionId}`),
  endAiInterview: (sessionId: string) =>
    api.post(`/interview-prep/ai-interview/${sessionId}/end`, {}),
  getAiInterviewReport: (sessionId: string) =>
    api.get<{ report: any; conversation: any[]; rounds: any[] }>(`/interview-prep/ai-interview/${sessionId}/report`),
  getAiInterviews: () => api.get<any[]>('/interview-prep/ai-interviews'),
};
