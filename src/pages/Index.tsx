import { useState } from "react";
import { ZokaLogo } from "@/components/ZokaLogo";
import { Button } from "@/components/ui/button";
import { GameSetup } from "./GameSetup";
import { ChapterSelection } from "./ChapterSelection";
import { GamePlaying } from "./GamePlaying";
import { Settings } from "./Settings";
import { HowToPlay } from "./HowToPlay";

type GameState = 'landing' | 'setup' | 'chapters' | 'playing' | 'settings' | 'howtoplay';

const Index = () => {
  const [gameState, setGameState] = useState<GameState>('landing');
  const [gameMode, setGameMode] = useState<'2-player' | '4-player'>('2-player');
  const [currentChapter, setCurrentChapter] = useState<number>(1);

  const handleGameStart = (mode: '2-player' | '4-player') => {
    setGameMode(mode);
    setGameState('chapters');
  };

  const handleChapterSelect = (chapterNumber: number) => {
    setCurrentChapter(chapterNumber);
    setGameState('playing');
  };

  const handleGameComplete = () => {
    setGameState('chapters');
  };

  if (gameState === 'setup') {
    return <GameSetup onGameStart={handleGameStart} />;
  }

  if (gameState === 'chapters') {
    return (
      <ChapterSelection 
        gameMode={gameMode}
        onBack={() => setGameState('setup')}
        onChapterSelect={handleChapterSelect}
      />
    );
  }

  if (gameState === 'playing') {
    return (
      <GamePlaying
        chapter={currentChapter}
        onBack={() => setGameState('chapters')}
        onComplete={handleGameComplete}
      />
    );
  }

  if (gameState === 'settings') {
    return <Settings onBack={() => setGameState('landing')} />;
  }

  if (gameState === 'howtoplay') {
    return <HowToPlay onBack={() => setGameState('landing')} />;
  }

  // Landing Page
  return (
    <div className="min-h-screen bg-background flex flex-col relative overflow-hidden">
      {/* Animated Background Effects */}
      <div className="fixed inset-0 bg-gradient-glow opacity-30 animate-float" />
      <div className="fixed top-20 left-20 w-32 h-32 bg-primary/20 rounded-full blur-xl animate-float" />
      <div className="fixed bottom-20 right-20 w-48 h-48 bg-secondary/20 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }} />
      
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center p-6">
        {/* Main Logo */}
        <div className="text-center mb-12 animate-fade-in">
          <ZokaLogo animated className="mb-6" />
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            En İyi Çiftler Oyunu
          </h2>
          <p className="text-lg text-muted-foreground max-w-md mx-auto">
            Partnerinizle veya arkadaşlarınızla unutulmaz anlar yaşayın. 
            İntimlik, eğlence ve macera bir arada.
          </p>
        </div>

        {/* Call to Action */}
        <div className="space-y-6 text-center animate-scale-in">
          <Button 
            variant="hero" 
            size="lg"
            onClick={() => setGameState('setup')}
            className="text-xl px-12 py-6"
          >
            Oyuna Başla
          </Button>
          
          <div className="flex gap-4 justify-center">
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => setGameState('howtoplay')}
            >
              Nasıl Oynanır?
            </Button>
            <Button 
              variant="ghost" 
              size="lg"
              onClick={() => setGameState('settings')}
            >
              Ayarlar
            </Button>
          </div>
        </div>

        {/* Features */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto animate-slide-up">
          <div className="text-center p-6 rounded-xl bg-card/50 border border-border">
            <div className="text-3xl mb-3">💕</div>
            <h3 className="font-semibold text-foreground mb-2">2-4 Oyuncu</h3>
            <p className="text-sm text-muted-foreground">Çift veya grup deneyimi</p>
          </div>
          
          <div className="text-center p-6 rounded-xl bg-card/50 border border-border">
            <div className="text-3xl mb-3">🔥</div>
            <h3 className="font-semibold text-foreground mb-2">4 Farklı Bölüm</h3>
            <p className="text-sm text-muted-foreground">Artan yoğunluk seviyeleri</p>
          </div>
          
          <div className="text-center p-6 rounded-xl bg-card/50 border border-border">
            <div className="text-3xl mb-3">📱</div>
            <h3 className="font-semibold text-foreground mb-2">Çoklu Bağlantı</h3>
            <p className="text-sm text-muted-foreground">WiFi, Bluetooth, Hotspot</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 p-6 text-center border-t border-border">
        <p className="text-sm text-muted-foreground">
          © 2024 Zoka. Tüm hakları saklıdır.
        </p>
      </div>
    </div>
  );
};

export default Index;
