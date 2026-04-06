import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cv } from "@/cv.config";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${cv.name} — ${cv.title}`,
  description: cv.summary,
  openGraph: {
    title: `${cv.name} — ${cv.title}`,
    description: cv.summary,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
