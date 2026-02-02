"use client";

import { Badge } from "@/components/ui/badge";
import Image from "next/image";

type HeroSectionProps = {
  role: string;
  greeting: string;
  name: string;
  description: string;
  subDescription: string;
};

export const HeroSection = ({ role, greeting, name, description, subDescription }: HeroSectionProps) => {
  return (
    <div className="md:col-span-4 bg-neutral-900/50 border border-neutral-800 rounded-3xl p-8 flex flex-col justify-center space-y-4 hover:border-neutral-700 transition-colors">
      <Badge
        variant="outline"
        className="w-fit text-cyan-400 border-cyan-400/30"
      >
        {role}
      </Badge>
      <div className="flex items-center gap-6 w-full">
        <div className="flex-1">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            {greeting} <span className="text-cyan-400">{name}</span>.
          </h1>
          <p className="text-neutral-400 text-lg leading-relaxed mt-4">
            {description} <br />
            <span className="text-white font-semibold">{subDescription}</span>
          </p>
        </div>
        {/* スマホ表示でのみ表示されるプロフィール画像 */}
        <div className="md:hidden flex-shrink-0">
          <div className="relative w-24 h-24 rounded-full bg-neutral-800 flex items-center justify-center text-3xl border-2 border-neutral-700 overflow-hidden">
          <Image
            src="/profile.png"
            alt="Profile Image"
            layout="fill"
            objectFit="cover"
          />
          </div>
        </div>
      </div>
    </div>
  );
};
