import { useState, useEffect } from "react";
import { useGame } from "@/contexts/GameContext";
import { getRandomQuestion } from "@/data/questions";
import { Question } from "@/types/game";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { ZokaLogo } from "@/components/ZokaLogo";
import { ArrowLeft, Shuffle, Users, Clock, Heart, Flame } from "lucide-react";

interface GamePlayingProps {
  chapter: number;
  onBack: () => void;
  onComplete: () => void;
}

export function GamePlaying({ chapter, onBack, onComplete }: GamePlayingProps) {
  const { gameSession, isDemo } = useGame();
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [usedQuestions, setUsedQuestions] = useState<Set<string>>(new Set());
  const [timeLeft, setTimeLeft] = useState<number | null>(null);
  const [isCompleted, setIsCompleted] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);

  const maxQuestions = 10; // Maximum questions per chapter
  
  const chapterTitles = {
    1: "Geceye Başlarken",
    2: "Isınma Turları", 
    3: "Akşamdan Kalma",
    4: "Partner Değişimi"
  };

  const intensityColors = {
    mild: "bg-green-500",
    moderate: "bg-yellow-500", 
    intense: "bg-orange-500",
    extreme: "bg-red-500"
  };

  const intensityLabels = {
    mild: "Hafif",
    moderate: "Orta",
    intense: "Yoğun", 
    extreme: "Ekstrem"
  };

  useEffect(() => {
    if (!gameSession) return;
    loadNextQuestion();
  }, [gameSession]);

  useEffect(() => {
    if (timeLeft === null) return;
    
    if (timeLeft > 0) {
      const timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      // Time's up!
      setShowAnswer(true);
    }
  }, [timeLeft]);

  const loadNextQuestion = () => {
    if (!gameSession) return;
    
    const question = getRandomQuestion(chapter, gameSession.gameMode);
    
    if (question && !usedQuestions.has(question.id)) {
      setCurrentQuestion(question);
      setUsedQuestions(prev => new Set([...prev, question.id]));
      setShowAnswer(false);
      
      // Set timer for dares (30 seconds to 2 minutes depending on intensity)
      if (question.type === 'dare') {
        const timerMap = {
          mild: 30,
          moderate: 60,
          intense: 90,
          extreme: 120
        };
        setTimeLeft(timerMap[question.intensity]);
      } else {
        setTimeLeft(null);
      }
    } else {
      // No more questions or all used
      setIsCompleted(true);
    }
  };

  const handleNext = () => {
    if (questionNumber >= maxQuestions) {
      setIsCompleted(true);
      return;
    }
    
    setQuestionNumber(prev => prev + 1);
    loadNextQuestion();
  };

  const handleComplete = () => {
    onComplete();
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  if (!gameSession || !currentQuestion) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <ZokaLogo className="scale-75 mb-4" />
          <p className="text-muted-foreground">Sorular yükleniyor...</p>
        </div>
      </div>
    );
  }

  if (isCompleted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-6">
        <Card className="w-full max-w-lg text-center">
          <CardHeader>
            <div className="mb-4">
              <Heart className="w-16 h-16 text-primary mx-auto mb-4" />
              <CardTitle className="text-2xl text-foreground">
                Bölüm Tamamlandı!
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {chapterTitles[chapter as keyof typeof chapterTitles]}
              </h3>
              <p className="text-muted-foreground">
                {questionNumber - 1} soru tamamlandı. Harika performans!
              </p>
            </div>
            
            <div className="space-y-3">
              <Button onClick={handleComplete} size="lg" className="w-full">
                Sonraki Bölüme Geç
              </Button>
              <Button onClick={onBack} variant="outline" size="lg" className="w-full">
                Bölüm Seçimine Dön
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-border">
        <Button variant="ghost" onClick={onBack} className="flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" />
          Geri
        </Button>
        
        <div className="text-center">
          <ZokaLogo className="scale-50" />
          <p className="text-sm text-muted-foreground">
            {chapterTitles[chapter as keyof typeof chapterTitles]}
          </p>
        </div>
        
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Users className="w-4 h-4" />
          {gameSession.gameMode === '2-player' ? '2' : '4'}
          {isDemo && <Badge variant="secondary">Demo</Badge>}
        </div>
      </div>

      {/* Progress */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-muted-foreground">
            Soru {questionNumber} / {maxQuestions}
          </span>
          <span className="text-sm text-muted-foreground">
            Bölüm {chapter}
          </span>
        </div>
        <Progress value={(questionNumber / maxQuestions) * 100} className="w-full" />
      </div>

      {/* Question Card */}
      <div className="p-6">
        <Card className="w-full max-w-2xl mx-auto">
          <CardHeader className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Badge 
                variant={currentQuestion.type === 'truth' ? 'default' : 'secondary'}
                className="text-xs"
              >
                {currentQuestion.type === 'truth' ? 'Doğruluk' : 'Cesaret'}
              </Badge>
              <Badge 
                variant="outline" 
                className={`text-xs ${intensityColors[currentQuestion.intensity]}`}
              >
                {intensityLabels[currentQuestion.intensity]}
              </Badge>
            </div>
            
            {currentQuestion.type === 'dare' && (
              <div className="mb-4">
                {currentQuestion.type === 'dare' && <Flame className="w-6 h-6 text-orange-500 mx-auto mb-2" />}
                <CardTitle className="text-xl text-foreground">
                  Cesaret Görevi
                </CardTitle>
              </div>
            )}
          </CardHeader>
          
          <CardContent className="text-center space-y-6">
            <div className="text-lg text-foreground font-medium leading-relaxed">
              {currentQuestion.content}
            </div>
            
            {timeLeft !== null && (
              <div className="space-y-2">
                <div className="flex items-center justify-center gap-2">
                  <Clock className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Kalan Süre</span>
                </div>
                <div className={`text-2xl font-bold ${timeLeft <= 10 ? 'text-red-500' : 'text-foreground'}`}>
                  {formatTime(timeLeft)}
                </div>
                <Progress 
                  value={(timeLeft / (currentQuestion.type === 'dare' ? 120 : 60)) * 100} 
                  className="w-full"
                />
              </div>
            )}
            
            <div className="space-y-3">
              {!showAnswer && timeLeft === null && (
                <Button onClick={() => setShowAnswer(true)} size="lg" className="w-full">
                  Cevaplandı
                </Button>
              )}
              
              {(showAnswer || timeLeft === 0) && (
                <div className="space-y-3">
                  <p className="text-sm text-muted-foreground">
                    {currentQuestion.type === 'truth' ? 'Doğruluk söylendi!' : 'Cesaret tamamlandı!'}
                  </p>
                  <Button onClick={handleNext} size="lg" className="w-full">
                    {questionNumber >= maxQuestions ? 'Bölümü Bitir' : 'Sonraki Soru'}
                  </Button>
                </div>
              )}
              
              <Button 
                onClick={loadNextQuestion} 
                variant="outline" 
                size="sm"
                className="w-full"
              >
                <Shuffle className="w-4 h-4 mr-2" />
                Farklı Soru
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Players Status */}
      <div className="p-6">
        <div className="max-w-2xl mx-auto">
          <h4 className="text-sm font-semibold text-muted-foreground mb-3 text-center">
            Oyuncular
          </h4>
          <div className="grid grid-cols-2 gap-4">
            {gameSession.players.map((player, index) => (
              <div key={player.id} className="flex items-center gap-2 p-3 bg-card rounded-lg">
                <div className={`w-3 h-3 rounded-full ${player.connected ? 'bg-green-500' : 'bg-red-500'}`} />
                <span className="text-sm text-foreground">
                  {player.name}
                  {player.isHost && ' (Host)'}
                  {isDemo && player.id.startsWith('bot') && ' (Bot)'}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}