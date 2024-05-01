"use client"
import React, { useEffect , useState} from 'react'
// import 'keen-slider/keen-slider.min.css'
// import { useKeenSlider } from 'keen-slider/react' 
import { SlArrowRight, SlArrowLeft } from "react-icons/sl";
import { IoIosStar } from "react-icons/io";
import {testimonialItems} from './../../data/testimonial'

export default function Testimonial() {
  

    return (
       
        
        <section className="bg-gray-50">
          <div className="mx-auto container px-5 py-12 ">
            <div className=" items-end justify-between sm:flex sm:pe-6 lg:pe-8">
              <h2 className="max-w-xl text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Read trusted reviews from our customers
              </h2>
        
              <div className="mt-8 flex gap-4 lg:mt-0">
                <button
                  aria-label="Previous slide"
                  id="keen-slider-previous"
                  className="rounded-full border border-rose-600 p-3 text-rose-600 transition hover:bg-rose-600 hover:text-white"
                >
                  <SlArrowLeft />
                </button>
        
                <button
                  aria-label="Next slide"
                  id="keen-slider-next"
                  className="rounded-full border border-rose-600 p-3 text-rose-600 transition hover:bg-rose-600 hover:text-white"
                >
                  <SlArrowRight/>
                </button>
              </div>
            </div>
        
            <div className="-mx-6 mt-8 lg:col-span-2 lg:mx-0">
              <div id="keen-slider" className="keen-slider" ref={sliderRef} >

                {testimonialItems.map((testimonialDes, index) =>(
                <div className="keen-slider__slide" key={index}>
                  <blockquote
                    className="flex h-full flex-col justify-between bg-white p-6 shadow-sm sm:p-8 lg:p-12"
                  >
                    <div>
                      <div className="flex gap-0.5 text-green-500">
                        {Array.from({ length: testimonialDes.star }).map((_, starIndex) => (
                            <IoIosStar key={starIndex} />
                          ))}
                      </div>
        
                      <div className="mt-4">
                        <p className="text-2xl font-bold text-rose-600 sm:text-3xl">{testimonialDes.title}</p>
        
                        <p className="mt-4 leading-relaxed text-gray-700">
                          {testimonialDes.testimonial}
                        </p>
                      </div>
                    </div>
        
                    <footer className="mt-4 text-sm font-medium text-gray-700 sm:mt-6">
                      &mdash; {testimonialDes.footer}
                    </footer>
                  </blockquote>
                </div>
                  ))
                }
              
              </div>
            </div>
          </div>
        </section>
        
      
    )
  }
  