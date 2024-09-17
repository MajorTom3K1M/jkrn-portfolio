import type { Metadata } from "next";
import { Outfit } from 'next/font/google';
import './globals.css';

import Header from "@/components/Header";
 
import { ThemeProvider } from '@/components/providers/ThemeProvider';

const outfit = Outfit({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Jakkarin's Resume",
  description: "Created By Jakkarin",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={outfit.className}>
        <ThemeProvider attribute='class' defaultTheme='light'>
          <Header />
          {children}
          {/* <Footer /> */}
        </ThemeProvider>
      </body>
    </html>
  );
}
