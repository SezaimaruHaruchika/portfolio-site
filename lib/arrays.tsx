// lib/translations.ts

export const arrays = {
  en: {
    role: "High School Dev 🇯🇵",
    greeting: "Hi, I'm",
    name: "Haruchika Sezaimaru",
    description: "I am a high school student starting out in software development.",
    subDescription: "I have created this website to show projects that I created in the past.",
    
    // English`
    projects: [
      {
        title: "My Portfolio Site",
        description: "The site you are currently viewing. It is built using Next.js and Tailwind CSS. It being a static setup makes it require no backend therefore it loads so quickly.",
        status: "Now Viewing",
        tags: ["Next.js", "React", "Tailwind CSS"],
        demoUrl: "",
        repoUrl: "https://github.com/SezaimaruHaruchika/portfolio-site",
        imageUrl: "/portfolio.png",
      },
      {
        title: "Google Calendar CSV Gen",
        description: "An application for creating schedules. Allows for exporting said schedules and timetables into a CSV file and downloading it therefore enabling the syncing of schedules and timetables for all students and team members by importing it into their own calendars. ",
        status: "Now Available",
        tags: ["Next.js", "React.js", "Tailwind CSS"],
        demoUrl: "https://calendar-csv-app-ruddy.vercel.app/",
        repoUrl: "https://github.com/SezaimaruHaruchika/calendar-csv-app",
        imageUrl: "/csv-calendar.png",
      },
    ],

    viewApp: "View App",
    skillsTitle: "Skills",
    connectTitle: "SNS / Contact",
    connectDesc: "I'm always open to feedback and networking opportunities. Please feel free to contact me anytime. ",
  },
  
  ja: {
    role: "高校生 / エンジニア 🇯🇵",
    greeting: "Hi, I'm",
    name: "瀬在丸 東慶",
    description: "現在高校生のエンジニアです。",
    subDescription: "過去に作ったプロジェクトをこちらで紹介しています。",

    // ▼▼▼ 日本語 ▼▼▼
    projects: [
      {
        title: "ポートフォリオサイト",
        description: "今見ているこのサイトです。Next.jsとTailwind CSSで構築しています。バックエンド不要の静的構成で、爆速で表示されます。",
        status: "表示中",
        tags: ["Next.js", "React", "Tailwind CSS"],
        demoUrl: "",
        repoUrl: "https://github.com/SezaimaruHaruchika/portfolio-site",
        imageUrl: "/portfolio.png",
      },
      {
        title: "Googleカレンダー CSVファイル作成アプリ",
        description: "「時間割」を授業コマごとでの入力を実現。CSVファイルを共有することで、クラス・チーム全員の予定を一瞬で同期することができます。",
        status: "公開中",
        tags: ["Next.js", "React.js", "Tailwind CSS"],
        demoUrl: "https://calendar-csv-app-ruddy.vercel.app/",
        repoUrl: "https://github.com/SezaimaruHaruchika/calendar-csv-app",
        imageUrl: "/csv-calendar.png",
      },
    ],

    viewApp: "アプリを見る",
    skillsTitle: "技術スタック",
    connectTitle: "SNS / 連絡先",
    connectDesc: "フィードバックや交流の機会を探しています！DMはお気軽にどうぞ。",
  }
};