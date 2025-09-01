import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { ZokaLogo } from '@/components/ZokaLogo';
import { useGame } from '@/contexts/GameContext';
import { getQuestionsByChapter, getRandomQuestion, getChapterById } from '@/data/gameQuestions';
import { Question } from '@/types/game';
import { ArrowLeft, SkipForward, RefreshCw, Settings } from 'lucide-react';

interface GamePlayingProps {
  chapterNumber: number;
  onBack: () => void;
  onQuit: () => void;
}

export const GamePlaying = ({ chapterNumber, onBack, onQuit }: GamePlayingProps) => {
  const { gameSession } = useGame();
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [usedQuestions, setUsedQuestions] = useState<Set<string>>(new Set());
  const [questionCount, setQuestionCount] = useState(0);
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const chapter = getChapterById(chapterNumber);
  const questions = gameSession ? getQuestionsByChapter(chapterNumber, gameSession.gameMode) : [];
  const availableQuestions = questions.filter(q => !usedQuestions.has(q.id));
  const progress = questions.length > 0 ? (usedQuestions.size / questions.length) * 100 : 0;
  const currentPlayer = gameSession?.players[currentPlayerIndex];

  useEffect(() => {
    if (availableQuestions.length > 0) {
      const randomQuestion = getRandomQuestion(availableQuestions);
      setCurrentQuestion(randomQuestion);
    }
  }, [availableQuestions]);

  const handleNextQuestion = () => {
    if (!currentQuestion) return;

    setIsLoading(true);
    
    // Add current question to used questions
    setUsedQuestions(prev => new Set([...prev, currentQuestion.id]));
    setQuestionCount(prev => prev + 1);
    
    // Move to next player
    if (gameSession) {
      setCurrentPlayerIndex(prev => (prev + 1) % gameSession.players.length);
    }

    setTimeout(() => {
      // Get next question
      const newAvailableQuestions = questions.filter(q => !usedQuestions.has(q.id) && q.id !== currentQuestion.id);
      if (newAvailableQuestions.length > 0) {
        const nextQuestion = getRandomQuestion(newAvailableQuestions);
        setCurrentQuestion(nextQuestion);
      } else {
        // No more questions available
        setCurrentQuestion(null);
      }
      setIsLoading(false);
    }, 300);
  };

  const handleSkipQuestion = () => {
    if (availableQuestions.length <= 1) {
      setCurrentQuestion(null);
      return;
    }

    setIsLoading(true);
    
    setTimeout(() => {
      const filteredQuestions = availableQuestions.filter(q => q.id !== currentQuestion?.id);
      const nextQuestion = getRandomQuestion(filteredQuestions);
      setCurrentQuestion(nextQuestion);
      setIsLoading(false);
    }, 300);
  };

  const handleRestartChapter = () => {
    setUsedQuestions(new Set());
    setQuestionCount(0);
    setCurrentPlayerIndex(0);
    const randomQuestion = getRandomQuestion(questions);
    setCurrentQuestion(randomQuestion);
  };

  const getIntensityColor = (intensity: string) => {
    switch (intensity) {
      case 'mild': return 'bg-blue-500';
      case 'moderate': return 'bg-yellow-500';
      case 'intense': return 'bg-orange-500';
      case 'extreme': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const getTypeIcon = (type: string) => {
    return type === 'truth' ? '🤔' : '💪';
  };

  if (!gameSession || !chapter) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-6">
        <Card className="w-full max-w-md text-center">
          <CardContent className="p-6">
            <p className="text-muted-foreground mb-4">Oyun verisi yüklenemedi</p>
            <Button onClick={onBack}>Ana Menüye Dön</Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Game completed
  if (!currentQuestion && usedQuestions.size > 0) {
    return (
      <div className="min-h-screen bg-background relative overflow-hidden">
        {/* Animated Background */}
        <div className="fixed inset-0 bg-gradient-glow opacity-30 animate-float" />
        <div className="fixed top-20 left-20 w-32 h-32 bg-primary/20 rounded-full blur-xl animate-float" />
        <div className="fixed bottom-20 right-20 w-48 h-48 bg-secondary/20 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }} />
        
        <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-6">
          <Card className="w-full max-w-lg text-center animate-scale-in">
            <CardHeader>
              <div className="text-6xl mb-4">🎉</div>
              <CardTitle className="text-2xl md:text-3xl">Bölüm Tamamlandı!</CardTitle>
              <CardDescription className="text-lg">
                {chapter.title} bölümünü başarıyla tamamladınız!
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">{questionCount}</div>
                <div className="text-muted-foreground">Soru Cevaplandı</div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <Button onClick={handleRestartChapter} variant="outline" className="flex-1">
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Tekrar Oyna
                </Button>
                <Button onClick={onBack} className="flex-1">
                  Bölüm Seçimi
                </Button>
              </div>
              
              <Button onClick={onQuit} variant="ghost" className="w-full">
                Ana Menü
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 bg-gradient-glow opacity-20 animate-float" />
      <div className="fixed top-20 left-20 w-32 h-32 bg-primary/10 rounded-full blur-xl animate-float" />
      <div className="fixed bottom-20 right-20 w-48 h-48 bg-secondary/10 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }} />
      
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border">
          <Button variant="ghost" size="sm" onClick={onBack}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Geri
          </Button>
          
          <div className="text-center">
            <ZokaLogo className="h-8" />
          </div>
          
          <Button variant="ghost" size="sm">
            <Settings className="w-4 h-4" />
          </Button>
        </div>

        {/* Game Info */}
        <div className="p-4 border-b border-border">
          <div className="text-center mb-4">
            <h2 className="text-xl font-bold">{chapter.title}</h2>
            <p className="text-sm text-muted-foreground">{chapter.subtitle}</p>
          </div>
          
          {/* Progress */}
          <div className="mb-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium">İlerleme</span>
              <span className="text-sm text-muted-foreground">
                {usedQuestions.size} / {questions.length}
              </span>
            </div>
            <Progress value={progress} className="w-full" />
          </div>

          {/* Players */}
          <div className="flex justify-center gap-2 flex-wrap">
            {gameSession.players.map((player, index) => (
              <Badge 
                key={player.id} 
                variant={index === currentPlayerIndex ? "default" : "secondary"}
                className="px-3 py-1"
              >
                {index === currentPlayerIndex && "🎯 "}
                {player.name}
              </Badge>
            ))}
          </div>
        </div>

        {/* Question Card */}
        <div className="flex-1 flex items-center justify-center p-6">
          {isLoading ? (
            <Card className="w-full max-w-2xl text-center animate-pulse">
              <CardContent className="p-8">
                <div className="h-4 bg-muted rounded w-3/4 mx-auto mb-4"></div>
                <div className="h-4 bg-muted rounded w-1/2 mx-auto"></div>
              </CardContent>
            </Card>
          ) : currentQuestion ? (
            <Card className="w-full max-w-2xl animate-fade-in">
              <CardHeader className="text-center">
                <div className="flex items-center justify-center gap-3 mb-2">
                  <div className="text-3xl">{getTypeIcon(currentQuestion.type)}</div>
                  <Badge variant="outline" className="capitalize">
                    {currentQuestion.type === 'truth' ? 'Doğruluk' : 'Cesaret'}
                  </Badge>
                  <div className={`w-3 h-3 rounded-full ${getIntensityColor(currentQuestion.intensity)}`}></div>
                </div>
                <CardTitle className="text-lg text-muted-foreground">
                  {currentPlayer?.name} için:
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-6">
                <p className="text-xl md:text-2xl font-medium leading-relaxed">
                  {currentQuestion.content}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <Button 
                    onClick={handleSkipQuestion} 
                    variant="outline" 
                    size="lg"
                    disabled={availableQuestions.length <= 1}
                    className="flex-1"
                  >
                    <SkipForward className="w-4 h-4 mr-2" />
                    Atla
                  </Button>
                  <Button 
                    onClick={handleNextQuestion} 
                    size="lg"
                    className="flex-1"
                  >
                    Tamamlandı
                  </Button>
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card className="w-full max-w-md text-center">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">🤔</div>
                <p className="text-muted-foreground mb-4">
                  Bu bölümde daha fazla soru yok
                </p>
                <div className="flex flex-col gap-3">
                  <Button onClick={handleRestartChapter} variant="outline">
                    <RefreshCw className="w-4 h-4 mr-2" />
                    Bölümü Tekrar Başlat
                  </Button>
                  <Button onClick={onBack}>
                    Bölüm Seçimi
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Footer Actions */}
        {currentQuestion && (
          <div className="p-4 border-t border-border">
            <div className="flex justify-center">
              <Button onClick={onQuit} variant="ghost" size="sm">
                Oyunu Bitir
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};