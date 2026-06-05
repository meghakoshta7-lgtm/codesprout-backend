export interface Topic {
  id: string;
  name: string;
  slug: string;
  description?: string;
  questionCount?: number;
  icon?: string;
}

export interface TopicDetail extends Topic {
  questions: {
    id: string;
    title: string;
    slug: string;
    difficulty: string;
  }[];
}
