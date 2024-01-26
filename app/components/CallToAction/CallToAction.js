import Link from "next/link";

export default function CallToAction() {
  return (
    <div className="w-full  py-6 md:py-12 bg-secondary">
        <div className=" container mx-auto px-5">
            <div className=" flex justify-between items-center  flex-col md:flex-row gap-3 w-full">
                <div className="w-full md:w-9/12 ">
                    <h2 className="text-3xl md:text-5xl font-bold text-center md:text-left color-white">Let us know what to do with your images</h2>
                </div>
                <div className="w-full md:w-3/12 flex justify-center md:justify-end ">
                    <Link 
                        href="/contact"
                        className="w-3/4 md:w-3/4   bg-primary color-white font-bold h-[55px] my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#F9F9F9] before:to-[#F9F9F9] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 hover:text-[#DF283A]"
                        >
                        Contact
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}
