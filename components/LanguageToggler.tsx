import { motion } from "framer-motion";
import { useState } from "react";
import { cn } from '@/lib/utils';
import { usePathname, useRouter } from 'next/navigation';
import { i18nConfig, Locale } from "@/i18n";

const redirectToLocale = (locale: Locale, pathname: string) => {
    if (!pathname) {
        return '/';
    }

    const pathParts = pathname.split('/');

    pathParts[1] = locale;

    const url = pathParts.join('/');

    return url;
};

const LanguageToggler = () => {
    const router = useRouter();
    const pathname = usePathname();

    const getLocaleFromPath = (path: string) => {
        const segments = path.split('/');
        const locale = segments[1] as ("en" | "th"); // Assuming the first segment is the locale
        return i18nConfig.locales.includes(locale) ? locale : i18nConfig.defaultLocale;
    };

    const [language, setLanguage] = useState(() => getLocaleFromPath(pathname));

    const toggleLanguage = (lang: "en" | "th") => {
        setLanguage(lang);

        const redirectUrl = redirectToLocale(lang, pathname)
        router.push(redirectUrl);
        router.refresh();
    };

    return (
        <div className="flex bg-muted justify-center items-center align-middle h-8 border border-input rounded-full">
            <motion.div
                className="absolute h-6 w-[66px] rounded-full bg-background shadow-sm"
                animate={{ x: language === "en" ? -30 : 30 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
            />
            <button
                onClick={() => toggleLanguage("en")}
                className={cn(
                    "relative flex h-6 w-[66px] items-center justify-center gap-1 rounded-full text-xs font-medium transition-colors",
                    language === "en"
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                )}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 60 30"
                    width="16"
                    height="8"
                    className="rounded-sm"
                >
                    <clipPath id="s">
                        <path d="M0,0 v30 h60 v-30 z" />
                    </clipPath>
                    <clipPath id="t">
                        <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z" />
                    </clipPath>
                    <g clipPath="url(#s)">
                        <path d="M0,0 v30 h60 v-30 z" fill="#012169" />
                        <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
                        <path
                            d="M0,0 L60,30 M60,0 L0,30"
                            clipPath="url(#t)"
                            stroke="#C8102E"
                            strokeWidth="4"
                        />
                        <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10" />
                        <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
                    </g>
                </svg>
                <span className="relative z-10">EN</span>
            </button>
            <button
                onClick={() => toggleLanguage("th")}
                className={cn(
                    "relative flex h-6 w-[66px] items-center justify-center gap-1 rounded-full text-xs font-medium transition-colors",
                    language === "th"
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                )}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 900 600"
                    width="16"
                    height="10.67"
                    className="rounded-sm"
                >
                    <rect width="900" height="600" fill="#A51931" />
                    <rect y="100" width="900" height="400" fill="#F4F5F8" />
                    <rect y="200" width="900" height="200" fill="#2D2A4A" />
                </svg>
                <span className="relative z-10">TH</span>
            </button>
        </div>
    );
}

export default LanguageToggler;