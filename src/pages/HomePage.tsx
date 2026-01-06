import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { quizzes } from '../data/quizzes';
import { getUserQuizAttempts } from '../utils/storage';
import { Award, BookOpen, Clock, TrendingUp } from 'lucide-react';

export const HomePage = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const userAttempts = user ? getUserQuizAttempts(user.id) : [];

  const totalQuizzesTaken = userAttempts.length;
  const averageScore = userAttempts.length > 0
    ? Math.round(userAttempts.reduce((sum, attempt) => sum + (attempt.score / attempt.totalQuestions) * 100, 0) / userAttempts.length)
    : 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Welcome back, {user?.username}! 👋</h1>
          <p className="text-muted-foreground">Ready to test your coding knowledge?</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <BookOpen className="h-4 w-4 text-blue-500" />
                Quizzes Available
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{quizzes.length}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <Award className="h-4 w-4 text-green-500" />
                Quizzes Taken
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{totalQuizzesTaken}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-purple-500" />
                Average Score
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{averageScore}%</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <Clock className="h-4 w-4 text-orange-500" />
                Time Spent
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">
                {Math.floor(userAttempts.reduce((sum, attempt) => sum + attempt.timeTaken, 0) / 60)}m
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Available Quizzes */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Available Quizzes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {quizzes.map((quiz) => {
              const attempts = userAttempts.filter(a => a.quizId === quiz.id);
              const bestScore = attempts.length > 0
                ? Math.max(...attempts.map(a => (a.score / a.totalQuestions) * 100))
                : null;

              return (
                <Card key={quiz.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <Badge 
                        variant={quiz.difficulty === 'hard' ? 'destructive' : 
                                quiz.difficulty === 'medium' ? 'secondary' : 
                                'default'}
                      >
                        {quiz.difficulty}
                      </Badge>
                      {bestScore !== null && (
                        <Badge variant="outline" className="bg-green-50 dark:bg-green-900">
                          Best: {Math.round(bestScore)}%
                        </Badge>
                      )}
                    </div>
                    <CardTitle className="text-xl">{quiz.title}</CardTitle>
                    <CardDescription className="line-clamp-2">
                      {quiz.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span>{quiz.questions.length} questions</span>
                      <span>{quiz.timeLimit} minutes</span>
                    </div>
                    <Button 
                      className="w-full"
                      onClick={() => navigate(`/quiz/${quiz.id}`)}
                    >
                      {attempts.length > 0 ? 'Retake Quiz' : 'Start Quiz'}
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Recent Attempts */}
        {userAttempts.length > 0 && (
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Recent Attempts</h2>
            <Card>
              <CardContent className="p-0">
                <div className="divide-y">
                  {userAttempts.slice(-5).reverse().map((attempt) => {
                    const quiz = quizzes.find(q => q.id === attempt.quizId);
                    const scorePercentage = Math.round((attempt.score / attempt.totalQuestions) * 100);
                    
                    return (
                      <div key={attempt.id} className="p-4 flex items-center justify-between hover:bg-accent/50 transition-colors">
                        <div className="flex-1">
                          <h3 className="font-semibold">{quiz?.title}</h3>
                          <p className="text-sm text-muted-foreground">
                            {new Date(attempt.completedAt).toLocaleDateString()} at{' '}
                            {new Date(attempt.completedAt).toLocaleTimeString()}
                          </p>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="text-right">
                            <div className="font-bold text-lg">{scorePercentage}%</div>
                            <div className="text-sm text-muted-foreground">
                              {attempt.score}/{attempt.totalQuestions} correct
                            </div>
                          </div>
                          <Badge 
                            variant={scorePercentage >= 70 ? 'default' : 'destructive'}
                            className={scorePercentage >= 70 ? 'bg-green-500' : ''}
                          >
                            {scorePercentage >= 70 ? 'Passed' : 'Failed'}
                          </Badge>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};
