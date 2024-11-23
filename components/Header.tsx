"use client";
import React, { useState, useEffect } from 'react';

import Logo from '@/components/Logo';
import Nav from '@/components/Nav';
import ThemeToggler from '@/components/ThemeToggler';
import LanguageToggler from '@/components/LanguageToggler';

import { usePathname } from "next/navigation";
import MobileNav from './MobileNav';

const Header = () => {
    const [header, setHeader] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const scrollYPos = () => {
            window.scrollY > 50 ? setHeader(true) : setHeader(false);
        };
        window.addEventListener('scroll', scrollYPos);

        return () => window.removeEventListener('scroll', scrollYPos);
    });

    return (
        <header
            className={`${header
                    ? 'py-4 bg-white shadow-lg dark:bg-accent'
                    : 'py-6 dark:bg-transparent'
                } sticky top-0 z-30 transition-all ${(pathname === '/en' || pathname === '/th') && 'bg-[#fef9f5]'}`}
        >
            <div className='container mx-auto'>
                <div className='flex justify-between items-center'>
                    <Logo />
                    <div className='flex items-center gap-x-6'>
                        {/* nav */}
                        <Nav
                            containerStyles='hidden xl:flex gap-x-8 items-center'
                            linkStyles='relative hover:text-primary transition-all'
                            underlineStyles='absolute left-0 top-full h-[2px] bg-primary w-full'
                        />
                        <LanguageToggler />
                        <ThemeToggler />
                        <div className='xl:hidden'>
                            <MobileNav />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
};

export default Header;