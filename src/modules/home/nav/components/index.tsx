/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import React, { useEffect, useState, useRef } from 'react'
// import Image from 'next/image'
// import logo from '/public/images/lab.png'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { motion, useAnimationControls } from 'framer-motion'
import Hamburger from 'hamburger-react'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"


const components: { title: string; href: string; description: string }[] = [
    {
        title: "Alert Dialog",
        href: "/docs/primitives/alert-dialog",
        description:
            "A modal dialog that interrupts the user with important content and expects a response.",
    },
    {
        title: "Hover Card",
        href: "/docs/primitives/hover-card",
        description:
            "For sighted users to preview content available behind a link.",
    },
    {
        title: "Progress",
        href: "/docs/primitives/progress",
        description:
            "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    },
    {
        title: "Scroll-area",
        href: "/docs/primitives/scroll-area",
        description: "Visually or semantically separates content.",
    },
    {
        title: "Tabs",
        href: "/docs/primitives/tabs",
        description:
            "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
    },
    {
        title: "Tooltip",
        href: "/docs/primitives/tooltip",
        description:
            "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
    },
]

export default function Nav() {
    // const MotionLink = motion(Link)
    // const pathName = usePathname()
    const links = [
        {
            path: "/",
            name: "Trang Chủ",
        },
        {
            path: "/su-kien",
            name: "Sự kiện",
        },
        {
            path: "/blog",
            name: "Tạp chí billiards",
        },
        {
            path: "/lien-he",
            name: "Liên hệ",
        }
    ]
    const [isOpen, setOpen] = useState(false)
    const containerVariants = {
        close: {
            width: "0px",
            transition: {
                type: "spring",
                damping: 15,
                duration: 0.5,
            },
            opacity: 0
        },
        open: {
            width: "16rem",
            transition: {
                type: "spring",
                damping: 15,
                duration: 0.5,
                opacity: 1,
            },
            opacity: 1,
        }
    }
    const containerControls = useAnimationControls()
    useEffect(() => {
        if (isOpen) {
            containerControls.start("open")
        } else {
            containerControls.start("close")
        }
    }, [isOpen])

    const handleOpenClose = () => {
        setOpen(!isOpen)
    }

    // const motionNavigation = motion.NavigationMenu()

    return (
        <>
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>

                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
            {/* ANOTHER */}
            <nav className='flex justify-between items-center bg-gradient-to-r from-slate-900 to-slate-700 p-4 text-white'>
                <div>
                    <div className='w-16 cursor-pointer'>LOGO</div>
                </div>
                <div className='duration-500 md:static absolute md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto  w-full flex items-center px-5'>
                    <ul className='flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8'>
                        {links.map((link) => {
                            return (
                                <li key={link.path}>
                                    <Link href={link.path}>{link.name}</Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div className='flex items-end'>
                    <div className='md:hidden z-10 flex'>
                        <Hamburger color='red' size={20} duration={0.3} rounded={true} toggled={isOpen} onToggle={handleOpenClose} />
                    </div>
                    <motion.nav
                        variants={containerVariants}
                        initial="close"
                        animate={containerControls}
                        className='bg-gradient-to-l from-slate-500 to-slate-800 flex flex-col border-l-[1px] border-white/25 drop-shadow-xl shadow-slate-600 gap-20 absolute top-0 right-0 h-full'>
                        <motion.div
                            className='flex flex-col w-full justify-between place-items-start'>
                            <ul className='ml-4 pt-10'>
                                {links.map(link => {
                                    return (
                                        <li key={link.path} className='py-4 '>
                                            <Link href={link.path} className='text-red-400'>
                                                {link.name}
                                            </Link>
                                        </li>
                                    )
                                })}
                            </ul>
                        </motion.div>
                    </motion.nav>
                </div >
            </nav >
        </>
    )
}





// Cach use cn
{/* <MotionLink
                                href={link.path}
                                className={cn('font-medium transition-all duration-500 ease-out hover:text-rose-500'
                                    , pathName === link.path ? "text-rose-500" : ""
                                )}>
                                <motion.span>
                                    {link.name}
                                </motion.span>
                            </MotionLink> */}
