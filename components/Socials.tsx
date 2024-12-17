// 'use client';

import {
    RiGithubFill,
    RiFacebookCircleFill,
} from 'react-icons/ri';

import { 
    TbBrandLinkedin,
} from "react-icons/tb";

import Link from 'next/link';
import { cn } from '@/lib/utils';

interface SocialsProps {
    containerStyles: string;
    iconsStyles: string;
};

const icons = [
    // {
    //     path: '/',
    //     name: <RiYoutubeFill />,
    // },
    {
        path: 'https://linkedin.com/in/jakkarin-m',
        name: <TbBrandLinkedin />,
    },
    {
        path: 'https://github.com/MajorTom3K1M',
        name: <RiGithubFill />,
    },
    {
        path: 'https://www.facebook.com/meteor.invader',
        name: <RiFacebookCircleFill />,
    },
    // {
    //     path: '/',
    //     name: <RiInstagramFill />,
    // },
]

const Socials = ({ containerStyles, iconsStyles }: SocialsProps) => {
    return (
        <div className={`${containerStyles}`}>
            {icons.map((icon, index) => {
                return (
                    <Link 
                        href={icon.path} 
                        key={index}
                    >
                        <div className={`${iconsStyles}`}>
                            {icon.name}
                        </div>
                    </Link>
                    // <Link
                    //     href={icon.path}
                    //     key={index}
                    //     className={`
                    //         p-4 aspect-square flex items-center justify-center
                    //         bg-white dark:bg-gray-700 rounded-lg
                    //         // shadow-md hover:shadow-lg
                    //         // transform hover:-translate-y-1
                    //         // transition-all duration-300 group
                    //     `}
                    // >

                    // </Link>
                );
            })}
        </div>
    );
}

export default Socials;