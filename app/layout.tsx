import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VPSPro - Virtual Private Server Hosting",
  description: "High-performance VPS hosting solutions with 99.9% uptime guarantee. Perfect for developers and businesses.",
  keywords: ["VPS", "Virtual Private Server", "Hosting", "Cloud Server", "Dedicated Server"],
  authors: [{ name: "VPSPro Team" }],
  openGraph: {
    title: "VPSPro - Virtual Private Server Hosting",
    description: "High-performance VPS hosting solutions with 99.9% uptime guarantee. Perfect for developers and businesses.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "VPSPro - Virtual Private Server Hosting",
    description: "High-performance VPS hosting solutions with 99.9% uptime guarantee. Perfect for developers and businesses.",
  },
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
