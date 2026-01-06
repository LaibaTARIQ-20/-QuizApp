export interface User {
  id: string;
  username: string;
  email: string;
  createdAt: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  code?: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
  difficulty: 'easy' | 'medium' | 'hard';
  topic: string;
}

export interface Quiz {
  id: string;
  title: string;
  description: string;
  questions: QuizQuestion[];
  timeLimit?: number; // in minutes
  difficulty: 'easy' | 'medium' | 'hard';
}

export interface QuizAttempt {
  id: string;
  quizId: string;
  userId: string;
  answers: Record<string, number>;
  score: number;
  totalQuestions: number;
  completedAt: string;
  timeTaken: number; // in seconds
}

export interface QuizProgress {
  quizId: string;
  currentQuestionIndex: number;
  answers: Record<string, number>;
  startedAt: string;
  timeElapsed: number;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
}
