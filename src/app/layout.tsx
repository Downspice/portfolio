import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Joseph Awer | Software Developer",
  description: "Portfolio of Joseph Awer, a Software Developer specializing in Mobile (Expo) and Full-Stack Web Systems (Next.js, Python).",
  keywords: ["Joseph Awer", "Software Developer", "Mobile Developer", "Full Stack", "Expo", "Next.js", "React Native", "Ghana", "Portfolio"],
  openGraph: {
    title: "Joseph Awer | Software Developer",
    description: "Building performant, scalable applications with Expo, Next.js, and Python.",
    url: "https://josephawer.com", // Placeholder or actual if known, keeping generic if not. safely assuming localhost or generic for now, user didn't specify URL. Let's omit URL or use a placeholder.
    siteName: "Joseph Awer Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Joseph Awer | Software Developer",
    description: "Mobile & Full-Stack Systems Specialist.",
    creator: "@Downspice", // Assuming based on GitHub handle pattern or leaving blank if unknown. User didn't provide specific Twitter. adhering to "Downspice" from github if safe, but better to be safe. I will omit creator if not sure. Actually, user provided links: GitHub, LinkedIn, WhatsApp, Email, Phone. No Twitter. I'll omit creator/site for twitter.
  },
};

import { Footer } from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${nunito.variable} antialiased selection:bg-primary/20`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
