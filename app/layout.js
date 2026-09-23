import { Orbitron, Inter } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/theme/ThemeProvider";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/footer/Footer";
import SmoothScroll from "@/components/animations/SmoothScroll";
import { SITE_URL } from "@/lib/site";

const display = Orbitron({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700", "800", "900"],
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const SITE_URL_FALLBACK = "https://maxl.com";

export const metadata = {
  metadataBase: new URL(SITE_URL || SITE_URL_FALLBACK),
  title: {
    default: "MAXL — Technology × Creativity",
    template: "%s — MAXL",
  },
  description: "MAXL builds technology, AI-powered products, and creative digital experiences for what comes next.",
  keywords: ["MAXL", "Manji", "ChurchCast", "AI", "creative technology", "animation", "software"],
  authors: [{ name: "MAXL" }],
  creator: "MAXL",
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/logo/icon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/logo/icon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "MAXL",
    title: "MAXL — Technology × Creativity",
    description: "MAXL builds technology, AI-powered products, and creative digital experiences for what comes next.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "MAXL — Technology × Creativity" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "MAXL — Technology × Creativity",
    description: "MAXL builds technology, AI-powered products, and creative digital experiences for what comes next.",
    images: ["/og-image.png"],
  },
  manifest: "/manifest.webmanifest",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F7F9FC" },
    { media: "(prefers-color-scheme: dark)", color: "#050816" },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${display.variable} ${body.variable}`}>
      <body className="flex min-h-screen flex-col antialiased">
        <ThemeProvider>
          <SmoothScroll />
          <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[80] focus:rounded-full focus:bg-[#155eef] focus:px-4 focus:py-2 focus:text-white">
            Skip to content
          </a>
          <Navbar />
          <main id="main" className="flex-1">
            {children}
          </main>
          <Footer />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Organization",
                name: "MAXL",
                url: SITE_URL,
                slogan: "Technology × Creativity",
                description: "MAXL builds technology, AI-powered products, and creative digital experiences for what comes next.",
                logo: `${SITE_URL}/logo/maxl-logo.png`,
              }),
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
