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

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : null) ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : null) ||
  "https://awer-joseph-kweku.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Joseph Kweku Awer | Software Developer",
  description: "Portfolio of Joseph Kweku Awer, a Software Developer specializing in Mobile (Expo) and Full-Stack Web Systems (Next.js, Python).",
  keywords: ["Joseph Awer", "Joseph Kweku Awer", "Software Developer", "Mobile Developer", "Full Stack", "Expo", "Next.js", "React Native", "Ghana", "Portfolio"],
  icons: {
    icon: [
      { url: "/icon.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    title: "Joseph Kweku Awer | Software Developer",
    description: "Building performant, scalable applications with Expo, Next.js, and Python.",
    url: siteUrl,
    siteName: "Joseph Kweku Awer Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Joseph Kweku Awer | Software Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Joseph Kweku Awer | Software Developer",
    description: "Mobile & Full-Stack Systems Specialist.",
    images: ["/opengraph-image.png"],
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
