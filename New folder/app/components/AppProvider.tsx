"use client";

import AOSWrapper from "./AOSWrapper";
import { Inter, Fira_Code } from "next/font/google";

const inter = Inter({
  variable: "--font-inter",
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
      className={`${inter.variable} ${firaCode.variable} font-sans antialiased`}
    >
      <AOSWrapper>{children}</AOSWrapper>
    </body>
  );
}
