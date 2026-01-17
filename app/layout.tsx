import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jatin Patel | AI Product Leader",
  description: "Building products that transform how teams work",
  metadataBase: new URL('https://jatinpatel.ai'),
  openGraph: {
    title: "Jatin Patel | AI Product Leader",
    description: "Building products that transform how teams work",
    url: 'https://jatinpatel.ai',
    siteName: 'Jatin Patel',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Jatin Patel | AI Product Leader",
    description: "Building products that transform how teams work",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
