import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { AlignJustify } from 'lucide-react';

import Nav from '@/components/Nav';
import Logo from '@/components/Logo';
// import Socials from '@/components/Socials';

const MobileNav = () => {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <AlignJustify className='cursor-pointer' />
            </SheetTrigger>
            <SheetContent>
                <div className='flex flex-col items-center justify-between h-full py-8'>
                    <div className='flex flex-col items-center gap-y-32'>
                        <Logo />
                        <Nav
                            containerStyles='flex flex-col gap-y-8 items-center'
                            linkStyles='text-2xl text-center'
                            underlineStyles='h-[2px] bg-primary w-full'
                        />
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    );
};

export default MobileNav;