import Image from "next/image";
import Link from "next/link";
import processItems from './../../data/ourProcess'
import './ourProcess.css'

export default function OurProcess(
    {
        title,
        subtitle
    }
) {
return (
   <section className="white-bg py-3 md:py-8">
        <div className="container px-5 mx-auto flex flex-col gap-4">
            <div className="pb-4">
                <div className="text-center max-w-xl mx-auto md:max-w-5xl">
                    <h2 className="text-3xl md:text-5xl font-bold py-3">{title}</h2>
                    <p className="text-base md:text-xl md:leading-8 color-primary ">{subtitle}</p>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 items-center" >
                <div className="flex items-center justify-center text-center  process-bg py-4 px-1 md:py-12 md:px-6">
                    <div className="w-2/4">
                        <div className="p-5 bg-secondary rounded-full w-[70px] h-[70px] md:w-[100px] md:h-[100px] lg:w-[150px] lg:h-[150px] flex items-center justify-center mx-auto text-3xl md:text-5xl color-white">1</div>
                        <h2 className="py-3 text-sm lg:text-xl color-primary font-semibold">Request Quote</h2>
                    </div>
                    <div className="w-2/4">
                        <div className="p-5 bg-secondary rounded-full w-[70px] h-[70px] md:w-[100px] md:h-[100px] lg:w-[150px] lg:h-[150px] flex items-center justify-center mx-auto text-3xl md:text-5xl color-white">2</div>
                        <h2 className="py-3 text-base lg:text-xl color-primary font-semibold">Processing</h2>
                    </div>
                </div>
                <div className="flex items-center justify-center text-center process-bg py-4  px-1  md:py-12 md:px-6">
                    <div className="w-2/4">
                        <div className="p-5 bg-secondary rounded-full w-[70px] h-[70px] md:w-[100px] md:h-[100px] lg:w-[150px] lg:h-[150px] flex items-center justify-center mx-auto text-3xl md:text-5xl color-white">3</div>
                        <h2 className="py-3 text-sm lg:text-xl color-primary font-semibold">Download Image</h2>
                    </div>
                    <div className="w-2/4">
                        <div className="p-5 bg-secondary rounded-full w-[70px] h-[70px] md:w-[100px] md:h-[100px] lg:w-[150px] lg:h-[150px] flex items-center justify-center mx-auto text-3xl md:text-5xl color-white">4</div>
                        <h2 className="py-3 text-sm lg:text-xl color-primary font-semibold">Approve & Pay</h2>
                    </div>
                </div>
                            
            </div>
        </div>
   </section>
  )
}

