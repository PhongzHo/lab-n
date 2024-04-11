'use client'
import React, { useEffect, useState } from 'react'
// import Image from 'next/image'
// import logo from '/public/images/lab.png'
import Text from '@/modules/components/text'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from "@/lib/utils";
import { motion } from 'framer-motion'
import Hamburger from 'hamburger-react'

export default function Nav() {
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
    const pathName = usePathname()
    const MotionLink = motion(Link)
    const [isOpen, setOpen] = useState(false)

    return (
        <nav>
            <div className='bg-rose-600 flex justify-center text-xs text-white'>
                <Text content={'Rất hân hạnh được phục vụ bạn 🥰'} className='m-1' />
            </div>
            <div>
                <Hamburger color='black' size={20} duration={0.5} rounded={true} toggled={isOpen} onToggle={setOpen} />
                {
                    isOpen ? <motion.aside
                        initial={{opacity: 0, width: '0vw', background: 'white'}}
                        animate={{opacity: 1, width: '40vw' ,background: 'gray'}}
                        transition={{duration: 0.5}}
                    >
                        <ul className='ml-4'>
                            {links.map(link => {
                                return (
                                    <motion.li key={link.path} className='pt-4'>
                                        <MotionLink
                                            href={link.path}
                                            className={cn('font-medium transition-all duration-500 ease-out hover:text-rose-500'
                                                , pathName === link.path ? "text-rose-500" : ""
                                            )}>
                                            <motion.span>
                                                {link.name}
                                            </motion.span>
                                        </MotionLink>
                                    </motion.li>
                                )
                            })}
                        </ul>
                    </motion.aside> : null
                }
            </div>
        </nav>
    )
}



// <div className='md:h-[80px] h-[40px] bg-black font-extrabold flex justify-between'>
//                 <Text content={'LAB Billiards'} className='font-semibold md:text-3xl md:mt-4 text-yellow-100 p-2 cursor-default' />
//                 {/* <Image src={logo} layout='reponsive' width={60} alt='Logo quán bida Lab Billiards Biên Hòa' className='bg-no-repeat bg-transparent'/> */}
// </div>