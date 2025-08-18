import { useState } from "react";
import { ZokaLogo } from "@/components/ZokaLogo";
import { GameCard } from "@/components/GameCard";
import { Button } from "@/components/ui/button";
import { ConnectionModal } from "@/components/ConnectionModal";
import { Users, Heart } from "lucide-react";

interface GameSetupProps {
  onGameStart: (mode: '2-player' | '4-player') => void;
}

export function GameSetup({ onGameStart }: GameSetupProps) {
  const [selectedMode, setSelectedMode] = useState<'2-player' | '4-player' | null>(null);
  const [showConnection, setShowConnection] = useState(false);

  const handleModeSelect = (mode: '2-player' | '4-player') => {
    setSelectedMode(mode);
    setShowConnection(true);
  };

  const handleConnection = (method: string, code?: string) => {
    // Here you would implement the actual connection logic
    setShowConnection(false);
    if (selectedMode) {
      onGameStart(selectedMode);
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Animated Background */}
      <div className="fixed inset-0 bg-gradient-glow opacity-20 animate-float" />
      
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center p-6">
        {/* Logo */}
        <div className="mb-12 animate-fade-in">
          <ZokaLogo animated />
          <p className="text-center text-muted-foreground mt-4 text-lg">
            En İyi Çiftler Oyunu
          </p>
        </div>

        {/* Game Mode Selection */}
        <div className="w-full max-w-md space-y-6 animate-slide-up">
          <h2 className="text-2xl font-bold text-center text-foreground mb-8">
            Oyun Modunu Seçin
          </h2>

          <GameCard 
            variant="metallic" 
            className="cursor-pointer hover:scale-105 transition-all duration-300"
            onClick={() => handleModeSelect('2-player')}
          >
            <div className="flex items-center gap-4">
              <div className="p-4 bg-gradient-primary rounded-xl">
                <Heart className="w-8 h-8 text-primary-foreground" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-foreground">1 Çift</h3>
                <p className="text-muted-foreground">2 Oyuncu - İntim deneyim</p>
              </div>
              <div className="text-2xl font-bold text-primary">2</div>
            </div>
          </GameCard>

          <GameCard 
            variant="metallic" 
            className="cursor-pointer hover:scale-105 transition-all duration-300"
            onClick={() => handleModeSelect('4-player')}
          >
            <div className="flex items-center gap-4">
              <div className="p-4 bg-gradient-secondary rounded-xl">
                <Users className="w-8 h-8 text-secondary-foreground" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-foreground">2 Çift</h3>
                <p className="text-muted-foreground">4 Oyuncu - Grup deneyimi</p>
              </div>
              <div className="text-2xl font-bold text-secondary">4</div>
            </div>
          </GameCard>

          <div className="text-center">
            <Button variant="link" className="text-muted-foreground">
              Nasıl oynanır?
            </Button>
          </div>
        </div>
      </div>

      <ConnectionModal
        isOpen={showConnection}
        onClose={() => setShowConnection(false)}
        onConnect={handleConnection}
        isHost={true}
      />
    </div>
  );
}