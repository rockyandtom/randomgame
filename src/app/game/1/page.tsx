"use client";

import { useRouter } from "next/navigation";
import Button from "@/components/Button";
import { useI18n } from "@/app/i18n/context";
import games from "@/app/config/games";
import Head from "next/head";

export default function Game1() {
  const router = useRouter();
  const { messages, locale } = useI18n();
  const game = games.find(g => g.id === 'game1');
  
  const refreshData = () => {
    router.refresh();
  }

  return (
    <>
      <Head>
        <title>Celeste - GameHub Platform</title>
      </Head>
      <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-[360px] sm:max-w-[640px] md:max-w-[768px] lg:max-w-[1200px] text-center space-y-8">
          <h1 className="text-2xl md:text-3xl font-bold tracking-wide">
            Celeste - GameHub Platform
          </h1>
          <div className="py-4">
            <p className="text-lg mb-4">
              {locale === 'zh' ? 
                "帮助 Madeline 在这个具有挑战性的平台游戏中完成她到达 Celeste 山顶的旅程。" : 
                "Help Madeline survive her journey to the top of Celeste Mountain in this challenging platformer."}
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
              src="https://definitelynotblocked.vercel.app/games/celeste/index.html" 
              className="w-full h-[600px]" 
              frameBorder="0" 
              allowFullScreen
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            />
          </div>
          <div className="bg-gray-800 p-6 rounded-lg text-left">
            <h2 className="text-xl font-semibold mb-4">{locale === 'zh' ? '游戏控制与提示' : 'Game Controls & Tips'}</h2>
            <ul className="space-y-2 list-disc list-inside">
              <li>{locale === 'zh' ? '使用箭头键控制角色移动' : 'Use arrow keys to control character movement'}</li>
              <li>{locale === 'zh' ? '按 Z 键跳跃，X 键冲刺' : 'Press Z to jump, X to dash'}</li>
              <li>{locale === 'zh' ? '收集草莓和水晶来完成挑战' : 'Collect strawberries and crystals to complete challenges'}</li>
              <li>{locale === 'zh' ? '尝试找到隐藏的路径和秘密' : 'Try to find hidden paths and secrets'}</li>
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
    </>
  );
} 