import { FaFacebook, FaInstagramSquare, FaTwitter ,FaWhatsapp,FaPhone   } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";

export const navigationLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Pricing", href: "/pricing" },
    { label: "Porfolio", href: "/portfolio" },
    { label: "Contact", href: "/contact" }
  ];

  
// social media
  export const socialIcon = [
    { icon: <FaFacebook/> , href: "/" },
    { icon: <FaInstagramSquare/>, href: "/" },
    { icon: <FaTwitter/>, href: "/" },
    { icon: <FaWhatsapp/>, href: "/" },
  ];

  // services 
  export const servicesMenu = [
    { label: "Clipping path", href: "/" },
    { label: "Image Masking ", href: "/" },
    { label: "Photo Retouching ", href: "/" },
    { label: "Shadow & mirror effects", href: "/" },
    { label: "Ghost Mannequin Effect", href: "/" },
  ];

// helpfull link
export const helpfullLink = [
    { label: "FAQs", href: "/" },
    { label: "Support", href: "/" },
    { label: "Live Chat", href: "/" },
  ];
  
//contact us
export const contactUs = [
    { label: "mail@picmaster24.com", href: "/", icon:  <IoMail />},
    { label: "8801780783657", href: "/" , icon: <FaPhone/> },
    { label: "Mirpur 10, Dhaka , Bangladesh", href: "/", icon: <FaLocationDot /> },
  ];
  