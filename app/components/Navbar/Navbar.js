import Link from "next/link";


export default function Navbar() {
    return (
     <div className=" bg-primary color-white">
       <div className="flex justify-between container py-5">
            <div>
                    <Link
                        href="/"
                        className=""
                    >
                        LOGO
                    </Link> 
            </div>
            <div>
                <ul className="flex">
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
     </div>
      
    )
  }
  