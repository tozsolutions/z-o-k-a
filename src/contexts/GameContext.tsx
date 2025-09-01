
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Player, GameSession } from '@/types/game';

interface GameContextType {
  gameSession: GameSession | null;
  isDemo: boolean;
  setDemo: (demo: boolean) => void;
  startGame: (mode: '2-player' | '4-player', connectionMethod: string, isDemo?: boolean) => void;
  addPlayer: (player: Player) => void;
  isAllPlayersConnected: () => boolean;
}

const GameContext = createContext<GameContextType | undefined>(undefined);

export function GameProvider({ children }: { children: ReactNode }) {
  const [gameSession, setGameSession] = useState<GameSession | null>(null);
  const [isDemo, setIsDemo] = useState(false);

  const setDemo = (demo: boolean) => {
    setIsDemo(demo);
  };

  const startGame = (mode: '2-player' | '4-player', connectionMethod: string, isDemoMode = false) => {
    const hostPlayer: Player = {
      id: 'host',
      name: 'Ana Oyuncu',
      isHost: true,
      connected: true
    };

    const players = [hostPlayer];

    let finalPlayers = [...players];

    if (isDemoMode) {
      // Demo modunda bot oyuncular ekle
      if (mode === '2-player') {
        finalPlayers = [
          ...finalPlayers,
          {
            id: 'bot1',
            name: 'Partner',
            isHost: false,
            connected: true
          }
        ];
      } else {
        finalPlayers = [
          ...finalPlayers,
          {
            id: 'bot1',
            name: 'Partner',
            isHost: false,
            connected: true
          },
          {
            id: 'bot2',
            name: 'Oyuncu 3',
            isHost: false,
            connected: true
          },
          {
            id: 'bot3',
            name: 'Oyuncu 4',
            isHost: false,
            connected: true
          }
        ];
      }
    }

    const session: GameSession = {
      id: Math.random().toString(36).substring(7),
      players: finalPlayers,
      currentChapter: 0,
      gameMode: mode,
      connectionMethod: connectionMethod as 'wifi' | 'bluetooth' | 'hotspot',
      isActive: true
    };

    setGameSession(session);
    setIsDemo(isDemoMode);
  };

  const addPlayer = (player: Player) => {
    if (gameSession) {
      setGameSession({
        ...gameSession,
        players: [...gameSession.players, player]
      });
    }
  };

  const isAllPlayersConnected = () => {
    if (!gameSession) return false;
    const requiredPlayers = gameSession.gameMode === '2-player' ? 2 : 4;
    return gameSession.players.length >= requiredPlayers && 
           gameSession.players.every(p => p.connected);
  };

  return (
    <GameContext.Provider value={{
      gameSession,
      isDemo,
      setDemo,
      startGame,
      addPlayer,
      isAllPlayersConnected
    }}>
      {children}
    </GameContext.Provider>
  );
}

export function useGame() {
  const context = useContext(GameContext);
  if (context === undefined) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return context;
}
