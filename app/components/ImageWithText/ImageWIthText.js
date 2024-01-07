import Image from "next/image";
import Link from "next/link";
import image from '../../../public/images/header-right.png'

export default function ImageWithText(
    {
        title,
        subtitle
    }
) {
  return (
    <section className="bg-primary-two color-white">
        <div className="flex container px-5 flex-col sm:flex-row">
            <div className="w-full sm:w-2/4 flex justify-center items-center ">
                <div className="flex flex-col gap-7">
                    <h2 className="text-6xl">
                       {title}
                    </h2>
                    <p className="">
                        {subtitle}
                    </p>
                    <div className="flex gap-6">
                        <Link 
                            href="/contact"
                            className="w-[150px] bg-primary color-secondary font-bold  h-[50px] my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#009b49] before:to-[rgb(105,184,141)] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#fff]"
                        >
                            Get started
                        </Link>
                        <Link 
                            href="/portfolio"
                            className="w-[150px] bg-secondary color-primary font-bold h-[50px] my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#009b49] before:to-[rgb(105,184,141)] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#fff]"
                        >
                        See Portfolio
                        </Link>
                       
                    </div>
                </div>
            </div>
            <div className="w-full sm:w-2/4 ">
                <Image
                    src={image}
                    width = "500"
                    height= "500"
                    className="w-full h-auto"
                   
                />
            </div>
        </div>
    </section>
    
  )
}
