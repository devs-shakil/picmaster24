'use client';

import Link from "next/link";
import { FaHome , FaInfoCircle  } from "react-icons/fa";   
import { MdOutlineContactPhone ,MdMedicalServices  } from "react-icons/md"; 
import { RiMoneyDollarBoxFill } from "react-icons/ri";
import { IoBookmarksSharp } from "react-icons/io5"
import './navbar.css'
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Navbar() {
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
        if (window.scrollY > 400) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
        };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
    
    return (
    <nav className={scrolled ? 'stycky scrolled shadow-md' : 'stycky'}>
        <div className="navbar ">
        <div className="items-center flex justify-between container  uppercase w-full flex-col  md:flex-row px-5 ">
                <div>
                    <Link
                        href="/"
                        className="py-2 inline-flex font-bold "
                    >
                    <Image
                        src='/images/logo.png'
                        width={200}
                        height={100}
                        loading="lazy"
                        alt="Picmaster24 logo"
                        className="max-w-[250px] max-h-[60px] object-contain w-full h-auto"
                    />
                    </Link> 
                </div>
                <div>
                    <ul className=" text-base font-bold hidden md:flex   ">
                        <li>
                            <Link  
                                className={`py-4   px-3  inline-flex  ${pathname ==='/' ? 'active':' ' } ` } 
                                href="/"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link 
                                className={`py-4  px-3  inline-flex  ${pathname === '/about' ?  'active' : ''}`}    href="/about"
                            >
                                    About Us
                            </Link>
                        </li>
                        <li>
                            <Link 
                                className={`py-4 px-3  inline-flex ${pathname === '/services' ?  'active' : ''}`} href="/services"
                            >
                                Services
                            </Link>
                        </li>
                        <li>
                            <Link 
                                className={`py-4 px-3  inline-flex ${pathname === '/portfolio' ?  'active' : ''}`} 
                                href="/portfolio">
                                Porfolio
                            </Link>
                        </li>
                    
                        <li>
                            <Link 
                                className={`py-4 px-3  inline-flex ${pathname === '/contact' ?  'active' : ''}`}
                                href="/contact">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
        </div>
        <ul className="flex  md:hidden fixed bottom-0 right-0 left-0 bg-secondary color-white  text-[10px] px-5 items-center justify-center gap-1 z-50">
                <li className="">
                    <Link
                        href="/"
                        className="flex flex-col items-center justify-center gap-1  py-2  "
                    >
                        <span className="">< FaHome /></span>
                        <span>Home</span>
                    </Link>
                </li>
                <li className="">
                    <Link
                        href="/about"
                        className="flex flex-col items-center justify-center px-2  py-2 gap-1"
                    >
                        <span>< FaInfoCircle /></span>
                        <span>About Us</span>
                    </Link>
                </li>
                <li className="">
                    <Link
                        href="/services"
                        className="flex flex-col items-center justify-center px-2  py-2 gap-1"
                    >
                        <span>< MdMedicalServices /></span>
                        <span>Services</span>
                    </Link>
                </li>
                <li className="">
                    <Link
                        href="/portfolio"
                        className="flex flex-col items-center justify-center gpx-2  py-2 gap-1"
                    >
                        <span>< IoBookmarksSharp /></span>
                        <span>Portfolio</span>
                    </Link>
                </li>
            
                <li className="">
                    <Link 
                        href="/contact"
                        className="flex flex-col items-center justify-center px-2   py-2 gap-1"
                    >
                        <span>< MdOutlineContactPhone /></span>
                        <span>Contact</span>
                    </Link>
                </li>
            </ul>
        </div>
    </nav>
    )
  }
  
