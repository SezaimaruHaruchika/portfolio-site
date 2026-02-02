"use client";

import {
  IconX,
  IconMinus,
  IconArrowsDiagonal
} from "@tabler/icons-react";

export const SkillsCard = () => {
  return (
    <div className="md:col-span-3 bg-[#282c34] border border-[#1e222a] rounded-xl overflow-hidden shadow-2xl font-mono text-sm leading-relaxed relative">
      
      {/* ウィンドウヘッダー（ここをホバーすると記号が出ます） */}
      <div className="bg-[#21252b] px-4 py-2 flex items-center gap-2 border-b border-[#181a1f] group">
        
        {/* 信号機ボタンコンテナ */}
        <div className="flex gap-2">
          {/* Close (Red) */}
          <div className="w-3 h-3 rounded-full bg-[#ff5f56] flex items-center justify-center border border-[#e0443e]">
            <IconX size={8} className="text-[#4d0000] opacity-0 group-hover:opacity-100 transition-opacity duration-200" stroke={3} />
          </div>
          {/* Minimize (Yellow) */}
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e] flex items-center justify-center border border-[#dea123]">
            <IconMinus size={8} className="text-[#5c3a00] opacity-0 group-hover:opacity-100 transition-opacity duration-200" stroke={4} />
          </div>
          {/* Zoom (Green) */}
          <div className="w-3 h-3 rounded-full bg-[#27c93f] flex items-center justify-center border border-[#1aab29]">
            <IconArrowsDiagonal size={8} className="text-[#004d00] opacity-0 group-hover:opacity-100 transition-opacity duration-200" stroke={3} />
          </div>
        </div>
        
        {/* ファイル名表示 */}
        <div className="flex-1 text-center pr-12">
          <span className="text-[#abb2bf] opacity-60 text-xs font-sans">Skills.js</span>
        </div>
      </div>

      {/* コード表示エリア（One Dark Pro配色） */}
      <div className="p-5 text-[#abb2bf] text-xs sm:text-sm overflow-x-auto">
        <pre>
          <code>
            <span className="text-[#c678dd]">const</span>{' '}
            <span className="text-[#e5c07b]">skills</span>{' '}
            <span className="text-[#56b6c2]">=</span>{' '}
            <span className="text-[#abb2bf]">{'{'}</span>
            {'\n'}
            {'  '}
            <span className="text-[#e06c75]">platform</span>
            <span className="text-[#abb2bf]">:</span>{' '}
            <span className="text-[#98c379]">'MacBook Pro'</span>
            <span className="text-[#abb2bf]">,</span>
            {'\n'}
            {'  '}
            <span className="text-[#e06c75]">lang</span>
            <span className="text-[#abb2bf]">:</span>{' '}
            <span className="text-[#98c379]">['Javascript/Typescript', 'Python', 'SQL', 'Java', 'PHP']</span>
            <span className="text-[#abb2bf]">,</span>
            {'\n'}
            {'  '}
            <span className="text-[#e06c75]">Frameworks</span>
            <span className="text-[#abb2bf]">:</span>{' '}
            <span className="text-[#98c379]">['React', 'Next.js', 'Node.js', 'Express.js', 'Hono', 'Django', 'ServletJSP']</span>
            <span className="text-[#abb2bf]  pr-5">,</span>
            {'\n'}
            {'  '}
            <span className="text-[#e06c75]">likes</span>
            <span className="text-[#abb2bf]">:</span>{' '}
            <span className="text-[#98c379]">['Database', 'Web']</span>
            {'\n'}
            <span className="text-[#abb2bf]">{'}'}</span>
            <span className="text-[#abb2bf]">;</span>
          </code>
        </pre>
      </div>
    </div>
  );
};
