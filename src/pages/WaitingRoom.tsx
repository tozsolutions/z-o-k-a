import { useState, useEffect } from "react";
import { ZokaLogo } from "@/components/ZokaLogo";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Users, Wifi, Bluetooth, Server, Copy, Check } from "lucide-react";
import { useGame } from "@/contexts/GameContext";

interface WaitingRoomProps {
  gameMode: '2-player' | '4-player';
  onBack: () => void;
  onAllConnected: () => void;
}

export function WaitingRoom({ gameMode, onBack, onAllConnected }: WaitingRoomProps) {
  const { gameSession, isDemo } = useGame();
  const [connectionCode] = useState(() => Math.random().toString(36).substring(2, 8).toUpperCase());
  const [copied, setCopied] = useState(false);

  const requiredPlayers = gameMode === '2-player' ? 2 : 4;
  const connectedPlayers = gameSession?.players.length || 0;
  const allConnected = connectedPlayers >= requiredPlayers;

  useEffect(() => {
    if (allConnected) {
      const timer = setTimeout(() => {
        onAllConnected();
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [allConnected, onAllConnected]);

  const copyCode = () => {
    navigator.clipboard.writeText(connectionCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getConnectionIcon = () => {
    if (!gameSession) return <Server className="w-6 h-6" />;
    
    switch (gameSession.connectionMethod) {
      case 'wifi': return <Wifi className="w-6 h-6" />;
      case 'bluetooth': return <Bluetooth className="w-6 h-6" />;
      case 'hotspot': return <Server className="w-6 h-6" />;
      default: return <Server className="w-6 h-6" />;
    }
  };

  const getConnectionMethodText = () => {
    if (isDemo) return "Demo Modu";
    if (!gameSession) return "Bağlantı";
    
    switch (gameSession.connectionMethod) {
      case 'wifi': return "WiFi Bağlantısı";
      case 'bluetooth': return "Bluetooth Bağlantısı"; 
      case 'hotspot': return "Yerel Sunucu";
      default: return "Bağlantı";
    }
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 bg-gradient-glow opacity-20 animate-float" />
      <div className="fixed top-20 left-20 w-32 h-32 bg-primary/10 rounded-full blur-xl animate-float" />
      <div className="fixed bottom-20 right-20 w-48 h-48 bg-secondary/10 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }} />
      
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <Button variant="ghost" onClick={onBack} className="flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            Geri
          </Button>
          
          <div className="text-center">
            <ZokaLogo className="scale-50" />
          </div>
          
          <div className="w-20" /> {/* Spacer */}
        </div>

        <div className="flex-1 flex items-center justify-center p-6">
          <Card className="w-full max-w-md animate-scale-in">
            <CardHeader className="text-center">
              <div className="text-4xl mb-4">
                {allConnected ? '🎉' : '⏳'}
              </div>
              <CardTitle className="text-2xl">
                {allConnected ? 'Herkes Bağlandı!' : 'Oyuncular Bekleniyor'}
              </CardTitle>
              <CardDescription>
                {allConnected 
                  ? 'Oyun yakında başlayacak...'
                  : `${gameMode === '2-player' ? '2 oyuncu' : '4 oyuncu'} modu için diğer oyuncuların bağlanmasını bekliyoruz`
                }
              </CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-6">
              {/* Connection Info */}
              {!isDemo && (
                <div className="bg-card/50 p-4 rounded-lg border border-border">
                  <div className="flex items-center justify-center gap-2 mb-3">
                    {getConnectionIcon()}
                    <span className="font-medium">{getConnectionMethodText()}</span>
                  </div>
                  
                  {gameSession?.connectionMethod === 'hotspot' && (
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground mb-2">Bağlantı Kodu:</p>
                      <div className="flex items-center gap-2 justify-center">
                        <code className="bg-muted px-3 py-2 rounded text-lg font-bold">
                          {connectionCode}
                        </code>
                        <Button size="sm" variant="outline" onClick={copyCode}>
                          {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Player List */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-medium flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    Oyuncular
                  </span>
                  <Badge variant={allConnected ? "default" : "secondary"}>
                    {connectedPlayers}/{requiredPlayers}
                  </Badge>
                </div>
                
                <div className="space-y-2">
                  {gameSession?.players.map((player, index) => (
                    <div key={player.id} className="flex items-center justify-between p-3 bg-card/30 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className={`w-3 h-3 rounded-full ${player.connected ? 'bg-green-500 animate-pulse' : 'bg-gray-400'}`} />
                        <span className="font-medium">
                          {player.name}
                          {player.isHost && ' (Host)'}
                          {isDemo && player.id.startsWith('bot') && ' (Bot)'}
                        </span>
                      </div>
                      <Badge variant={player.connected ? "default" : "secondary"} className="text-xs">
                        {player.connected ? 'Bağlı' : 'Bekliyor'}
                      </Badge>
                    </div>
                  )) || (
                    // Placeholder for missing players
                    Array.from({ length: requiredPlayers }, (_, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-card/30 rounded-lg opacity-50">
                        <div className="flex items-center gap-3">
                          <div className="w-3 h-3 rounded-full bg-gray-400" />
                          <span className="text-muted-foreground">
                            {index === 0 ? 'Ana Oyuncu' : `Oyuncu ${index + 1}`}
                          </span>
                        </div>
                        <Badge variant="secondary" className="text-xs">Bekliyor</Badge>
                      </div>
                    ))
                  )}
                </div>
              </div>

              {/* Instructions */}
              {!isDemo && !allConnected && (
                <div className="text-center p-4 bg-accent/10 rounded-lg border border-accent/20">
                  <p className="text-sm text-muted-foreground">
                    Diğer oyuncular aynı {gameSession?.connectionMethod === 'wifi' ? 'WiFi ağına bağlanmalı' : 
                    gameSession?.connectionMethod === 'bluetooth' ? 'Bluetooth ile bağlanmalı' : 
                    'koda sahip olmalı'} ve bu oyun odasına katılmalıdır.
                  </p>
                </div>
              )}

              {allConnected && (
                <div className="text-center">
                  <Button onClick={onAllConnected} size="lg" className="w-full">
                    Hemen Başla
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}