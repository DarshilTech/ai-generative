"use client";

import Link from 'next/link';
import { usePathname, useRouter } from "next/navigation";
import path from 'path';
import { useEffect, useState } from "react";

const Navbar = () => {
    const router = useRouter();
    const pathname = usePathname();
    const [isSticky, setIsSticky] = useState(false);

    const handleLogo = () => {
        router.push('/');
    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.pageYOffset > 0) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav className={`w-full flex justify-between p-2 bg-[#9ef1f7] ${isSticky ? 'sticky top-0 z-20 shadow' : ''}`}>
            <div className="flex items-center justify-center">
                <img src="/1.png" alt="D-ai logo" className="cursor-pointer" onClick={handleLogo} width={40} height={50} />
            </div>
            <ul className={`flex justify-center items-center gap-4 font-bold ${isSticky ? 'text-black' : 'text-black'}`}>
                <li className={`p-2 ${pathname ==='/dashboard' ? 'border border-black' :''}`}>
                    <Link href="/dashboard" legacyBehavior>
                        Dashboard
                    </Link>
                </li>
                <li className={`p-2 ${pathname ==='/design-studio' ? 'border border-black' :''}`}>
                    <Link href="/design-studio" legacyBehavior>
                        Studio
                    </Link>
                </li>
                <li className={`p-2 ${pathname ==='/contact-us' ? 'border border-black' :''}`}>
                    <Link href="/contact-us" legacyBehavior>
                       Contact Us
                    </Link>
                </li>
                <li className={`p-2 ${pathname ==='/about-us' ? 'border border-black' :''}`}>
                    <Link href="/about-us" legacyBehavior>
                        About Us
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
