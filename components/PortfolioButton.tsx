// components/PortfolioButton.tsx
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { TablerIcon } from "@tabler/icons-react"

interface PortfolioButtonProps {
  href: string;
  children: React.ReactNode;
  icon?: TablerIcon | React.ElementType;
  textType?: "primary" | "secondary" | "outline"; // スタイル
  colorType?: "black" | "blue" | "pink"; // カラー
  target?: "_blank" | "_self";
}

export function PortfolioButton({ 
  href, 
  children, 
  icon: Icon, 
  textType = "primary", // デフォルトはprimary
  colorType = "black", // デフォルトはblack
  target = "_blank" 
}: PortfolioButtonProps) {

  const getStyle = () => {
    switch (textType) {
      case "primary":
        // 白背景・黒文字（目立つボタン）
        return "bg-white text-black hover:bg-neutral-200"
      case "secondary":
        // 薄いグレー背景（GitHubボタンなど）
        return "bg-neutral-100 text-black hover:bg-neutral-200"
      default:
        return ""
    }
  }

  const getColorStyle = () => {
    switch (colorType) {
      case "black":
        return "text-black"
      case "blue":
        return "text-blue-600"
      case "pink":
        return "text-pink-600"
      default:
        return "text-black"
    }
  }

  const getVariant = () => {
    if (textType === "outline") return "outline"
    if (textType === "secondary") return "secondary"
    return "default"
  }

  return (
    <Button 
      asChild 
      variant={getVariant()} 
      className={`px-6 transition-all ${getStyle()} ${getColorStyle()}`}
    >
      <Link href={href} target={target}>
        {Icon && <Icon className="mr-2 h-5 w-5" stroke={1.5} />}
        {children}
      </Link>
    </Button>
  )
}