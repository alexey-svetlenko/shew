import type { Metadata, Viewport } from "next";
import { Inter, Lora } from "next/font/google";
import "./globals.css";

const lora = Lora({
  subsets: ["cyrillic", "latin"],
  variable: "--font-lora",
  display: "swap",
});

const inter = Inter({
  subsets: ["cyrillic", "latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Вера — пространство для ваших вопросов",
  description:
    "Я не дам вам готовых ответов. Но могу создать пространство, в котором вы услышите собственные. Коучинг по стандартам ICF.",
  openGraph: {
    title: "Вера — пространство для ваших вопросов",
    description:
      "Я не дам вам готовых ответов. Но могу создать пространство, в котором вы услышите собственные.",
    type: "website",
    locale: "ru_RU",
  },
};

export const viewport: Viewport = {
  themeColor: "#faf8f4",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${lora.variable} ${inter.variable}`}>
      <body className="bg-paper font-sans text-ink antialiased">{children}</body>
    </html>
  );
}
