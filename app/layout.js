import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import CallToAction from './components/CallToAction/CallToAction'
import Link from 'next/link'
import { FaWhatsappSquare } from "react-icons/fa";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'picmaster24',
  description: 'photoshop experts',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className='sticky top-0 right-0 left-0 z-50 max-w-full overflow-x-hidden'>
            <Navbar/>
        </header>
        {children}
        <CallToAction/>
        <footer className='max-w-full overflow-x-hidden'>
            <Footer/>
        </footer>
        <Link
          className="whatsappLink fixed right-2 lg:right-16 bottom-14 lg:bottom-8 p-1 rounded-sm  inline-flex items-center justify-center"
          href="https://wa.me/+8801642080280"
          target='_blank'
        >
          <FaWhatsappSquare />
        </Link>
      </body>
    </html>
  )
}

