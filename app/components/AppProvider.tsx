"use client";

import { Geist, Geist_Mono, Fira_Code } from "next/font/google";
import AOSWrapper from "./AOSWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function AppProvider({ children }: { children: React.ReactNode }) {
  return (
    <body
      className={`${geistSans.variable} ${geistMono.variable} ${firaCode.variable} font-fira antialiased`}
    >
      <AOSWrapper>{children}</AOSWrapper>
    </body>
  );
}
