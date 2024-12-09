'use client';
import Link from 'next/link';
import { useTranslation } from '@/components/providers/TranslationProvider';
import { Button } from '@/components/ui/button';
import { Locale } from '@/i18n';

// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

// import swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

// components
import ProjectCard from '@/components/ProjectCard';

type Props = {
    locale: Locale;
};

const Work = ({ locale }: Props) => {
    const { translation } = useTranslation();

    const projectData = [
        {
            image: '/work/discord-clone.png',
            category: ['next js', 'go', 'webrtc', 'websocket', 'tailwind css', 'postgresql', 'fullstack'],
            name: 'Discord Clone',
            description: translation('projects.discord-clone.description'),
            link: '/',
            github: 'https://github.com/MajorTom3K1M/discord-clone',
        },
        {
            image: '/work/web-cgp.png',
            category: ['next js', 'c#', 'tailwind css', 'monogame'],
            name: 'WebCGP KMITL',
            description: translation('projects.webcgp-kmitl.description'),
            link: '/',
            github: 'https://github.com/MajorTom3K1M/WebCGP-KMITL',
        },
        {
            image: '/work/wasm-chat.png',
            category: ['rust', 'yew.rs', 'pubnub'],
            name: 'Wasm Chat Application',
            description: translation('projects.wasm-chat-application.description'),
            link: '/',
            github: 'https://github.com/MajorTom3K1M/wasm-chat',
        },
        {
            image: '/work/line-bot.gif',
            category: ['node js', 'line api', 'firebase'],
            name: 'Rosé Chatbot',
            description: translation('projects.rose-chatbot.description'),
            link: '/',
            github: 'https://github.com/MajorTom3K1M/rose-chat-bot',
        },
        {
            image: '/work/dfs-bfs.png',
            category: ['node js', 'jquery', 'express', 'handlebars'],
            name: 'DFS-BFS Application',
            description: translation('projects.dfs-bfs-application.description'),
            link: '/',
            github: 'https://github.com/MajorTom3K1M/dfs-bfs-application',
        }
    ];

    return (
        <section className='relative mb-12 xl:mb-48'>
            <div className='container mx-auto gap-x-8 xl:flex'>
                {/* text */}
                <div className='max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start'>
                    <h2 className='section-title mb-4'>{translation("work.lastestProjects")}</h2>
                    <p className='subtitle mb-8'>
                        {translation('work.description')}
                    </p>
                    <Link href='/projects'>
                        <Button>{translation("work.allProjects")}</Button>
                    </Link>
                </div>
                {/* slider */}
                {/* <div className='xl:max-w-[1000px] xl:absolute right-0 top-0'> */}
                <div className='xl:max-w-[1000px]'>
                    <Swiper
                        className='h-[520px]'
                        slidesPerView={1}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                            },
                        }}
                        spaceBetween={30}
                        modules={[Pagination]}
                        pagination={{ clickable: true }}
                    >
                        {/* show only the first 4 projects for the slides */}
                        {projectData.slice(0, 4).map((project, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <ProjectCard project={project} isHoverAction={true} />
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </div>
            </div>
        </section>
    );
}

export default Work;