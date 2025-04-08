import React from 'react';

const BlurredBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden z-0">
      {/* 创建模糊的点光源效果 */}
      <div className="absolute w-[600px] h-[600px] rounded-full bg-white/5 blur-3xl top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute w-[400px] h-[400px] rounded-full bg-white/5 blur-3xl top-1/3 right-1/4 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute w-[500px] h-[500px] rounded-full bg-white/5 blur-3xl bottom-1/4 right-1/3 -translate-x-1/2 -translate-y-1/2"></div>
      
      {/* 添加纹理图层 */}
      <div className="absolute inset-0 bg-black/80 z-[1]"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,rgba(0,0,0,0.6)_100%)] z-[2]"></div>
      
      {/* 添加一些细微纹理线条 */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_70%)] opacity-50 z-[3]"></div>
      <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_1px,rgba(255,255,255,0.03)_1px,rgba(255,255,255,0.03)_2px)] opacity-20 z-[3]"></div>
    </div>
  );
};

export default BlurredBackground; 