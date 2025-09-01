import { Question } from '@/types/game';

export const questionsDatabase: Question[] = [
  // Bölüm 1: Geceye Başlarken (Buzları Kır)
  {
    id: 'ch1_q1',
    type: 'truth',
    content: 'Bugüne kadar aldığın en çılgın karar neydi?',
    chapter: 1,
    intensity: 'mild',
    playerCount: 'both'
  },
  {
    id: 'ch1_q2',
    type: 'dare',
    content: 'Karşındaki kişinin elini tut ve gözlerinin içine 30 saniye bak.',
    chapter: 1,
    intensity: 'mild',
    playerCount: 'both'
  },
  {
    id: 'ch1_q3',
    type: 'truth',
    content: 'İlk öpücüğünü nerede, kimle yaşadın?',
    chapter: 1,
    intensity: 'mild',
    playerCount: 'both'
  },
  {
    id: 'ch1_q4',
    type: 'dare',
    content: 'Grup halinde sevdiğin bir şarkıyı birlikte söyleyin.',
    chapter: 1,
    intensity: 'mild',
    playerCount: 'both'
  },
  {
    id: 'ch1_q5',
    type: 'truth',
    content: 'En büyük korkunun nedir?',
    chapter: 1,
    intensity: 'mild',
    playerCount: 'both'
  },
  {
    id: 'ch1_q6',
    type: 'dare',
    content: 'En seksi dans hareketini sergileyip diğerlerine öğret.',
    chapter: 1,
    intensity: 'moderate',
    playerCount: 'both'
  },
  {
    id: 'ch1_q7',
    type: 'truth',
    content: 'Hiç kimseye söylemediğin gizli bir yeteneğin var mı?',
    chapter: 1,
    intensity: 'mild',
    playerCount: 'both'
  },
  {
    id: 'ch1_q8',
    type: 'dare',
    content: 'Gözlerin kapalıyken partnerinin yüzüne dokunup tanıyıp tanıyamayacağını test et.',
    chapter: 1,
    intensity: 'moderate',
    playerCount: 'both'
  },

  // Bölüm 2: Isınma Turları (Sıcaklığı Artır)
  {
    id: 'ch2_q1',
    type: 'truth',
    content: 'En çok hangi vücut bölgesine dokunulmasını seviyorsun?',
    chapter: 2,
    intensity: 'moderate',
    playerCount: 'both'
  },
  {
    id: 'ch2_q2',
    type: 'dare',
    content: 'Partnerinin kulağına en seksi sesinden bir şey fısırla.',
    chapter: 2,
    intensity: 'moderate',
    playerCount: 'both'
  },
  {
    id: 'ch2_q3',
    type: 'truth',
    content: 'Yatak odasında en sevdiğin pozisyon hangisi?',
    chapter: 2,
    intensity: 'moderate',
    playerCount: 'both'
  },
  {
    id: 'ch2_q4',
    type: 'dare',
    content: 'Partnerinin boynunu 10 saniye öp.',
    chapter: 2,
    intensity: 'moderate',
    playerCount: 'both'
  },
  {
    id: 'ch2_q5',
    type: 'truth',
    content: 'Seni en çok azdıran şey nedir?',
    chapter: 2,
    intensity: 'moderate',
    playerCount: 'both'
  },
  {
    id: 'ch2_q6',
    type: 'dare',
    content: 'Partnerinin üzerindeki bir kıyafet parçasını çıkar.',
    chapter: 2,
    intensity: 'intense',
    playerCount: 'both'
  },
  {
    id: 'ch2_q7',
    type: 'truth',
    content: 'En çok merak ettiğin cinsel fantezin nedir?',
    chapter: 2,
    intensity: 'moderate',
    playerCount: 'both'
  },
  {
    id: 'ch2_q8',
    type: 'dare',
    content: 'Partnerine 30 saniyelik sensüel bir masaj yap.',
    chapter: 2,
    intensity: 'intense',
    playerCount: 'both'
  },

  // Bölüm 3: Akşamdan Kalma (Yoğun Anlar)
  {
    id: 'ch3_q1',
    type: 'truth',
    content: 'Şu anda beni en çok neyin azdırdığını düşünüyorsun?',
    chapter: 3,
    intensity: 'intense',
    playerCount: 'both'
  },
  {
    id: 'ch3_q2',
    type: 'dare',
    content: 'Partnerini tutkuyla 60 saniye öp.',
    chapter: 3,
    intensity: 'intense',
    playerCount: 'both'
  },
  {
    id: 'ch3_q3',
    type: 'truth',
    content: 'Benimle yapmak istediğin en çılgın şey nedir?',
    chapter: 3,
    intensity: 'intense',
    playerCount: 'both'
  },
  {
    id: 'ch3_q4',
    type: 'dare',
    content: 'Partnerinin en hassas noktasını bul ve nazikçe okşa.',
    chapter: 3,
    intensity: 'extreme',
    playerCount: 'both'
  },
  {
    id: 'ch3_q5',
    type: 'truth',
    content: 'Bu gece benimle yapmak istediğin ilk şey nedir?',
    chapter: 3,
    intensity: 'intense',
    playerCount: 'both'
  },
  {
    id: 'ch3_q6',
    type: 'dare',
    content: 'Gözlerini kapat ve partnerinin seni nereye dokunduğunu hisset.',
    chapter: 3,
    intensity: 'extreme',
    playerCount: 'both'
  },
  {
    id: 'ch3_q7',
    type: 'truth',
    content: 'En derin gizli arzun nedir?',
    chapter: 3,
    intensity: 'extreme',
    playerCount: 'both'
  },
  {
    id: 'ch3_q8',
    type: 'dare',
    content: '2 dakika boyunca partnerinle göz teması kurarak nefes alış verişini senkronize et.',
    chapter: 3,
    intensity: 'intense',
    playerCount: 'both'
  },

  // Bölüm 4: Partner Değişimi (4 oyuncu için)
  {
    id: 'ch4_q1',
    type: 'truth',
    content: 'Bu grupta kimle flört etmeyi en çok merak ediyorsun?',
    chapter: 4,
    intensity: 'intense',
    playerCount: '4-player'
  },
  {
    id: 'ch4_q2',
    type: 'dare',
    content: 'Solundaki kişiyi tutkuyla öp.',
    chapter: 4,
    intensity: 'intense',
    playerCount: '4-player'
  },
  {
    id: 'ch4_q3',
    type: 'truth',
    content: 'Partner değişimi konusunda nasıl hissediyorsun?',
    chapter: 4,
    intensity: 'intense',
    playerCount: '4-player'
  },
  {
    id: 'ch4_q4',
    type: 'dare',
    content: 'Partnerinin dışında biriyle 30 saniye dans et.',
    chapter: 4,
    intensity: 'intense',
    playerCount: '4-player'
  },
  {
    id: 'ch4_q5',
    type: 'truth',
    content: 'Bu gece partner değişimi yapmaya ne kadar açıksın (1-10)?',
    chapter: 4,
    intensity: 'extreme',
    playerCount: '4-player'
  },
  {
    id: 'ch4_q6',
    type: 'dare',
    content: 'Grubun belirlediği iki kişi 2 dakika özel bir odada konuşsun.',
    chapter: 4,
    intensity: 'extreme',
    playerCount: '4-player'
  },
  {
    id: 'ch4_q7',
    type: 'truth',
    content: 'Bu gruptan biriyle gizli bir anın oldu mu?',
    chapter: 4,
    intensity: 'extreme',
    playerCount: '4-player'
  },
  {
    id: 'ch4_q8',
    type: 'dare',
    content: 'Herkesi şaşırtacak bir şey yapacak cesarete sahip misin?',
    chapter: 4,
    intensity: 'extreme',
    playerCount: '4-player'
  }
];

export function getQuestionsForChapter(chapter: number, playerCount: '2-player' | '4-player'): Question[] {
  return questionsDatabase.filter(q => 
    q.chapter === chapter && 
    (q.playerCount === 'both' || q.playerCount === playerCount)
  );
}

export function getRandomQuestion(chapter: number, playerCount: '2-player' | '4-player'): Question | null {
  const questions = getQuestionsForChapter(chapter, playerCount);
  if (questions.length === 0) return null;
  
  return questions[Math.floor(Math.random() * questions.length)];
}