"use client";

import { useRouter } from "next/navigation";
import Button from "@/components/Button";
import { useI18n } from "./i18n/context";
import games from "./config/games";
import BlurredBackground from "@/components/BlurredBackground";

export default function Home() {
  const router = useRouter();
  const { messages } = useI18n();
  
  const handleRandomGame = () => {
    const randomGame = games[Math.floor(Math.random() * games.length)];
    router.push(randomGame.path);
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center p-4 relative overflow-hidden">
      {/* 使用模糊背景组件 */}
      <BlurredBackground />
      
      <div className="w-full max-w-[360px] sm:max-w-[640px] md:max-w-[768px] lg:max-w-[1200px] text-center space-y-12 z-10 relative">
        <h1 className="textured-title text-4xl md:text-6xl lg:text-7xl font-bold tracking-wide">
          {messages.homepage.title}
        </h1>
        
        <Button 
          onClick={handleRandomGame}
          className="mx-auto uppercase tracking-widest text-sm"
        >
          {messages.homepage.button}
        </Button>
      </div>
    </div>
  );
}
