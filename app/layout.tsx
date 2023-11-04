import type { Metadata } from "next";
import { Barlow_Semi_Condensed } from "next/font/google";
import "./globals.css";

const barlow = Barlow_Semi_Condensed({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-barlow",
  weight: ["600", "700"],
});

export const metadata: Metadata = {
  title: "firdausthedev | rock-paper-scissors",
  description:
    "A rock-paper-scissors app built with Nextjs by @firdausthedev using frontendmentor challenge",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${barlow.className}`}>{children}</body>
    </html>
  );
}
