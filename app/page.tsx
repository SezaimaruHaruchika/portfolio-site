"use client";

import { useState } from "react";
import { arrays } from "@/lib/arrays";
// 共通コンポーネント
import { SkillsCard } from "@/components/SkillsCard";
import { HeroSection } from "@/components/HeroSection";
import { ContactSection } from "@/components/ContactSection";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { ProfileImage } from "@/components/ProfileImage";
import { ProjectsSection } from "@/components/ProjectsSection";


export default function Home() {
  const [lang, setLang] = useState<"en" | "ja">("en");
  const t = arrays[lang];

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 p-6 md:p-12 font-sans selection:bg-cyan-500 selection:text-black relative">
      
      {/* 言語切り替えボタン */}
      <LanguageSwitcher lang={lang} setLang={setLang} />

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-6 gap-4 pt-16 sm:pt-6">
        
        {/* 1. ヒーロー */}
        <HeroSection
          role={t.role}
          greeting={t.greeting}
          name={t.name}
          description={t.description}
          subDescription={t.subDescription}
        />

        {/* 2. プロフィール画像 */}
        <ProfileImage />

        {/* 3. メインプロジェクト */}
        <ProjectsSection projects={t.projects} viewAppText={t.viewApp} />

        {/* 4. Skills (Mac Code Editor Style) */}
        <SkillsCard />

        {/* 5. Contact (GitHub & Instagram) */}
        <ContactSection
          title={t.connectTitle}
          description={t.connectDesc}
        />
      </div>
    </main>
  );
}