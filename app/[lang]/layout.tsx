import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Geist, Geist_Mono } from "next/font/google";
import { lang as getLang } from "next/root-params";
import "../globals.css";

const locales = ["fr", "en"] as const;

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: LayoutProps<'/[lang]'>): Promise<Metadata> {
  const { lang } = await params;
  if (!locales.includes(lang as (typeof locales)[number])) notFound();

  const french = lang === "fr";
  return {
    title: french
      ? "Dario | Développeur web full-stack en Tunisie"
      : "Dario | Full-Stack Web Developer in Tunisia",
    description: french
      ? "Développeur web full-stack en Tunisie, je crée des sites web et boutiques e-commerce rapides, soignés et optimisés pour le référencement naturel (SEO)."
      : "Full-stack web developer in Tunisia building fast, polished websites and e-commerce stores with search engine optimization in mind.",
    keywords: french
      ? ["développeur web Tunisie", "développeur full-stack Tunisie", "création site web Tunisie", "développement web Tunis", "SEO Tunisie", "boutique e-commerce Tunisie"]
      : ["web developer Tunisia", "full-stack developer Tunisia", "web development Tunis", "website development Tunisia", "e-commerce Tunisia", "SEO Tunisia"],
    alternates: {
      canonical: `/${lang}`,
      languages: { fr: "/fr", en: "/en", "x-default": "/fr" },
    },
    openGraph: {
      type: "website",
      locale: french ? "fr_TN" : "en_US",
      title: french ? "Dario | Développeur web full-stack en Tunisie" : "Dario | Full-Stack Web Developer in Tunisia",
      description: french
        ? "Sites web, développement full-stack et e-commerce pour les entreprises en Tunisie."
        : "Websites, full-stack development, and e-commerce for businesses in Tunisia.",
    },
  };
}

export default async function LocaleLayout({ children }: LayoutProps<'/[lang]'>) {
  const locale = await getLang();
  return (
    <html
      lang={locale === "en" ? "en" : "fr"}
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
