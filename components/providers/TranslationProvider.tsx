'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Locale } from '@/i18n';
import { loadTranslation, TranslationObject } from '@/lib/i18n/loadTranslation';

// Define types for context
interface TranslationContextType {
    translation: (key: string) => string;
}

// Create a context with a default value
const TranslationContext = createContext<TranslationContextType>({
    translation: (key) => key, // Default fallback: return the key
});

// Provider component
export const TranslationProvider = ({
    locale,
    children,
}: {
    locale: Locale;
    children: React.ReactNode;
}) => {
    const [translations, setTranslations] = useState<TranslationObject | null>(
        null
    );

    useEffect(() => {
        // Preload translations when the locale changes
        const fetchTranslations = async () => {
            const loadedTranslations = await loadTranslation(locale);
            setTranslations(loadedTranslations);
        };

        fetchTranslations();
    }, [locale]);

    const translation = (key: string): string => {
        if (!translations) return key;

        // Split the key into parts and traverse the object
        const keys = key.split('.');
        let result: any = translations;
        for (const part of keys) {
            result = result?.[part];
            if (result === undefined) return key; // Fallback to key if translation is not found
        }
        return typeof result === 'string' ? result : key;
    };

    return (
        <TranslationContext.Provider value={{ translation }}>
            {children}
        </TranslationContext.Provider>
    );
};

// Hook to access translation context
export const useTranslation = () => useContext(TranslationContext);
