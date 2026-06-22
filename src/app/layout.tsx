import "./globals.css";
import type { Metadata, Viewport } from "next";
import Script from "next/script";
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
    default: "Монтаж кондиционеров в СПб — Климат 365",
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
        alt: `${siteConfig.name} — монтаж кондиционеров`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  verification: {
    yandex: "929d730e5ee6ee05",
    google: "ZgrCs40Mg_X2c4koC02RHwTt1yC0tdKodXvuxZZ4g2M",
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
  themeColor: "#1a56db",
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
        <Script id="yandex-metrika" strategy="afterInteractive">{`
          (function(m,e,t,r,i,k,a){
            m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
            m[i].l=1*new Date();
            for(var j=0;j<document.scripts.length;j++){if(document.scripts[j].src===r){return;}}
            k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
          })(window,document,'script','https://mc.yandex.ru/metrika/tag.js?id=110061961','ym');
          ym(110061961,'init',{ssr:true,webvisor:true,clickmap:true,ecommerce:"dataLayer",referrer:document.referrer,url:location.href,accurateTrackBounce:true,trackLinks:true});
        `}</Script>
        <noscript>
          <div>
            <img src="https://mc.yandex.ru/watch/110061961" style={{position:"absolute",left:"-9999px"}} alt="" />
          </div>
        </noscript>
      </body>
    </html>
  );
}
