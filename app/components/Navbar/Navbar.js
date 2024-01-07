import Link from "next/link";
import { FaHome , FaInfoCircle  } from "react-icons/fa";   
import { MdOutlineContactPhone ,MdMedicalServices  } from "react-icons/md"; 
import { RiMoneyDollarBoxFill } from "react-icons/ri";
import { IoBookmarksSharp } from "react-icons/io5"
import './navbar.css'

export default function Navbar() {
    return (
     <div className="navbar bg-secondary color-primary  ">
       <div className="flex justify-between container py-7 uppercase w-full flex-col  md:flex-row px-5 ">
            <div>
                    <Link
                        href="/"
                        className=""
                    >
                        LOGO
                    </Link> 
            </div>
            <div>
                <ul className="flex gap-4 text-base font-bold hidden md:flex">
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                         <Link href="/about">About Us</Link>
                    </li>
                    <li>
                         <Link href="/services">Services</Link>
                    </li>
                    <li>
                        <Link href="/pricing">Pricing</Link>
                    </li>
                    <li>
                         <Link href="/portfolio">Porfolio</Link>
                    </li>
                    <li>
                         <Link href="/contact">Contact</Link>
                    </li>
                </ul>
            </div>
       </div>
       <ul className="flex  md:hidden fixed bottom-0 right-0 left-0 bg-secondary color-primary  text-xs px-5 items-center justify-between">
            <li className="relative">
                <Link
                    href="/"
                    className="flex flex-col items-center justify-center gap-1  py-2 gap-1"
                 >
                    <span className="activeNav">< FaHome /></span>
                    <span>Home</span>
                </Link>
            </li>
            <li className="relative">
                <Link
                     href="/about"
                     className="flex flex-col items-center justify-center px-2  py-2 gap-1"
                >
                    <span>< FaInfoCircle /></span>
                    <span>About Us</span>
                </Link>
            </li>
            <li className="relative">
                <Link
                     href="/services"
                     className="flex flex-col items-center justify-center px-2  py-2 gap-1"
                >
                    <span>< MdMedicalServices /></span>
                    <span>Services</span>
                </Link>
            </li>
            <li className="relative">
                <Link
                     href="/pricing"
                     className="flex flex-col items-center justify-center px-2  py-2 gap-1"
                >
                    <span>< RiMoneyDollarBoxFill /></span>
                    <span>Pricing</span>
                </Link>
            </li>
            <li className="relative">
                <Link
                     href="/portfolio"
                     className="flex flex-col items-center justify-center gpx-2  py-2 gap-1"
                >
                    <span>< IoBookmarksSharp /></span>
                    <span>Portfolio</span>
                </Link>
            </li>
            <li className="relative">
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
      
    )
  }
  