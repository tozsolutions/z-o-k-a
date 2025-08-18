import { useState } from "react";
import { ZokaLogo } from "@/components/ZokaLogo";
import { ChapterCard } from "@/components/ChapterCard";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Settings } from "lucide-react";
import { Chapter } from "@/types/game";

interface ChapterSelectionProps {
  gameMode: '2-player' | '4-player';
  onBack: () => void;
  onChapterSelect: (chapterNumber: number) => void;
}

export function ChapterSelection({ gameMode, onBack, onChapterSelect }: ChapterSelectionProps) {
  const chapters: Chapter[] = [
    {
      id: 1,
      title: "Geceye Başlarken",
      subtitle: "Buzları Kır",
      description: "Eğlenceli sorular ve hafif cesaret gösterileriyle başlayın. Birbirinizi daha iyi tanıyın.",
      isLocked: false,
      isExclusive: false,
      questions: []
    },
    {
      id: 2,
      title: "Isınma Turları", 
      subtitle: "Sıcaklığı Artır",
      description: "Daha kişisel sorular ve fiziksel temasla ısınmaya başlayın.",
      isLocked: false,
      isExclusive: false,
      questions: []
    },
    {
      id: 3,
      title: "Akşamdan Kalma",
      subtitle: "Yoğun Anlar",
      description: "En tutkulu ve yoğun bölüm. Maksimum intimlik için hazır olun.",
      isLocked: false,
      isExclusive: false,
      questions: []
    },
    {
      id: 4,
      title: "Partner Değişimi",
      subtitle: "Eksklüsif Deneyim", 
      description: "Sadece 4 oyuncu modu için. Partner değişimi ve keşif.",
      isLocked: gameMode === '2-player',
      isExclusive: true,
      requiredPlayerCount: '4-player',
      questions: []
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="flex items-center justify-between p-6 border-b border-border">
        <Button variant="ghost" onClick={onBack} className="flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" />
          Geri
        </Button>
        
        <div className="text-center">
          <ZokaLogo className="scale-50" />
        </div>
        
        <Button variant="ghost" className="flex items-center gap-2">
          <Settings className="w-4 h-4" />
          Ayarlar
        </Button>
      </div>

      {/* Game Mode Info */}
      <div className="p-6 border-b border-border bg-card/50">
        <div className="text-center">
          <h2 className="text-xl font-bold text-foreground">
            {gameMode === '2-player' ? '1 Çift Modu' : '2 Çift Modu'}
          </h2>
          <p className="text-muted-foreground">
            {gameMode === '2-player' ? '2 Oyuncu Bağlı' : '4 Oyuncu Bağlı'}
          </p>
        </div>
      </div>

      {/* Chapters */}
      <div className="p-6 space-y-6">
        <h3 className="text-2xl font-bold text-center text-foreground mb-8">
          Bölüm Seçin
        </h3>

        <div className="space-y-4 max-w-2xl mx-auto">
          {chapters.map((chapter) => (
            <ChapterCard
              key={chapter.id}
              number={chapter.id as 1 | 2 | 3 | 4}
              title={chapter.title}
              description={chapter.description}
              isLocked={chapter.isLocked}
              isExclusive={chapter.isExclusive}
              onPlay={() => onChapterSelect(chapter.id)}
            />
          ))}
        </div>

        {/* Custom Mode */}
        <div className="max-w-2xl mx-auto pt-8">
          <div className="text-center space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Özel Mod</h4>
            <p className="text-muted-foreground text-sm">
              Kendi sorularınızı ve cesaret gösterilerinizi ekleyin
            </p>
            <Button variant="outline">
              Özel Mod Oluştur
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}