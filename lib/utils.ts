import { i18nConfig, Locale } from "@/i18n";
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const getLocaleFromPath = (path: string) => {
  const segments = path.split('/');
  const locale = segments[1] as ("en" | "th"); // Assuming the first segment is the locale
  return i18nConfig.locales.includes(locale) ? locale : i18nConfig.defaultLocale;
};

export function withLocalePath(fullPath: string, path: string) {
  const locale = getLocaleFromPath(fullPath);
  return `/${locale}${path === '/' ? '' : path}`;
};