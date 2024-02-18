import Link from "next/link";
import { FaFacebook, FaInstagramSquare, FaTwitter ,FaWhatsapp  } from "react-icons/fa";
import {navigationLinks, socialIcon, servicesMenu, helpfullLink, contactUs } from "./../../data/navigation"
import './footer.css'

export default function Footer() {
  return (
<div className="bg-primary color-white">
  <div className="mx-auto container px-5 pb-6 pt-16  lg:pt-24">
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 justify-center">
      <div className="md:grid-cols-3 justify-center md:justify-left">
        <div className="flex justify-center text-3xl lg:justify-start">
            <Link 
                href="/"    
            >
                Picmaster24
            </Link>
        </div>

        <p className="mt-6 max-w-md text-center leading-relaxed  color-white mx-auto sm:text-left">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt consequuntur amet culpa
          cum itaque neque.
        </p>

        <ul className="mt-5 md:mt-8 flex justify-center gap-2 w-full lg:justify-start social-media">
            {socialIcon.map((link, index) =>(
                 <li key={index} className="">
                    <Link
                        href={link.href}
                        rel="noreferrer"
                        target="_blank"
                        className="color-secondary transition hover:text-teal-700/75 white-bg p-3 inline-flex rounded-md "
                        >
                       {link.icon}
                    </Link>
               </li>
            ))}
        </ul>
      </div>

      <div className="grid grid-cols-2 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:col-span-2">
        <div className="text-center sm:text-left">
          <p className="text-lg font-medium color-heading color-secondary">Quick Link</p>

          <ul className="mt-5 md:mt-8 space-y-4 text-sm">
          { navigationLinks.map((link, index) =>(
            <li key={index}>
                <Link className=" transition hover:color-heading" href={link.href}>
                    {link.label}
                </Link>
            </li>
          )) }
          </ul>
        </div>

        <div className="text-center sm:text-left ">
          <p className="text-lg font-medium color-heading color-secondary">Our Services</p>

          <ul className="mt-5 md:mt-8 space-y-4 text-sm">
            {servicesMenu.map((link, index)=>(
                <li key={index}>
                    <Link 
                        className="color-white transition hover:color-heading"
                        href={link.href}>
                            {link.label}
                    </Link>
                </li>
            ))}
          </ul>
        </div>

        <div className="text-center sm:text-left">
          <p className="text-lg font-medium color-heading color-secondary">Helpful Links</p>

          <ul className="mt-5 md:mt-8 space-y-4 text-sm">
            {helpfullLink.map((link, index)=>(
                <li key={index}>
                    <Link 
                        className="color-white transition "
                        href={link.href}>
                        {link.label}
                    </Link>
                </li>
            ))}
           
          </ul>
        </div>

        <div className="text-center sm:text-left break-all">
          <p className="text-lg font-medium color-heading color-secondary">Contact Us</p>

          <ul className="mt-5 md:mt-8 space-y-4 text-sm">
            { contactUs.map((link, index)=>(
                <li key={index} className="">
                    <Link
                        className="flex items-center  gap-2  "
                        href={link.href}
                        target="_blank"
                    >
                        <span className="color-white">{link.icon}</span>
                        <span className="flex-1 color-white">{link.label}</span>
                    </Link>
                </li>
            ))}
           
          </ul>
        </div>
      </div>
    </div>

    <div className="mt-12 border-t border-gray-100 pt-6 pb-10">
      <div className="text-center sm:flex sm:justify-between sm:text-left">
        <p className="text-sm text-gray-500">
          <span className="block sm:inline">All rights reserved.</span>
        </p>
        <p className="mt-2 text-sm text-gray-500 sm:order-first sm:mt-0">&copy; 2024 <Link href="/">Picmaster24</Link></p>
        <p className="mt-2 text-sm text-gray-500 sm:order-first sm:mt-0"> 
             Design and Developed by 
          <Link href="https://github.com/devs-shakil" target="_blank" className="text-indigo-600"> Devs.shakil</Link>
        </p>
       
      </div>
    </div>
  </div>
</div>
    
  )
}
