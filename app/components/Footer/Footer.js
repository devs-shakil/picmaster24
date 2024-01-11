import Link from "next/link";
import { FaFacebook, FaInstagramSquare, FaTwitter ,FaWhatsapp  } from "react-icons/fa";
import {navigationLinks, socialIcon, servicesMenu, helpfullLink, contactUs } from "./../../data/navigation"


export default function Footer() {
  return (
<div className="bg-secondary">
  <div className="mx-auto container px-5 pb-6 pt-16  lg:pt-24">
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
      <div>
        <div className="flex justify-center text-teal-600 sm:justify-start">
            <Link 
                href="/"    
            >
                Logo
            </Link>
        </div>

        <p className="mt-6 max-w-md text-center leading-relaxed sm:max-w-xs sm:text-left color-white">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt consequuntur amet culpa
          cum itaque neque.
        </p>

        <ul className="mt-8 flex justify-center gap-6 sm:justify-start md:gap-8">
            {socialIcon.map((link, index) =>(
                 <li key={index}>
                    <Link
                        href={link.href}
                        rel="noreferrer"
                        target="_blank"
                        className="color-white transition hover:text-teal-700/75 bg-secondary "
                        >
                       {link.icon}
                    </Link>
               </li>
            ))}
        </ul>
      </div>

      <div className="grid grid-cols-2 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:col-span-2">
        <div className="text-center sm:text-left">
          <p className="text-lg font-medium color-heading">Quick Link</p>

          <ul className="mt-8 space-y-4 text-sm">
          { navigationLinks.map((link, index) =>(
            <li key={index}>
                <Link className="color-primary transition hover:color-heading" href={link.href}>
                    {link.label}
                </Link>
            </li>
          )) }
          </ul>
        </div>

        <div className="text-center sm:text-left">
          <p className="text-lg font-medium color-heading">Our Services</p>

          <ul className="mt-8 space-y-4 text-sm">
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
          <p className="text-lg font-medium color-heading">Helpful Links</p>

          <ul className="mt-8 space-y-4 text-sm">
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

        <div className="text-center sm:text-left">
          <p className="text-lg font-medium color-heading">Contact Us</p>

          <ul className="mt-8 space-y-4 text-sm">
            { contactUs.map((link, index)=>(
                <li key={index}>
                    <Link
                        className="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end "
                        href={link.href}
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

    <div className="mt-12 border-t border-gray-100 pt-6">
      <div className="text-center sm:flex sm:justify-between sm:text-left">
        <p className="text-sm text-gray-500">
          <span className="block sm:inline">All rights reserved.</span>
        </p>

        <p className="mt-4 text-sm text-gray-500 sm:order-first sm:mt-0">&copy; 2024 <Link href="/">Picmaster24</Link></p>
      </div>
    </div>
  </div>
</div>
    
  )
}