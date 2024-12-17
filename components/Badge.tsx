"use client";

import CountUp from 'react-countup';

interface BadgeProps {
    containerStyles: string;
    icon: React.ReactNode;
    endCountNum: number;
    endCountText?: string;
    badgeText: string;
};

const Badge = ({
    containerStyles,
    icon,
    endCountNum,
    endCountText,
    badgeText 
}: BadgeProps) => {
    return (
        <div className={`badge ${containerStyles}`}>
            <div className='text-sm lg:text-3xl text-primary'>{icon}</div>
            <div className='flex items-center gap-x-2'>
                <div className='flex text-lg lg:text-4xl leading-none font-bold text-primary'>
                    <CountUp className='justify-self-center self-center' end={endCountNum} delay={1} duration={4} />
                    <span className='text-center justify-self-center self-center text-sm lg:text-2xl'>{endCountText}</span>
                </div>
                <div className='max-w-[70px] leading-none text-[10px] lg:text-[15px] font-medium text-black'>{badgeText}</div>
            </div>
        </div>
    );
}

export default Badge;