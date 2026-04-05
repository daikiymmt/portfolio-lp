import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://daiki-yamamoto.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Daiki Yamamoto | Engineer",
  description:
    "エンジニア Daiki Yamamoto のポートフォリオサイト。Web開発、システム設計など幅広いサービスを提供しています。",
  keywords: [
    "エンジニア",
    "Web開発",
    "システム開発",
    "React",
    "Next.js",
    "TypeScript",
  ],
  openGraph: {
    title: "Daiki Yamamoto | Engineer",
    description:
      "エンジニア Daiki Yamamoto のポートフォリオサイト。Web開発、システム設計など幅広いサービスを提供しています。",
    url: siteUrl,
    siteName: "Daiki Yamamoto",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Daiki Yamamoto | Engineer",
    description:
      "エンジニア Daiki Yamamoto のポートフォリオサイト。Web開発、システム設計など幅広いサービスを提供しています。",
  },
  verification: {
    google: "Xt39zG-J2hls1GWg4ezXIAWwhItOPP0-AmgXS_j73hY",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${inter.className} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
