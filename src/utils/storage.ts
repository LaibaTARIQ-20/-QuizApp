import type { User, QuizAttempt, QuizProgress } from '../types';

const STORAGE_KEYS = {
  USER: 'quiz-app-user',
  QUIZ_ATTEMPTS: 'quiz-app-attempts',
  QUIZ_PROGRESS: 'quiz-app-progress',
} as const;

// User management
export const saveUser = (user: User): void => {
  localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(user));
};

export const getUser = (): User | null => {
  const userJson = localStorage.getItem(STORAGE_KEYS.USER);
  return userJson ? JSON.parse(userJson) : null;
};

export const removeUser = (): void => {
  localStorage.removeItem(STORAGE_KEYS.USER);
};

// Quiz attempts management
export const saveQuizAttempt = (attempt: QuizAttempt): void => {
  const attempts = getQuizAttempts();
  attempts.push(attempt);
  localStorage.setItem(STORAGE_KEYS.QUIZ_ATTEMPTS, JSON.stringify(attempts));
};

export const getQuizAttempts = (): QuizAttempt[] => {
  const attemptsJson = localStorage.getItem(STORAGE_KEYS.QUIZ_ATTEMPTS);
  return attemptsJson ? JSON.parse(attemptsJson) : [];
};

export const getUserQuizAttempts = (userId: string): QuizAttempt[] => {
  return getQuizAttempts().filter(attempt => attempt.userId === userId);
};

// Quiz progress management
export const saveQuizProgress = (progress: QuizProgress): void => {
  const allProgress = getAllQuizProgress();
  const existingIndex = allProgress.findIndex(p => p.quizId === progress.quizId);
  
  if (existingIndex >= 0) {
    allProgress[existingIndex] = progress;
  } else {
    allProgress.push(progress);
  }
  
  localStorage.setItem(STORAGE_KEYS.QUIZ_PROGRESS, JSON.stringify(allProgress));
};

export const getQuizProgress = (quizId: string): QuizProgress | null => {
  const allProgress = getAllQuizProgress();
  return allProgress.find(p => p.quizId === quizId) || null;
};

export const getAllQuizProgress = (): QuizProgress[] => {
  const progressJson = localStorage.getItem(STORAGE_KEYS.QUIZ_PROGRESS);
  return progressJson ? JSON.parse(progressJson) : [];
};

export const clearQuizProgress = (quizId: string): void => {
  const allProgress = getAllQuizProgress();
  const filtered = allProgress.filter(p => p.quizId !== quizId);
  localStorage.setItem(STORAGE_KEYS.QUIZ_PROGRESS, JSON.stringify(filtered));
};

export const clearAllData = (): void => {
  Object.values(STORAGE_KEYS).forEach(key => {
    localStorage.removeItem(key);
  });
};
