import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface GameCardProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "metallic" | "glow";
  onClick?: () => void;
}

export function GameCard({ 
  children, 
  className, 
  variant = "default",
  onClick 
}: GameCardProps) {
  const variants = {
    default: "bg-card border-border shadow-card",
    metallic: "bg-gradient-metallic border-metallic-light shadow-metallic",
    glow: "bg-card border-primary/30 shadow-glow"
  };

  return (
    <div 
      className={cn(
        "rounded-xl border p-6 transition-all duration-300",
        variants[variant],
        onClick && "cursor-pointer hover:scale-105 hover:shadow-lg",
        "animate-fade-in",
        className
      )}
      onClick={onClick}
    >
      {children}
    </div>
  );
}