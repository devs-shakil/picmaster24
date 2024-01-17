import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import CallToAction from './components/CallToAction/CallToAction'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'picmaster24',
  description: 'photoshop experts',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className='sticky top-0 right-0 left-0 z-50'>
            <Navbar/>
        </header>
        {children}
        <CallToAction/>
        <footer>
            <Footer/>
        </footer>
      
      </body>
    </html>
  )
}

