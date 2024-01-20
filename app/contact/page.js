export default function contact() {
    return (
    
        <section className="bg-gray-50">
          <div className="mx-auto container px-5 py-16 ">
            <div className="grid grid-cols-1 lg:grid-cols-5 shadow-sm  ">
              <div className="lg:col-span-2 lg:py-12 bg-primary color-white px-8">
                <h2>Contact Information</h2>
                <p>Contact us, we will reply as soon as possible</p>
                <div>
                  <div>
                    <span>icon</span>
                    <span>3434123465</span>
                  </div>
                  <div>
                    <span>icon</span>
                    <span>hello@gmail.com</span>
                  </div>
                  <div>
                    <span>icon</span>
                    <span>Location</span>
                  </div>
                </div>
              </div>

              <div className=" bg-white p-8  lg:col-span-3 lg:p-12">
                <form action="" className="space-y-4">
                  <div className="flex flex-col gap-1"> 
                    <label 
                        for="name"
                        className=""
                      >
                        Full Name: 
                    </label>               
                    <input
                      className="w-full rounded-lg  p-3 text-sm border border-1 border-[#021333] h-[54px] "
                      placeholder="Enter Full Name"
                      type="text"
                      id="name"
                    />
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="flex flex-col gap-1">
                      <label for="email">
                          Email:
                      </label>
                      <input
                        className="w-full rounded-lg border border-1 p-3 text-sm h-[54px] border-[#021333]"
                        placeholder="Email address"
                        type="email"
                        id="email"
                      />
                    </div>

                    <div className="flex flex-col gap-1">
                      <label for="email">
                            Phone Number:
                        </label>
                      <input
                        className="w-full rounded-lg border border-1 p-3 text-sm h-[54px] border-[#021333]"
                        placeholder="Whatsapp  Number"
                        type="tel"
                        id="phone"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="" htmlFor="message">Message:</label>

                    <textarea
                      className="w-full rounded-lg border border-1 p-3 text-sm border-[#021333]"
                      placeholder="Message"
                      rows="8"
                      id="message"
                    ></textarea>
                  </div>

                  <div className="mt-4 flex justify-end">
                    <button
                      type="submit"
                      className="w-[150px] bg-primary white-color font-bold  h-[50px] my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#DF283A] before:to-[#DF283A] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#fff]"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

      
    )   
  }
  