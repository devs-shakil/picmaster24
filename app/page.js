import Image from "next/image";
import Navbar from "./components/Navbar/Navbar";


export default function Home() {
  return (
  <main>
     <Image
    src={'/images/logo.jpg'}
    className="mx-auto mt-6"
    width={400}
    height={200}
   />
   <h2 className="text-[45px] font-bold text-center pt-3  uppercase">Comming Soon <span className="text-[#4FEBFE]"></span></h2>
  </main>
    
  )
}
