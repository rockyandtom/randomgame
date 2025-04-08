"use client";

import { useRouter } from "next/navigation";
import Button from "@/components/Button";
import { useI18n } from "@/app/i18n/context";
import games from "@/app/config/games";

export default function Game1() {
  const router = useRouter();
  const { messages, locale } = useI18n();
  const game = games.find(g => g.id === 'game1');
  
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
        <div className="w-full overflow-hidden rounded-lg shadow-lg border border-gray-700">
          <iframe 
            src="https://tracert.alipay.com/cross.html" 
            className="w-full h-[600px]" 
            frameBorder="0" 
            allowFullScreen
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          />
        </div>
        <div className="bg-gray-800 p-6 rounded-lg text-left">
          <h2 className="text-xl font-semibold mb-4">{locale === 'zh' ? '游戏控制与提示' : 'Game Controls & Tips'}</h2>
          <ul className="space-y-2 list-disc list-inside">
            <li>{locale === 'zh' ? '使用鼠标点击控制游戏' : 'Use mouse clicks to control the game'}</li>
            <li>{locale === 'zh' ? '完成每一关的挑战来解锁下一关' : 'Complete each level challenge to unlock the next one'}</li>
            <li>{locale === 'zh' ? '注意时间限制和游戏规则' : 'Pay attention to time limits and game rules'}</li>
            <li>{locale === 'zh' ? '尝试获得最高分数' : 'Try to achieve the highest score possible'}</li>
          </ul>
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