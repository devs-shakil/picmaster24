import { FaFacebook, FaLinkedinIn , FaTwitter ,FaWhatsapp,FaPhone ,FaSkype    } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";

export const navigationLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Porfolio", href: "/portfolio" },
    { label: "Contact", href: "/contact" }
  ];

  
// social media
  export const socialIcon = [
    { icon: <FaWhatsapp/>, href: "https://wa.me/+8801642080280" },
    { icon: <FaFacebook/> , href: "https://www.facebook.com/Picmaster24" },
    { icon: <FaSkype/>, href: "https://join.skype.com/invite/qVIGXAhLTlJm" },
    { icon: <FaTwitter/>, href: "https://twitter.com/picmaster24" },
    { icon: <FaLinkedinIn />, href: "https://www.linkedin.com/in/pic-master-54b8262b0/" },
    
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
    { label: "Support", href: "https://join.skype.com/invite/qVIGXAhLTlJm" },
    { label: "Live Chat", href: "https://join.skype.com/invite/qVIGXAhLTlJm" },
  ];
  
//contact us
export const contactUs = [
    { label: "picmasterr24@gmail.com", href: "mailto:picmasterr24@gmail.com", icon:  <IoMail />},
    { label: "+8801642080280", href: "tel:+8801642080280" , icon: <FaPhone/> },
    { label: "Mirpur 10, Dhaka , Bangladesh", href: "https://maps.app.goo.gl/bDT26K4dsjgCYpGEA", icon: <FaLocationDot /> },
  ];
  
