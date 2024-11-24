import React, { createContext, useContext } from 'react';

const LocaleContext = createContext<string | undefined>(undefined);

export const LocaleProvider = ({ locale, children }: { locale: string; children: React.ReactNode }) => {
    return <LocaleContext.Provider value={locale}>{children}</LocaleContext.Provider>;
};

export const useLocale = () => {
    const context = useContext(LocaleContext);
    if (!context) {
        throw new Error('useLocale must be used within a LocaleProvider');
    }
    return context;
};
