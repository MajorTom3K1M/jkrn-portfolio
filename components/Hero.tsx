import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Download, Send } from 'lucide-react';
import {
    RiBriefcase4Fill,
    RiTeamFill,
    RiTodoFill,
    RiArrowDownSLine
} from 'react-icons/ri'

import ProfileImg from '@/components/ProfileImg';
import Socials from '@/components/Socials';
import Badge from '@/components/Badge';

import { Locale } from '@/i18n';
import { getTranslation } from '@/lib/i18n/getTranslation';

type Props = {
    locale: Locale;
};

const Hero = async ({ locale }: Props) => {
    const translation = await getTranslation(locale);

    return (
        <section className='py-12 xl:py-24 min-h-[92vh] md:min-h-[87vh] xl:pt-28 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none'>
            <div className='container mx-auto'>
                {/* xl:flex */}
                <div className='flex flex-col-reverse xl:flex-row justify-between gap-x-8 gap-y-8 xl:gap-y-0'>
                    {/* text */}
                    <div className='flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left'>
                        <div className='text-xl uppercase font-semibold mb-4 text-primary tracking-[4px]'>
                            {/* Web Developer */}
                            FullStack Developer
                        </div>
                        <h1 className='h1 mb-4'>{translation('hero.name')}</h1>
                        <p className='subtitle max-w-[490px] mx-auto xl:mx-0'>Brief description with insights into myself, my vocational journey, and what I engage in professionally.</p>
                        {/* buttons */}
                        <div className='flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12'>
                            <Link href="/contact">
                                <Button className='gap-x-2'>
                                    Contact me <Send size={18} />
                                </Button>
                            </Link>
                            <Button variant='secondary' className='gap-x-2'>
                                Download CV <Download size={18} />
                            </Button>
                        </div>
                        {/* socials */}
                        <Socials
                            containerStyles='flex gap-x-6 mx-auto xl:mx-0'
                            iconsStyles='text-foreground text-[22px] hover:text-primary transition-all'
                        />
                    </div>
                    {/* image */}
                    <div className='flex relative justify-center'>
                        {/* <div className='flex-row xl:flex relative'> */}
                        {/* badge 1 */}
                        <Badge
                            containerStyles='absolute top-[24%] -left-[2%] sm:left-[21%] md:left-[27%] lg:left-[18%] xl:-left-[5rem]'
                            icon={<RiBriefcase4Fill />}
                            endCountNum={3}
                            badgeText='Years Of Experience'
                        />
                        {/* badge 2 */}
                        <Badge
                            containerStyles='absolute top-[80%] left-[5%] sm:left-[26%] md:left-[30%] lg:left-[24.5%] xl:-left-[1rem]'
                            icon={<RiTodoFill />}
                            endCountNum={6}
                            endCountText='k'
                            badgeText='Finished Projects'
                        />
                        {/* badge 3 */}
                        <Badge
                            containerStyles='absolute top-[46%] -right-[5%] sm:right-[21%] md:right-[26%] lg:right-[18%] xl:-right-20'
                            icon={<RiTeamFill />}
                            endCountNum={9}
                            endCountText='k'
                            badgeText='Happy Clients'
                        />
                        {/* image */}
                        <ProfileImg
                            containerStyles='w-[200px] h-[200px] lg:w-[462px] lg:h-[462px] relative'
                            imageStyles='object-cover rounded-full shadow-custom_shadow justify-self-center border-4 border-black animate-profile_animate'
                            imgSrc='/hero/profile.jpg'
                        />
                    </div>

                </div>
                <div className='hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce'>
                    <RiArrowDownSLine className='text-3xl text-primary' />
                </div>
            </div>
        </section>
    );
};

export default Hero;