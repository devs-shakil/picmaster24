import Image from "next/image";
import Link from "next/link";
import {servicesItems} from './../../data/services'




export default function Services(
    {
        title,
        subtitle
    }
) {
 
  
    
  return (
   <section className="bg-gray-100 py-3 md:py-8">
        <div className="container px-5 mx-auto flex flex-col gap-4">
            <div className="pb-4">
                <div className="text-center max-w-lg mx-auto md:max-w-3xl">
                    <h2 className="text-3xl md:text-5xl font-bold py-3">{title}</h2>
                    <p className="text-base md:text-2xl ">{subtitle}</p>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 allow-slider" >
                {servicesItems.map((item, index)=>(
                    <div className="flex flex-col  shadow-lg" key={index}>
                        <div className="rounded-t-lg">
                            <Image
                            src={item.image}
                            className="w-full h-auto rounded-t-lg"
                            width='500'
                            height="400"
                            loading="lazy"
                            alt=""
                            />
                        </div>
                        <div className="w-full bg-primary color-white py-5 px-8  min-h-[260px] rounded-b-lg" >
                            <h3 className="text-2xl text-center py-4 font-bold  ">{item.title}</h3>
                            <p className="text-base text-center pb-2 ">{item.subtitle}</p>
                            <Link 
                                href="/portfolio"
                                className="mx-auto mt-2  w-[150px] bg-secondary color-white font-bold h-[50px] my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#F9F9F9] before:to-[#F9F9F9] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0  hover:text-[#DF283A]"
                                >
                                    Learn More
                            </Link>
                        </div>
                    </div>
                ))}
               
                
                
            </div>
        </div>
   </section>
  )
}

