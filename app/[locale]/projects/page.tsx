'use client';
import React, { useRef, useState } from 'react';
import { Tabs, TabsList, TabsContent, TabsTrigger } from '@/components/ui/tabs';
import ProjectCard from '@/components/ProjectCard';
import { ChevronDown } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';

type FilterType = "all" | "react" | "next" | "fullstack" | "vue" | "angular" | "node" | "python"

const additionalFilters = [
    'node js'
]

type Project = {
    image: string;
    category: string[];
    name: string;
    description: string;
    link?: string;
    github: string;
};

const Projects = () => {
    const projectData: Project[] = [
        {
            image: '/work/discord-clone.png',
            category: ['next js', 'go', 'webrtc', 'websocket', 'tailwind css', 'postgresql', 'fullstack'],
            name: 'Discord Clone',
            description:
                'A Discord clone replicating core features—account creation, server/channel management, and real-time communication.',
            link: '/',
            github: 'https://github.com/MajorTom3K1M/discord-clone',
        },
        {
            image: '/work/web-cgp.png',
            category: ['next js', 'c#', 'tailwind css', 'monogame'],
            name: 'WebCGP KMITL',
            description:
                'A web-based game launcher that hosts a collection of games, allowing users to play them directly in their web browser.',
            link: '/',
            github: 'https://github.com/MajorTom3K1M/WebCGP-KMITL',
        },
        {
            image: '/work/wasm-chat.png',
            category: ['rust', 'yew.rs', 'pubnub'],
            name: 'Wasm Chat Application',
            description:
                'A lightweight chat application that allows users to join chats, send messages, and receive messages in real time.',
            link: '/',
            github: 'https://github.com/MajorTom3K1M/wasm-chat',
        },
        {
            image: '/work/line-bot.gif',
            category: ['node js', 'line api', 'firebase'],
            name: 'Rosé Chatbot',
            description:
                'Rosé Chatbot is a LINE chatbot acted as an interface between a merchant and their customer.',
            link: '/',
            github: 'https://github.com/MajorTom3K1M/rose-chat-bot',
        },
        {
            image: '/work/dfs-bfs.png',
            category: ['node js', 'jquery', 'express', 'handlebars'],
            name: 'DFS-BFS Application',
            description:
                'A web application that visualizes the Depth-First Search and Breadth-First Search algorithms through maze.',
            link: '/',
            github: 'https://github.com/MajorTom3K1M/dfs-bfs-application',
        },
        {
            image: '/work/node-chat-app-3.png',
            category: ['node js', 'socket io', 'express', 'html5', 'css', 'jquery', 'fullstack'],
            name: 'Node.js Chat Application',
            description:
                'Node.js Chat Application is a simple node.js chat application powered by Express and Socket.io.',
            link: '/',
            github: 'https://github.com/MajorTom3K1M/node-chat-app',
        },
        {
            image: '/work/mern-cart.png',
            category: ['node js', 'react js', 'express', 'mongodb', 'fullstack'],
            name: 'MERN Cart Application',
            description:
                'MERNCart is a expressCart clone but recreate with MERN Stack it provide a fully functional shopping cart.',
            link: '/',
            github: 'https://github.com/MajorTom3K1M/MERN-Cart',
        },
        {
            image: '/work/draxit.png',
            category: ['react js', 'node js', 'express', 'socket io', 'mongodb', 'fullstack'],
            name: 'Draxit - A Dixit-Inspired Web Game',
            description:
                'A real-time multiplayer web game inspired by Dixit board game, with a creative twist where players draw the cards themselves.',
            link: '/',
            github: 'https://github.com/MajorTom3K1M/draxit',
        },
        {
            image: '/work/phaser3-webrtc.png',
            category: ['node js', 'socket io', 'phaser3', 'javascript', 'fullstack'],
            name: 'Phaser3 WebRTC',
            description:
                'A proof of concept for a simple 2D multiplayer game with real-time video and audio communication.',
            link: '/',
            github: 'https://github.com/MajorTom3K1M/phaser3-webrtc-poc',
        },
        {
            image: '/work/ray-caster.gif',
            category: ['rust', 'open gl'],
            name: 'Rust Raycaster',
            description:
                'A simple raycaster implemented in Rust to explore Rust programming and OpenGL graphics.',
            github: 'https://github.com/MajorTom3K1M/rust-raycaster',
        },
        {
            image: '/work/swap-book.png',
            category: ['node js', 'postgresql', 'backend'],
            name: 'SwapBook API',
            description:
                'Swapbook is a mobile application that make you can easily trade a book with another people.',
            github: 'https://github.com/MajorTom3K1M/swapbook-api',
        },
        {
            image: '/work/cv-post-estimation.png',
            category: ['machine learning', 'python', 'opencv', 'svm', 'sklearn'],
            name: 'Human Pose Estimation Using SVM',
            description:
                'Human pose estimation that seeks a method that minimizes the use of Deep Learning approaches.',
            github: 'https://github.com/MajorTom3K1M/CV_PoseEstimation',
        },
        {
            image: '/work/epics-game-auto-claim.png',
            category: ['react js', 'node js', 'express', 'epic games api', 'fullstack'],
            name: 'Epic Games Auto Claim',
            description:
                'Epic Games Auto Claim is a web application that automatically claims free games from the Epic Games Store on your behalf.',
            github: 'https://github.com/MajorTom3K1M/epic-games-auto-claim',
        },
        {
            image: '/work/avalon.png',
            category: ['react js', 'node js', 'socket io', 'fullstack'],
            name: 'Web Avalon Game',
            description:
                'A web-based implementation of the social deduction game Avalon, built with React and Socket.io for real-time interactions.',
            github: 'https://github.com/MajorTom3K1M/avalon',
        },
        {
            image: '/work/cgp-kmitl.png',
            category: ['c#', 'monogame'],
            name: 'CGP KMITL',
            description:
                'Collection of game project for learning Computer Game Programming.',
            github: 'https://github.com/MajorTom3K1M/CGP-KMITL',
        },
        {
            image: '/work/webrtc-sfu.png',
            category: ['go', 'webrtc', 'backend'],
            name: 'WebRTC-SFU Server',
            description:
                'Go implementation of a Selective Forwarding Unit (SFU) for WebRTC. The server uses WebSocket for signaling and the Gin framework for HTTP handling.',
            github: 'https://github.com/MajorTom3K1M/go-webrtc-sfu',
        },
        {
            image: '/work/vonder-games.png',
            category: ['c#', 'unity'],
            name: 'Vonder Unity Assignment',
            description:
                'This project is a 2D platformer developed using Unity\'s 2D Universal Render Pipeline and the new Input System. The game features a variety of mechanics, interactive elements.',
            github: 'https://github.com/MajorTom3K1M/vonder-unity-assignment',
        },
    ];

    const uniqueCategories: string[] = [
        'all projects',
        'fullstack',
        'backend',
        'next js',
        // ...Array.from(new Set(projectData.map((item) => item.category))),
    ];

    const tabRef = useRef(null);
    const [categories, setCategories] = useState(uniqueCategories);
    const [category, setCategory] = useState('all projects');

    const isAdditionalFilter = additionalFilters.some(filter => filter === category);

    const currentDropdownLabel = isAdditionalFilter
        ? additionalFilters.find(filter => filter === category) ?? "More"
        : "More";

    const filteredProjects = projectData.filter((project) => {
        console.log({ category })
        return category === 'all projects'
            ? project
            : project.category.includes(category);
    });
    console.log({ filteredProjects })

    return (
        <section className='min-h-screen pt-12'>
            <div className='container mx-auto'>
                <h2 className='section-title mb-8 xl:mb-16 text-center mx-auto'>
                    My Projects
                </h2>
                {/* tabs */}
                {/* <Tabs defaultValue={category} className='mb-24 xl:mb-48'> */}
                <Tabs value={category} onValueChange={setCategory} className='mb-24 xl:mb-48'>
                    <TabsList className='w-full grid h-full md:grid-cols-5 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none'>
                        {categories.map((category, index) => (
                            <TabsTrigger
                                key={index}
                                value={category}
                                // onClick={() => setCategory(category)}
                                className={cn(
                                    'capitalize w-[162px] md:w-auto',
                                    // isAdditionalFilter ? 'data-[state=active]:bg-transparent data-[state=active]:text-black dark:data-[state=active]:text-white' : ''
                                    isAdditionalFilter ? ' data-[state=active]:bg-transparent data-[state=active]:text-inherit data-[state=active]:shadow-none' : ''
                                )}
                            >
                                {category}
                            </TabsTrigger>
                        ))}

                        <DropdownMenu>
                            <DropdownMenuTrigger
                                className={cn(
                                    "flex justify-center align-middle justify-items-center capitalize w-[162px] md:w-auto gap-x-1",
                                    "inline-flex items-center justify-center whitespace-nowrap rounded-full px-3 py-1.5 text-base font-medium ring-offset-background transition-all focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-sm h-[48px]",
                                    isAdditionalFilter && "bg-primary text-white"
                                )}
                            >
                                {currentDropdownLabel} <ChevronDown className="self-center h-4 w-4" />
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="w-[200px]">
                                <DropdownMenuRadioGroup value={category} onValueChange={(selectedCategory) => setCategory(selectedCategory)}>
                                    {additionalFilters.map((filter) => (
                                        <DropdownMenuRadioItem
                                            key={filter}
                                            value={filter}
                                            // className="capitalize cursor-pointer"
                                            className={cn(
                                                "capitalize cursor-pointer rounded-full py-3 transition-all duration-200 ease-in-out",
                                            )}
                                        >
                                            {filter}
                                        </DropdownMenuRadioItem>
                                    ))}
                                </DropdownMenuRadioGroup>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </TabsList>
                    {/* tabs content */}
                    <div className='text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4'>
                        {filteredProjects.map((project, index) => {
                            return (
                                <TabsContent value={category} key={index}>
                                    <ProjectCard project={project} />
                                </TabsContent>
                            );
                        })}
                    </div>
                </Tabs>
            </div>
        </section>
    );
}

export default Projects;