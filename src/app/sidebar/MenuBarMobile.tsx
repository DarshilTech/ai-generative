import React from 'react'
import Link from 'next/link'
import { FiMenu as Icon } from 'react-icons/fi'
import { FaUser } from 'react-icons/fa'

import logo from '../../../public/1.png'

export default function MenuBarMobile({ setter }:{setter: React.Dispatch<React.SetStateAction<boolean>>}) {
    return (
        <nav className="md:hidden z-20 fixed top-0 left-0 right-0 h-[60px] us:w-[27%] bg-black flex [&>*]:my-auto px-2">
            <button
                className="text-4xl flex text-white"
                onClick={() => {
                    setter(oldVal => !oldVal);
                }}
            >
                <Icon />
            </button>
            <Link href="/" className="mx-auto">
                {/*eslint-disable-next-line*/}
                <img
                    src={logo.src}
                    alt="Company Logo"
                    width={50}
                    height={50}
                />
            </Link>
            <Link
                className="text-3xl flex text-white"
                href="/auth/login">
                <FaUser />
            </Link>
        </nav>
    )
}