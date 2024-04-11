'use client'
import React, { useEffect, useState, useRef } from 'react'
// import Image from 'next/image'
// import logo from '/public/images/lab.png'
import Text from '@/modules/components/text'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from "@/lib/utils";
import { motion, useAnimationControls } from 'framer-motion'
import Hamburger from 'hamburger-react'

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
    const menuRef = useRef(null)
    useEffect(() => {
        let handler = (e: any) => {
            if (isOpen && !menuRef?.current?.contains(e.target)){
                setOpen(false)
            }
        }
        document.addEventListener("mousedown", handler)
    }, [isOpen])


    return (
        <>
            <motion.nav
                variants={containerVariants}
                initial="close"
                animate={containerControls}
                ref={menuRef}
                className='bg-neutral-900 flex flex-col z-10 gap-20 absolute top-0 right-0 h-full shadow shadow-neutral-500'>
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
            <Hamburger color='black' size={20} duration={0.3} rounded={true} toggled={isOpen} onToggle={setOpen} />
        </>
    )
}

{/* <MotionLink
                                href={link.path}
                                className={cn('font-medium transition-all duration-500 ease-out hover:text-rose-500'
                                    , pathName === link.path ? "text-rose-500" : ""
                                )}>
                                <motion.span>
                                    {link.name}
                                </motion.span>
                            </MotionLink> */}

{/* <div className='bg-rose-600 flex justify-center text-xs text-white'>
                <Text content={'Rất hân hạnh được phục vụ bạn 🥰'} className='m-1' />
            </div> */}

// <div className='md:h-[80px] h-[40px] bg-black font-extrabold flex justify-between'>
//                 <Text content={'LAB Billiards'} className='font-semibold md:text-3xl md:mt-4 text-yellow-100 p-2 cursor-default' />
//                 {/* <Image src={logo} layout='reponsive' width={60} alt='Logo quán bida Lab Billiards Biên Hòa' className='bg-no-repeat bg-transparent'/> */}
// </div>