import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { I18nProvider } from "./i18n/context";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Random Game Platform",
  description: "Take me to play a random game",
  manifest: "/manifest.json",
  themeColor: "#2F80ED",
  appleWebApp: {
    title: "Random Game Platform",
    statusBarStyle: "black-translucent",
    capable: true
  },
  openGraph: {
    title: "Random Game Platform",
    description: "Take me to play a random game",
    type: "website",
    locale: "en_US",
    url: "https://random-game-platform.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Random Game Platform",
    description: "Take me to play a random game",
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <I18nProvider>
          <LanguageSwitcher />
          {children}
        </I18nProvider>
      </body>
    </html>
  );
}
