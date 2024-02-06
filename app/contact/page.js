
import { FaPhone } from "react-icons/fa";
import { MdMail  } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import './contact.css'
import Link from "next/link";
import {socialIcon, contactUs } from '../data/navigation'

export default function contact() {
  const test = "re_Spo8btjZ_KLAAwQCcUvbHW6MwMwrhEYVa"
      async function create(formData) {
       
        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${test}`,
          },
          body: JSON.stringify({
            from: "shakil.info82@gmail.com",
            to: "devs.shakil@gmail.com",
            subject: formData.get("subject"),
            text: "This works!",
          }),
        });
        console.log("Email sent!");
      }
    return (
    
        <section className="bg-gray-50">
          <div className="mx-auto container px-5 py-5 md:py-10 ">
            <div className="grid grid-cols-1 lg:grid-cols-5 shadow-lg ">
                <div className="lg:col-span-2 lg:py-12 bg-primary color-white px-10 flex flex-col gap-6 justify-center py-7 text-center md:text-left md:justify-center ">
                   <div>
                    <h2 className="text-3xl md:text-4xl font-bold pb-2">Contact Information</h2>
                      <p className="text-base font-semibold ">Contact us, we will reply as soon as possible</p>
                   </div>
                    <div className="flex flex-col gap-4 text-sm my-5 contact items-center md:items-start md:text-left ">
                      {contactUs.map((item, index) =>(
                          <Link key={index} href={item.href} className="flex gap-4 items-center "  target="_blank">
                            <span>{item.icon}</span>
                            <span>{item.label}</span>
                          </Link>
                      ))}
                      
                </div>
                <ul className=" flex justify-center gap-1 w-full lg:justify-start social-media">
                  {socialIcon.map((link, index) =>(
                      <li key={index} className="">
                          <Link
                              href={link.href}
                              rel="noreferrer"
                              target="_blank"
                              className="color-secondary transition hover:text-teal-700/75 white-bg p-3 inline-flex rounded-md "
                              >
                            {link.icon}
                          </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className=" bg-white p-4  lg:col-span-3 lg:p-12">
                <form action="{create}" className="space-y-4">
                  <div className="flex flex-col gap-1"> 
                    <label 
                        htmlFor="name"
                        className=""
                      >
                        Full Name: 
                    </label>               
                    <input
                      className="w-full rounded-lg  p-3 text-sm border border-1 border-[#021333] h-[54px] "
                      placeholder="Enter Full Name"
                      type="text"
                      id="name"
                      name='subject'
                    />
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="flex flex-col gap-1">
                      <label htmlFor="email">
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
                      <label htmlFor="phone">
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

                  <div className="mt-4 flex justify-end text-sm ">
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
  