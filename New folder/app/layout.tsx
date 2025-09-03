import type { Metadata } from "next";
import "./globals.css";
import AppProvider from "./components/AppProvider";


import { Cairo } from "next/font/google";


const cairo = Cairo({
  subsets: ["latin", "arabic"], // يفضل تخلي latin + arabic
  weight: ["400", "700"],
  display: "swap", // يخلي التحميل أنعم
});

export const metadata: Metadata = {
  title: "LIVE TECH",
  description: "",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={cairo.className}>
    
        <AppProvider>{children}</AppProvider>
     
    </html>
  );
}
