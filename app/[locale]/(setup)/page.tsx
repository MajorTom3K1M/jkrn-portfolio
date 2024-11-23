import About from '@/components/About';
import Cta from '@/components/Cta';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Work from '@/components/Work';
import Footer from '@/components/Footer';
import Skills from '@/components/Skills';

export default function Home() {
    return (
        <main>
            <Hero />
            <About />
            <Skills />
            {/* <Services /> */}
            <Work />
            <Cta />
            <Footer />
        </main>
    )
}