import { GameCard } from "./GameCard";
import { Button } from "./ui/button";
import { Lock, Users, Heart, Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface ChapterCardProps {
  number: 1 | 2 | 3 | 4;
  title: string;
  description: string;
  isLocked?: boolean;
  isExclusive?: boolean;
  onPlay: () => void;
}

const chapterIcons = {
  1: Heart,
  2: Star,
  3: Users,
  4: Users
};

const chapterColors = {
  1: "border-chapter-1 text-chapter-1",
  2: "border-chapter-2 text-chapter-2", 
  3: "border-chapter-3 text-chapter-3",
  4: "border-chapter-4 text-chapter-4"
};

export function ChapterCard({ 
  number, 
  title, 
  description, 
  isLocked = false,
  isExclusive = false,
  onPlay 
}: ChapterCardProps) {
  const Icon = chapterIcons[number];
  
  return (
    <GameCard 
      variant="metallic" 
      className={cn(
        "relative overflow-hidden transition-all duration-300",
        !isLocked && "hover:scale-105 cursor-pointer",
        isLocked && "opacity-60"
      )}
      onClick={!isLocked ? onPlay : undefined}
    >
      {/* Chapter Number Badge */}
      <div className={cn(
        "absolute top-4 right-4 w-12 h-12 rounded-full border-2 flex items-center justify-center font-bold text-lg",
        chapterColors[number]
      )}>
        {number}
      </div>

      {/* Lock Icon for locked chapters */}
      {isLocked && (
        <div className="absolute top-4 left-4 text-muted-foreground">
          <Lock size={20} />
        </div>
      )}

      {/* Exclusive Badge */}
      {isExclusive && (
        <div className="absolute top-2 left-2 bg-gradient-primary text-primary-foreground text-xs px-2 py-1 rounded-full font-semibold">
          EXKLUSİF
        </div>
      )}

      <div className="flex items-start gap-4">
        <div className={cn(
          "p-3 rounded-xl border-2",
          chapterColors[number]
        )}>
          <Icon size={24} />
        </div>
        
        <div className="flex-1">
          <h3 className="text-xl font-bold text-foreground mb-2">{title}</h3>
          <p className="text-muted-foreground text-sm mb-4">{description}</p>
          
          {!isLocked ? (
            <Button variant="chapter" size="sm">
              Oyuna Başla
            </Button>
          ) : (
            <Button variant="ghost" size="sm" disabled>
              Kilitli
            </Button>
          )}
        </div>
      </div>
    </GameCard>
  );
}