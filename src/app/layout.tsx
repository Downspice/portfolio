import type { Metadata } from "next";
import { Bebas_Neue, Space_Grotesk, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas-neue",
  subsets: ["latin"],
  weight: ["400"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Joseph Awer | Software Developer",
  description: "Portfolio of Joseph Awer, a Software Developer specializing in Mobile (Expo) and Full-Stack Web Systems (Next.js, Python).",
  keywords: ["Joseph Awer", "Software Developer", "Mobile Developer", "Full Stack", "Expo", "Next.js", "React Native", "Ghana", "Portfolio"],
  openGraph: {
    title: "Joseph Awer | Software Developer",
    description: "Building performant, scalable applications with Expo, Next.js, and Python.",
    url: "https://josephawer.com",
    siteName: "Joseph Awer Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Joseph Awer | Software Developer",
    description: "Mobile & Full-Stack Systems Specialist.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${bebasNeue.variable} ${spaceGrotesk.variable} ${ibmPlexMono.variable} antialiased grain-overlay`}
      >
        <Navbar />
        <div className="pt-16">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
