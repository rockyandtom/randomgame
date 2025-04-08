"use client";

import { useRouter } from "next/navigation";
import Button from "@/components/Button";
import { useI18n } from "@/app/i18n/context";
import games from "@/app/config/games";

export default function Game2() {
  const router = useRouter();
  const { messages, locale } = useI18n();
  const game = games.find(g => g.id === 'game2');
  
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-[360px] sm:max-w-[640px] md:max-w-[768px] lg:max-w-[1200px] text-center space-y-8">
        <h1 className="text-2xl md:text-3xl font-bold tracking-wide">
          {game?.name[locale as 'en' | 'zh']}
        </h1>
        <div className="py-4">
          <p className="text-lg mb-4">
            {game?.description?.[locale as 'en' | 'zh'] || messages.game.placeholder}
          </p>
          <div className="flex flex-wrap justify-center gap-2 my-4">
            {game?.tags?.map(tag => (
              <span key={tag} className="px-3 py-1 bg-gray-800 rounded-full text-sm">
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-4">
            <span className="inline-block px-3 py-1 bg-primary rounded-full text-sm">
              {game?.difficulty}
            </span>
          </div>
        </div>
        <Button 
          onClick={() => router.push("/")}
          className="mx-auto"
        >
          {messages.game.backButton}
        </Button>
      </div>
    </div>
  );
} 