import type { Metadata } from "next";
import { Outfit, Noto_Sans_Thai } from 'next/font/google';

import '@/app/globals.css';

import Header from "@/components/Header";

import { ThemeProvider } from '@/components/providers/ThemeProvider';
import { i18nConfig, Locale } from "@/i18n";
import { TranslationProvider } from "@/components/providers/TranslationProvider";

const outfit = Outfit({ subsets: ['latin'] });
const notoSansThai = Noto_Sans_Thai({ subsets: ['thai'] });

export const metadata: Metadata = {
  title: "Jakkarin's Resume",
  description: "Created By Jakkarin",
};

export async function generateStaticParams() {
  return i18nConfig.locales.map((locale: Locale) => ({ locale: locale }));
}

type Props = Readonly<{
  children: React.ReactNode;
  params: {
    locale: Locale;
  };
}>;

export default async function RootLayout({
  children,
  params
}: Props) {
  const { locale } = params;

  const fontClass =
    locale === 'th' ? notoSansThai.className : outfit.className;

  return (
    <html lang={params.locale} suppressHydrationWarning>
      <body className={fontClass}>
        <ThemeProvider attribute='class' defaultTheme='light'>
          <TranslationProvider locale={locale}>
            <Header />
            {children}
          </TranslationProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
