import Link from "next/link";
import { FaHome , FaInfoCircle  } from "react-icons/fa";   
import { MdOutlineContactPhone ,MdMedicalServices  } from "react-icons/md"; 
import { RiMoneyDollarBoxFill } from "react-icons/ri";
import { IoBookmarksSharp } from "react-icons/io5"
import './navbar.css'

export default function Navbar() {
    return (
     <div className="navbar bg-secondary color-primary  ">
       <div className="flex justify-between container  uppercase w-full flex-col  md:flex-row px-5 ">
            <div>
                    <Link
                        href="/"
                        className="py-7 inline-flex"
                    >
                        LOGO
                    </Link> 
            </div>
            <div>
                <ul className=" text-base font-bold hidden md:flex bg-secondary">
                    <li>
                        <Link  className="py-7  px-2  inline-flex" href="/">Home</Link>
                    </li>
                    <li>
                         <Link className="py-7  px-2  inline-flex"     href="/about">About Us</Link>
                    </li>
                    <li>
                         <Link className="py-7 px-2  inline-flex" href="/services">Services</Link>
                    </li>
                    <li>
                        <Link className="py-7  px-2 inline-flex" href="/pricing">Pricing</Link>
                    </li>
                    <li>
                         <Link className="py-7 px-2  inline-flex" href="/portfolio">Porfolio</Link>
                    </li>
                    <li>
                         <Link className="py-7 px-2  inline-flex" href="/contact">Contact</Link>
                    </li>
                </ul>
            </div>
       </div>
       <ul className="flex  md:hidden fixed bottom-0 right-0 left-0 bg-secondary color-primary  text-[10px] px-5 items-center justify-between">
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
                     href="/pricing"
                     className="flex flex-col items-center justify-center px-2  py-2 gap-1"
                >
                    <span>< RiMoneyDollarBoxFill /></span>
                    <span>Pricing</span>
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
      
    )
  }
  