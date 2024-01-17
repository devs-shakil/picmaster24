import Image from "next/image";
import Link from "next/link";

export default function Services() {
  return (
   <section className="bg-primary-three py-3">
        <div className="container px-5 mx-auto">
            <div className="text-center max-w-lg mx-auto md:max-w-3xl">
                <h2 className="text-3xl md:text-5xl font-bold py-3">Our Services</h2>
                <p className="text-base md:text-2xl ">We probably operate the best offshore Graphics design studio in Asia. To make sure we keep delivering top quality we only employ the best DTP professionals.</p>
            </div>
        </div>
        <div className="grid ">
            <div className="">
                <Image
                src=""
                className="w-full h-auto"
                alt=""
                />
                <h3>Social Media Marketing</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                <Link href="">Learn More</Link>
            </div>
        </div>
   </section>
  )
}
