import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jatin Patel | AI Product Leader & Startup Advisor",
  description: "Group Product Manager at Microsoft Teams with 20+ years building AI and communication platforms. Available for board positions, startup advisory, and product leadership roles.",
  keywords: [
    "AI product leader",
    "startup board member",
    "product executive",
    "Microsoft Teams",
    "AI strategy",
    "startup advisor",
    "board of directors",
    "product management",
    "technical product leader",
    "conversational AI",
    "enterprise software",
    "Seattle product leader",
    "GPM Microsoft"
  ],
  authors: [{ name: "Jatin Patel", url: "https://jatinpatel.ai" }],
  creator: "Jatin Patel",
  metadataBase: new URL('https://jatinpatel.ai'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Jatin Patel | AI Product Leader & Startup Advisor",
    description: "Group Product Manager at Microsoft Teams. 20+ years building AI platforms. Available for board positions and advisory roles.",
    url: 'https://jatinpatel.ai',
    siteName: 'Jatin Patel',
    locale: 'en_US',
    type: 'profile',
    images: [
      {
        url: '/images/profile.jpg',
        width: 256,
        height: 256,
        alt: 'Jatin Patel - AI Product Leader',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: "Jatin Patel | AI Product Leader & Startup Advisor",
    description: "Group Product Manager at Microsoft Teams. 20+ years building AI platforms. Available for board positions.",
    images: ['/images/profile.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'unob7Blr-tJYmkbM7E9XsXBeHeerCIU_knI9bTbqEB0',
    other: {
      'msvalidate.01': 'A69CBCDA93B7D69FDF24F6622C2140F5',
    },
  },
};

// JSON-LD structured data for SEO
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Jatin Patel',
  url: 'https://jatinpatel.ai',
  image: 'https://jatinpatel.ai/images/profile.jpg',
  jobTitle: 'Group Product Manager',
  worksFor: {
    '@type': 'Organization',
    name: 'Microsoft',
    url: 'https://microsoft.com',
  },
  description: 'AI Product Leader with 20+ years experience building communication and AI platforms. Available for board positions and startup advisory roles.',
  knowsAbout: [
    'Artificial Intelligence',
    'Product Management',
    'Microsoft Teams',
    'Conversational AI',
    'Enterprise Software',
    'Startup Advisory',
    'Board Governance',
  ],
  sameAs: [
    'https://linkedin.com/in/jatin1patel',
  ],
  alumniOf: [
    {
      '@type': 'Organization',
      name: 'Bell Labs',
    },
    {
      '@type': 'Organization',
      name: 'Microsoft',
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} antialiased`}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
