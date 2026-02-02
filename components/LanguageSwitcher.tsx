"use client";

import { Button } from "@/components/ui/button";
import { IconWorld } from "@tabler/icons-react";

type LanguageSwitcherProps = {
  lang: "en" | "ja";
  setLang: (lang: "en" | "ja") => void;
};

export const LanguageSwitcher = ({ lang, setLang }: LanguageSwitcherProps) => {
  return (
    <div className="absolute top-6 right-6 z-50">
      <Button
        variant="outline"
        onClick={() => setLang(lang === "en" ? "ja" : "en")}
        className="bg-neutral-900 border-neutral-700 text-neutral-20 rounded-full px-6 transition-all"
      >
        <IconWorld className="mr-2 h-4 w-4" stroke={1.5} />
        {lang === "en" ? "🇯🇵 日本語" : "🇺🇸 English"}
      </Button>
    </div>
  );
};
