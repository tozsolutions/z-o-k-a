import { cn } from "@/lib/utils";

interface ZokaLogoProps {
  className?: string;
  animated?: boolean;
}

export function ZokaLogo({ className, animated = false }: ZokaLogoProps) {
  return (
    <div className={cn(
      "relative select-none",
      animated && "animate-glow-pulse",
      className
    )}>
      <h1 className="text-6xl md:text-8xl font-black tracking-wider text-transparent bg-gradient-primary bg-clip-text">
        ZOKA
      </h1>
      <div className="absolute inset-0 text-6xl md:text-8xl font-black tracking-wider text-primary/20 blur-sm">
        ZOKA
      </div>
    </div>
  );
}