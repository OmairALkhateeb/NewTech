import type { Metadata } from "next";
import "./globals.css";
import AppProvider from "./components/AppProvider";

import { Cairo } from "next/font/google";

const cairo = Cairo({
  subsets: ["arabic"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "New-Tech",
  description: "",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
     
        <AppProvider>{children}</AppProvider>
    
    </html>
  );
}
