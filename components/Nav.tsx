import Link from "next/link";

import { usePathname } from "next/navigation";

import { motion } from "framer-motion";
import { withLocalePath } from "@/lib/utils";
import { useTranslation } from "@/components/providers/TranslationProvider";

interface NavProps {
    containerStyles: string;
    linkStyles: string;
    underlineStyles: string;
};


const Nav = ({ containerStyles, linkStyles, underlineStyles }: NavProps) => {
    const { translation } = useTranslation();
    const path = usePathname();

    const links = [
        { path: "/", name: translation("nav.home") },
        { path: "/projects", name: translation("nav.projects") },
        { path: "/contact", name: translation("nav.contact") },
    ];

    return (
        <nav className={`${containerStyles}`}>
            {links.map((link, index) => {
                return (
                    <Link
                        href={withLocalePath(path, link.path)}
                        key={index}
                        className={`capitalize ${linkStyles}`}
                    >
                        {link.path === path && (
                            <motion.span
                                initial={{ y: '-100%' }}
                                animate={{ y: 0 }}
                                transition={{ type: 'tween' }}
                                layoutId='underline'
                                className={`${underlineStyles}`}
                            />
                        )}
                        {link.name}
                    </Link>
                );
            })}
        </nav>
    );
};

export default Nav;