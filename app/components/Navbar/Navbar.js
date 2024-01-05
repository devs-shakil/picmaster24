import Link from "next/link";


export default function Navbar() {
    return (
     <nav className="flex w-max mx-auto mt-2 bg-sky-900 py-3 text-white px-3 text-center" >

    
        <Link href="/" className="pr-3 "> Home</Link>
        <Link href="/about" className="pr-3 ">About </Link>
        <Link href="/services" className="pr-3 "> Services</Link>
        <Link href="/contact" className="pr-3 "> Contact</Link>
        
       
     </nav>
      
    )
  }
  