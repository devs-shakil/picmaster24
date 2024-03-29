import Link from "next/link";
import Image from "next/image";
export default function ImageWithText({
    heading,
    title,
    subtitle,
    subtitleTwo,
    subtitleThree,
    image,
    imageFirst,
    bgWhite,
    buttonOne,
    buttonTwo
  }) {
    
    return (
      <section className={` py-5 md:py-10 ${bgWhite ? 'bg-white': "bg-gray-50 " }`}> 
        <div className="container px-5  ">
            {heading &&
              <h2 className="pb-3 text-3xl md:text-4xl lg:text-5xl font-bold color-heading text-left md:text-center">{heading}</h2>
            }
        </div>
        <div className= { `flex container px-5 ${ imageFirst ? 'flex-col-reverse md:flex-row-reverse gap-2 md:gap-8' : ''  } flex-col sm:flex-row gap-3`}>
          <div className="w-full sm:w-2/4 flex justify-center items-center">
            <div className="flex flex-col gap-5 py-3 md:py-2">
              {title && 
                <h2 className=" lg:leading-[60px] md:text-4xl lg:text-5xl color-heading font-bold text-3xl">{title}</h2>
              }             
              <p className="text-base md:text-xl md:leading-8 color-primary">{subtitle}</p>
                {subtitleTwo && 
                  <p className="text-base md:text-xl md:leading-8 color-primary">{subtitleTwo}</p>
                }
                {
                  subtitleThree &&
                  <p className="text-base md:text-xl md:leading-8 color-primary">{subtitleThree}</p>
                }
            
              <div className="flex gap-6 itesm-center">
                {
                    buttonOne && 
                    <Link 
                        href="/contact"
                        className="w-[150px] bg-primary white-color font-bold  h-[50px] my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#DF283A] before:to-[#DF283A] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#fff]"
                        >
                        { buttonOne}
                         
                    </Link>
                }
                {
                    buttonTwo && 
                    <Link 
                        href="/portfolio"
                        className="w-[150px] bg-secondary color-white font-bold h-[50px] my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#021333] before:to-[#021333] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#fff]"
                        >
                       {buttonTwo}
                    </Link>
                }
                    
              </div>
            </div>
          </div>
          <div className="w-full sm:w-2/4 ">
            {
              image &&
                <Image
                src={image}
                width="500"
                height="500"
                className="w-full h-auto"
                alt=""
              />
            }
          </div>
        </div>
      </section>
    );
  }
  