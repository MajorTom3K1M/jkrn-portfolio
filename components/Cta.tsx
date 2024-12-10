import { Button } from '@/components/ui/button';
import { Locale } from '@/i18n';
import { getTranslation } from '@/lib/i18n/getTranslation';
import Link from 'next/link';

type Props = {
    locale: Locale;
};

const Cta = async ({ locale }: Props) => {
    const translation = await getTranslation(locale);

    return (
        <section className='py-24 bg-tertiary dark:bg-secondary/40'>
            <div className='container mx-auto'>
                <div className='flex flex-col items-center'>
                    <h2 className='h2 max-w-xl text-center mb-8'>
                        {translation("cta.text")}
                        {/* Eager to bring my skills and dedication to your company's next big project. */}
                    </h2>
                    <Link href={`${locale}/contact`}>
                        <Button>{translation("cta.contact")}</Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default Cta;