import { PortfolioButton } from "@/components/PortfolioButton";
import { IconExternalLink, IconBrandGithub } from "@tabler/icons-react";
import Image from "next/image";

// 型定義を少し緩くして、翻訳データからの入力を受け入れやすくします
export interface ProjectData {
  title: string;
  description: string;
  status?: string;
  tags: string[];
  demoUrl?: string;
  repoUrl?: string;
  imageUrl?: string;
}

// 追加のPropsとしてボタンのテキストを受け取ります
interface ProjectCardProps extends ProjectData {
  viewAppText: string;
}

export function ProjectCard({
  title,
  description,
  status = "Active",
  tags,
  demoUrl,
  repoUrl,
  viewAppText,
  imageUrl,
}: ProjectCardProps) {
  return (
    <div className="bg-neutral-900 border border-neutral-800 rounded-3xl overflow-hidden hover:border-neutral-600 transition-all group h-full">
      <div className="p-8 grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs text-green-500 font-mono">
              {status}
            </span>
          </div>
          
          <h2 className="text-3xl font-bold">{title}</h2>
          <p className="text-neutral-400 leading-relaxed">
            {description}
          </p>
          
          <div className="flex flex-wrap gap-2 text-xs font-mono text-neutral-500">
            {tags.map((tag, index) => (
              <span key={index} className="bg-neutral-800 px-2 py-1 rounded">
                {tag}
              </span>
            ))}
          </div>

          <div className="pt-4 flex gap-4">
            {/* demoUrlがある場合のみボタンを表示 */}
            {demoUrl && demoUrl !== "" && (
              <PortfolioButton
                href={demoUrl}
                icon={IconExternalLink}
                textType="primary"
              >
                {viewAppText}
              </PortfolioButton>
            )}

            {repoUrl && (
              <PortfolioButton
                href={repoUrl}
                icon={IconBrandGithub}
                textType="secondary"
              >
                GitHub
              </PortfolioButton>
            )}
          </div>
        </div>
        
        <div className="relative h-64 bg-neutral-800 rounded-xl overflow-hidden border border-neutral-700 group-hover:scale-[1.02] transition-transform duration-500">
          {demoUrl ? (
            <a href={demoUrl} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
              {imageUrl ? (
                <Image
                  src={imageUrl}
                  alt={`Screenshot of ${title}`}
                  layout="fill"
                  objectFit="cover"
                />
              ) : (
                <div className="flex items-center justify-center h-full">
                  <span className="text-neutral-600 font-mono text-sm">
                    [ Screenshot: {title} ]
                  </span>
                </div>
              )}
            </a>
          ) : (
            <div className="flex items-center justify-center h-full">
              {imageUrl ? (
                <Image
                  src={imageUrl}
                  alt={`Screenshot of ${title}`}
                  layout="fill"
                  objectFit="cover"
                />
              ) : (
                <span className="text-neutral-600 font-mono text-sm">
                  [ Screenshot: {title} ]
                </span>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}