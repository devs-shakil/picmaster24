import Link from "next/link";
import Image from "next/image";
export default function ImageWithText({
    title,
    subtitle,
    image,
    imageFirst,
    buttonOne,
    buttonTwo
  }) {
    
    return (
      <section className="bg-primary-two color-white">
        <div className= { `flex container px-5 ${ imageFirst ? 'flex-col-reverse' : ''  } flex-col sm:flex-row gap-3`}>
          <div className="w-full sm:w-2/4 flex justify-center items-center pt-4 ">
            <div className="flex flex-col gap-5 py-6 md:py-0">
              <h2 className="text-3xl lg:leading-[80px] md:text-4xl lg:text-7xl color-heading">{title}</h2>
              <p className="text-base md:text-xl md:leading-9 color-primary">{subtitle}</p>
              <div className="flex gap-6 itesm-center">
                {
                    buttonOne && 
                    <Link 
                        href="/contact"
                        className="w-[150px] bg-primary color-secondary font-bold  h-[50px] my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#009b49] before:to-[rgb(105,184,141)] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#fff]"
                        >
                        { buttonOne}
                         
                    </Link>
                }
                {
                    buttonTwo && 
                    <Link 
                        href="/portfolio"
                        className="w-[150px] bg-secondary color-white font-bold h-[50px] my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#009b49] before:to-[rgb(105,184,141)] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#fff]"
                        >
                       {buttonTwo}
                    </Link>
                }
                    
              </div>
            </div>
          </div>
          <div className="w-full sm:w-2/4 ">
            <Image
              src={image}
              width="500"
              height="500"
              className="w-full h-auto"
              alt=""
            />
          </div>
        </div>
      </section>
    );
  }
  