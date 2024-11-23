import type { Metadata } from "next";
import { Outfit } from 'next/font/google';

import '@/app/globals.css';

import Header from "@/components/Header";

import { ThemeProvider } from '@/components/providers/ThemeProvider';
import { Locale } from "@/i18n";

const outfit = Outfit({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Jakkarin's Resume",
  description: "Created By Jakkarin",
};

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
  return (
    <html lang={params.locale} suppressHydrationWarning>
      <body className={outfit.className}>
        <ThemeProvider attribute='class' defaultTheme='light'>
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
