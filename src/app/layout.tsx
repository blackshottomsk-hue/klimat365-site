import "./globals.css";
import type { Metadata, Viewport } from "next";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import ModalRoots from "../components/layout/ModalRoots";
import CookieBanner from "../components/layout/CookieBanner";
import StickyCTA from "../components/layout/StickyCTA";
import { siteConfig } from "../lib/siteConfig";
import { localBusinessSchema, organizationSchema } from "../lib/seo";

const systemFont =
  "font-sans [font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,'Segoe_UI',sans-serif]";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: {
    default: "Установка заборов под ключ — ZABORIO",
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.domain,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: "website",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} — заборы под ключ`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#1F3D2B",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body className={systemFont}>
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }}
        />
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema()) }}
        />
        <Header />
        <div className="min-h-[70vh]">{children}</div>
        <Footer />
        <StickyCTA />
        <ModalRoots />
        <CookieBanner />
      </body>
    </html>
  );
}
