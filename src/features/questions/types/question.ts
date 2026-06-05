export type VisualizationType = 'array' | 'hashmap' | 'linkedlist' | 'tree' | 'graph' | 'stack' | 'queue' | 'binarysearch' | 'slidingwindow' | 'heap' | 'dp' | 'none';

export interface Question {
  id: string;
  title: string;
  slug: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  topic_id: string;
  topic_name: string;
  pattern: string;
  visualization_type?: VisualizationType;
  sample_input?: string;
  algorithm_type?: string;
  enable_visualization?: boolean;
}

export interface QuestionDetail extends Question {
  description?: string;
  problem_statement?: string;
  input_format?: string;
  output_format?: string;
  explanation?: string;
  starter_code?: Record<string, string>;
  companies?: string[];
  company_frequency?: string;
  key_insight?: string;
  examples?: { input: string; output: string; explanation?: string }[];
  constraints?: string | string[];
  cheat_sheet: {
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
  };
  similar_questions: {
    id: string;
    title: string;
    slug: string;
    difficulty: string;
  }[];
}
