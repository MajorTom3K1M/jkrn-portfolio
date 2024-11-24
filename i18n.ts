export const i18nConfig = {
    defaultLocale: 'en',
    locales: ['en', 'th'],
} as const;

export type Locale = (typeof i18nConfig)['locales'][number];
