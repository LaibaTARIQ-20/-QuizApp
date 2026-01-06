import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { getQuizById } from '../data/quizzes';
import { saveQuizAttempt, saveQuizProgress, getQuizProgress, clearQuizProgress } from '../utils/storage';
import type { QuizAttempt } from '../types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Progress } from '../components/ui/progress';
import { Badge } from '../components/ui/badge';
import { Clock, CheckCircle2 } from 'lucide-react';

export const QuizPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { user } = useAuth();
  const quiz = id ? getQuizById(id) : undefined;

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);

  useEffect(() => {
    if (!quiz || !id) return;

    // Load saved progress
    const savedProgress = getQuizProgress(id);
    if (savedProgress) {
      setCurrentQuestionIndex(savedProgress.currentQuestionIndex);
      setAnswers(savedProgress.answers);
      setTimeElapsed(savedProgress.timeElapsed);
    }
  }, [id, quiz]);

  useEffect(() => {
    if (isCompleted) return;

    const timer = setInterval(() => {
      setTimeElapsed(prev => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [isCompleted]);

  useEffect(() => {
    if (!quiz || !id || isCompleted) return;

    // Save progress
    saveQuizProgress({
      quizId: id,
      currentQuestionIndex,
      answers,
      startedAt: new Date().toISOString(),
      timeElapsed,
    });
  }, [currentQuestionIndex, answers, timeElapsed, quiz, id, isCompleted]);

  if (!quiz || !user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card>
          <CardContent className="p-6">
            <p>Quiz not found</p>
            <Button onClick={() => navigate('/')} className="mt-4">
              Go Back
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const currentQuestion = quiz.questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / quiz.questions.length) * 100;

  const handleAnswerSelect = (answerIndex: number) => {
    setAnswers(prev => ({
      ...prev,
      [currentQuestion.id]: answerIndex,
    }));
    setShowExplanation(false);
  };

  const handleNext = () => {
    if (currentQuestionIndex < quiz.questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setShowExplanation(false);
    } else {
      handleComplete();
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
      setShowExplanation(false);
    }
  };

  const handleComplete = () => {
    const score = quiz.questions.reduce((total, question) => {
      return total + (answers[question.id] === question.correctAnswer ? 1 : 0);
    }, 0);

    const attempt: QuizAttempt = {
      id: `attempt-${Date.now()}`,
      quizId: quiz.id,
      userId: user.id,
      answers,
      score,
      totalQuestions: quiz.questions.length,
      completedAt: new Date().toISOString(),
      timeTaken: timeElapsed,
    };

    saveQuizAttempt(attempt);
    clearQuizProgress(quiz.id);
    setIsCompleted(true);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  if (isCompleted) {
    const score = quiz.questions.reduce((total, question) => {
      return total + (answers[question.id] === question.correctAnswer ? 1 : 0);
    }, 0);
    const percentage = Math.round((score / quiz.questions.length) * 100);
    const passed = percentage >= 70;

    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-4">
        <Card className="w-full max-w-2xl">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <CheckCircle2 
                className={`h-16 w-16 ${passed ? 'text-green-500' : 'text-red-500'}`} 
              />
            </div>
            <CardTitle className="text-3xl">
              {passed ? 'Congratulations! 🎉' : 'Quiz Completed'}
            </CardTitle>
            <CardDescription>
              {passed 
                ? 'You passed the quiz!' 
                : 'Keep practicing and try again!'}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-center space-y-4">
              <div>
                <div className="text-6xl font-bold">{percentage}%</div>
                <p className="text-muted-foreground mt-2">
                  {score} out of {quiz.questions.length} correct
                </p>
              </div>
              <div className="flex justify-center gap-8 text-sm text-muted-foreground">
                <div>
                  <div className="font-semibold">Time Taken</div>
                  <div>{formatTime(timeElapsed)}</div>
                </div>
                <div>
                  <div className="font-semibold">Difficulty</div>
                  <div className="capitalize">{quiz.difficulty}</div>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <Button 
                variant="outline" 
                className="flex-1"
                onClick={() => navigate('/')}
              >
                Back to Home
              </Button>
              <Button 
                className="flex-1"
                onClick={() => {
                  setCurrentQuestionIndex(0);
                  setAnswers({});
                  setTimeElapsed(0);
                  setIsCompleted(false);
                }}
              >
                Retake Quiz
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  const selectedAnswer = answers[currentQuestion.id];
  const isAnswered = selectedAnswer !== undefined;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 p-4">
      <div className="container mx-auto max-w-4xl py-8">
        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-2xl font-bold">{quiz.title}</h1>
              <p className="text-sm text-muted-foreground">
                Question {currentQuestionIndex + 1} of {quiz.questions.length}
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Badge variant="outline" className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                {formatTime(timeElapsed)}
              </Badge>
              <Badge variant="secondary" className="capitalize">
                {currentQuestion.difficulty}
              </Badge>
            </div>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Question Card */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-xl">
              {currentQuestion.question}
            </CardTitle>
            {currentQuestion.code && (
              <div className="mt-4">
                <pre className="bg-slate-900 text-slate-50 p-4 rounded-lg overflow-x-auto">
                  <code>{currentQuestion.code}</code>
                </pre>
              </div>
            )}
          </CardHeader>
          <CardContent className="space-y-3">
            {currentQuestion.options.map((option, index) => {
              const isSelected = selectedAnswer === index;
              const isCorrect = index === currentQuestion.correctAnswer;
              const showResult = showExplanation && isAnswered;

              return (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  disabled={showExplanation}
                  className={`w-full p-4 text-left rounded-lg border-2 transition-all ${
                    showResult
                      ? isCorrect
                        ? 'border-green-500 bg-green-50 dark:bg-green-900/20'
                        : isSelected
                        ? 'border-red-500 bg-red-50 dark:bg-red-900/20'
                        : 'border-gray-200'
                      : isSelected
                      ? 'border-primary bg-primary/10'
                      : 'border-gray-200 hover:border-primary/50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-semibold ${
                      showResult
                        ? isCorrect
                          ? 'bg-green-500 text-white'
                          : isSelected
                          ? 'bg-red-500 text-white'
                          : 'bg-gray-200'
                        : isSelected
                        ? 'bg-primary text-white'
                        : 'bg-gray-200'
                    }`}>
                      {String.fromCharCode(65 + index)}
                    </div>
                    <div className="flex-1">{option}</div>
                  </div>
                </button>
              );
            })}

            {showExplanation && currentQuestion.explanation && (
              <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <p className="font-semibold mb-2">Explanation:</p>
                <p className="text-sm">{currentQuestion.explanation}</p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={currentQuestionIndex === 0}
          >
            Previous
          </Button>
          <div className="flex gap-2">
            {isAnswered && !showExplanation && (
              <Button
                variant="outline"
                onClick={() => setShowExplanation(true)}
              >
                Show Explanation
              </Button>
            )}
            <Button
              onClick={handleNext}
              disabled={!isAnswered}
            >
              {currentQuestionIndex === quiz.questions.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
