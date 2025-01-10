import "@/styles/globals.css";

import { Inter, DM_Sans } from "next/font/google";
import { type Metadata } from "next";
import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: "Create T3 App",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans" });

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${dmSans.variable} relative antialiased`}
    >
      <body className="min-h-screen">
        {/* Glow from Top */}
        <div className="absolute -top-[50%] left-[50%] h-[50vh] w-[50vw] -translate-x-[50%] rounded-full bg-accent blur-[300px]" />
        {/* Noise overlay */}
        <div className="pointer-events-none absolute inset-0 bg-[url('/assets/noise.png')] opacity-25 mix-blend-overlay" />
        <div className="relative z-10">
          <Navbar />
          {children}
          <Toaster />
        </div>
      </body>
    </html>
  );
}
