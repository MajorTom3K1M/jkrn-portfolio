import About from '@/components/About';
import Cta from '@/components/Cta';
import Hero from '@/components/Hero';
import Work from '@/components/Work';
import Footer from '@/components/Footer';
import Skills from '@/components/Skills';

import { Locale } from '@/i18n';

type Props = {
    params: {
        locale: Locale;
    };
};

export default async function Home({ params: { locale } }: Props) {
    return (
        <main>
            <Hero locale={locale} />
            <About />
            <Skills locale={locale} />
            {/* <Services /> */}
            <Work locale={locale} />
            <Cta locale={locale} />
            <Footer />
        </main>
    )
}