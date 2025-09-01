import { Question, Chapter } from '@/types/game';

// Game questions database
export const gameQuestions: Question[] = [
  // Chapter 1: Geceye Başlarken - Mild questions
  {
    id: 'q1_1',
    type: 'truth',
    content: 'Bana yaşadığın en utanç verici anıyı anlat.',
    chapter: 1,
    intensity: 'mild',
    playerCount: 'both'
  },
  {
    id: 'q1_2',
    type: 'dare',
    content: 'Partnerine 30 saniye boyunca gözlerinin içine bakarak bir şey söyleme.',
    chapter: 1,
    intensity: 'mild',
    playerCount: 'both'
  },
  {
    id: 'q1_3',
    type: 'truth',
    content: 'Hangi ünlüye aşıksın ve neden?',
    chapter: 1,
    intensity: 'mild',
    playerCount: 'both'
  },
  {
    id: 'q1_4',
    type: 'dare',
    content: 'En sevdiğin şarkıyı partner(ler)ine dans ederek göster.',
    chapter: 1,
    intensity: 'mild',
    playerCount: 'both'
  },
  {
    id: 'q1_5',
    type: 'truth',
    content: 'Çocukken en çok hangi oyuncakla oynuyordun?',
    chapter: 1,
    intensity: 'mild',
    playerCount: 'both'
  },

  // Chapter 2: Isınma Turları - Moderate questions
  {
    id: 'q2_1',
    type: 'truth',
    content: 'İlk öpücük deneyimini anlat.',
    chapter: 2,
    intensity: 'moderate',
    playerCount: 'both'
  },
  {
    id: 'q2_2',
    type: 'dare',
    content: 'Partnerinin elini 1 dakika boyunca tut ve ona bakarak neler hissettiğini söyle.',
    chapter: 2,
    intensity: 'moderate',
    playerCount: 'both'
  },
  {
    id: 'q2_3',
    type: 'truth',
    content: 'Bende seni en çok çeken özellik nedir?',
    chapter: 2,
    intensity: 'moderate',
    playerCount: '2-player'
  },
  {
    id: 'q2_4',
    type: 'dare',
    content: 'Partnerine 5 farklı yerinden öpücük ver.',
    chapter: 2,
    intensity: 'moderate',
    playerCount: '2-player'
  },
  {
    id: 'q2_5',
    type: 'truth',
    content: 'Bu odadaki hangi kişiyle flört etmek isterdin?',
    chapter: 2,
    intensity: 'moderate',
    playerCount: '4-player'
  },

  // Chapter 3: Akşamdan Kalma - Intense questions
  {
    id: 'q3_1',
    type: 'truth',
    content: 'En büyük cinsel fantezin nedir?',
    chapter: 3,
    intensity: 'intense',
    playerCount: 'both'
  },
  {
    id: 'q3_2',
    type: 'dare',
    content: 'Partnerine 2 dakika boyunca tutkuyla sarıl.',
    chapter: 3,
    intensity: 'intense',
    playerCount: '2-player'
  },
  {
    id: 'q3_3',
    type: 'truth',
    content: 'Yatakta denemek istediğin ama henüz denemedim bir şey var mı?',
    chapter: 3,
    intensity: 'intense',
    playerCount: 'both'
  },
  {
    id: 'q3_4',
    type: 'dare',
    content: 'Gözlerin bağlı bir şekilde partnerini sadece dokunarak tanımaya çalış.',
    chapter: 3,
    intensity: 'intense',
    playerCount: '2-player'
  },
  {
    id: 'q3_5',
    type: 'truth',
    content: 'Bu gruptaki kim seni en çok tahrik ediyor?',
    chapter: 3,
    intensity: 'intense',
    playerCount: '4-player'
  },

  // Chapter 4: Partner Değişimi - Extreme questions (4-player only)
  {
    id: 'q4_1',
    type: 'truth',
    content: 'Partner değişimi hakkında ne düşünüyorsun?',
    chapter: 4,
    intensity: 'extreme',
    playerCount: '4-player'
  },
  {
    id: 'q4_2',
    type: 'dare',
    content: 'Diğer çiftin partneriyle 1 dakika boyunca dans et.',
    chapter: 4,
    intensity: 'extreme',
    playerCount: '4-player'
  },
  {
    id: 'q4_3',
    type: 'truth',
    content: 'Bu odadaki diğer kişilerden hangisiyle birlikte olmak isterdin?',
    chapter: 4,
    intensity: 'extreme',
    playerCount: '4-player'
  },
  {
    id: 'q4_4',
    type: 'dare',
    content: 'Çapraz çiftler halinde 30 saniye öpüşün.',
    chapter: 4,
    intensity: 'extreme',
    playerCount: '4-player'
  },
  {
    id: 'q4_5',
    type: 'truth',
    content: 'Grup deneyimi yaşamak istemiş miydin?',
    chapter: 4,
    intensity: 'extreme',
    playerCount: '4-player'
  }
];

// Chapter definitions
export const chapters: Chapter[] = [
  {
    id: 1,
    title: 'Geceye Başlarken',
    subtitle: 'Eğlenceli başlangıç',
    description: 'Eğlenceli sorular ve hafif cesaret gösterileriyle başlayın. Birbirinizi daha iyi tanıyın.',
    isLocked: false,
    isExclusive: false,
    questions: gameQuestions.filter(q => q.chapter === 1)
  },
  {
    id: 2,
    title: 'Isınma Turları',
    subtitle: 'Yakınlaşma zamanı',
    description: 'Daha kişisel sorular ve fiziksel temasla ısınmaya başlayın.',
    isLocked: false,
    isExclusive: false,
    questions: gameQuestions.filter(q => q.chapter === 2)
  },
  {
    id: 3,
    title: 'Akşamdan Kalma',
    subtitle: 'Yoğun deneyim',
    description: 'En tutkulu ve yoğun bölüm. Maksimum intimlik için hazır olun.',
    isLocked: false,
    isExclusive: false,
    questions: gameQuestions.filter(q => q.chapter === 3)
  },
  {
    id: 4,
    title: 'Partner Değişimi',
    subtitle: 'Sadece çiftler için',
    description: 'Sadece 4 oyuncu modu için. Partner değişimi ve keşif.',
    isLocked: true,
    isExclusive: true,
    requiredPlayerCount: '4-player',
    questions: gameQuestions.filter(q => q.chapter === 4)
  }
];

// Utility functions
export const getQuestionsByChapter = (chapterNumber: number, gameMode: '2-player' | '4-player'): Question[] => {
  return gameQuestions.filter(q => 
    q.chapter === chapterNumber && 
    (q.playerCount === 'both' || q.playerCount === gameMode)
  );
};

export const getRandomQuestion = (questions: Question[]): Question | null => {
  if (questions.length === 0) return null;
  return questions[Math.floor(Math.random() * questions.length)];
};

export const getChapterById = (id: number): Chapter | undefined => {
  return chapters.find(chapter => chapter.id === id);
};