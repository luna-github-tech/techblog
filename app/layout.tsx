// app/layout.tsx
import "./globals.css";
import "@fortawesome/fontawesome-free/css/all.min.css"; // ✅ sin <link>
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Script from "next/script";
import AnalyticsProvider from "./providers/AnalyticsProvider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "TechBlog",
    template: "%s | TechBlog",
  },
  description: "Blog con Tailwind",
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "TechBlog",
    title: "TechBlog",
    description: "Blog con Tailwind",
    images: [{ url: "/images/og-cover.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tail-Blog",
    description: "Blog con Tailwind",
    images: ["/images/og-cover.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </head>
      <body className={`${poppins.className} bg-gray-50 text-slate-800`}>
        <Navbar />
        {children}
        <Footer />
        <AnalyticsProvider />
      </body>
    </html>
  );
}
