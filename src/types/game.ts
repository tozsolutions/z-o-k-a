export interface Player {
  id: string;
  name: string;
  isHost: boolean;
  connected: boolean;
}

export interface GameSession {
  id: string;
  players: Player[];
  currentChapter: number;
  gameMode: '2-player' | '4-player';
  connectionMethod: 'wifi' | 'bluetooth' | 'hotspot';
  isActive: boolean;
}

export interface Question {
  id: string;
  type: 'truth' | 'dare' | 'custom';
  content: string;
  chapter: number;
  intensity: 'mild' | 'moderate' | 'intense' | 'extreme';
  playerCount: '2-player' | '4-player' | 'both';
}

export interface Chapter {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  isLocked: boolean;
  isExclusive: boolean;
  requiredPlayerCount?: '4-player';
  questions: Question[];
}