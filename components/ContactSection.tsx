"use client";

import { PortfolioButton } from "@/components/PortfolioButton";
import { IconBrandGithub, IconBrandInstagram } from "@tabler/icons-react";

type ContactSectionProps = {
  title: string;
  description: string;
};

export const ContactSection = ({ title, description }: ContactSectionProps) => {
  return (
    <div className="md:col-span-3 bg-gradient-to-br from-indigo-900/20 to-purple-900/20 border border-neutral-800 rounded-3xl p-8 flex flex-col justify-center items-center text-center">
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="text-neutral-400 mb-6">{description}</p>

      <div className="flex gap-4">
        <PortfolioButton
          href="https://github.com/SezaimaruHaruchika"
          icon={IconBrandGithub}
          textType="secondary"
          colorType="black"
        >
          GitHub
        </PortfolioButton>

        <PortfolioButton
          href="https://www.instagram.com/haru.se_git/"
          icon={IconBrandInstagram}
          textType="secondary"
          colorType="pink"
        >
          Instagram
        </PortfolioButton>
      </div>
    </div>
  );
};
