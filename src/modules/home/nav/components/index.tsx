/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import React, { useEffect, useState, useRef } from 'react'
// import Image from 'next/image'
// import logo from '/public/images/lab.png'
import Text from '@/modules/components/text'
import Link from 'next/link'
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

    return (
        <>
            
        </>

    )
}

// <div className='bg-rose-600 flex justify-center text-xs text-white'>
//                 <Text content={'Rất hân hạnh được phục vụ bạn 🥰'} className='m-1' />
//             </div>
//             <div className='border-b-[1px] border-slate-300 shadow-black/50 shadow-sm'>
//                 {/* Nav */}
//                 <div className='md:hidden flex justify-between'>
//                     <Hamburger color='black' size={20} duration={0.3} rounded={true} toggled={isOpen} onToggle={handleOpenClose} />
//                     <motion.nav
//                         variants={containerVariants}
//                         initial="close"
//                         animate={containerControls}
//                         className='bg-neutral-900 flex flex-col z-50 gap-20 absolute top-0 right-0 h-full'>
//                         <motion.div
//                             className='flex flex-col w-full justify-between place-items-start'>
//                             <ul className='ml-4 pt-10'>
//                                 {links.map(link => {
//                                     return (
//                                         <li key={link.path} className='py-4 '>
//                                             <Link href={link.path} className='text-red-400'>
//                                                 {link.name}
//                                             </Link>
//                                         </li>
//                                     )
//                                 })}
//                             </ul>
//                         </motion.div>
//                     </motion.nav>
                    
//                 </div>
//             </div>


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



// <div className='md:h-[80px] h-[40px] bg-black font-extrabold flex justify-between'>
//                 <Text content={'LAB Billiards'} className='font-semibold md:text-3xl md:mt-4 text-yellow-100 p-2 cursor-default' />
//                 {/* <Image src={logo} layout='reponsive' width={60} alt='Logo quán bida Lab Billiards Biên Hòa' className='bg-no-repeat bg-transparent'/> */}
// </div>