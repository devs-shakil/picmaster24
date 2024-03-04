'use client';
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { heroSliderImg } from "@/app/data/heroSlider";
import Image from "next/image";
import './heroSlider.css'

export default function HeroSlider(){
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        adaptiveHeight: true,
        autoplay:true,
        autoplaySpeed:3000,
        arrows:false,

       
  };
    return(
         <section className="overflow-hidden max-w-full">
                <Slider {...settings}>
                    {
                    heroSliderImg.map((image) =>(
                        <div key={image.id} className="w-full h-full max-w-full max-h-[650px] -mb-4">
                            <Image
                                src={image.image}
                                alt={image.alt}
                                loading="lazy"
                                width={1900}
                                height={620} 
                                className=" w-full object-contain no-repeat max-w-full h-auto"
                                
                            />
                           
                        </div>
                    ))
                    }
                </Slider>
        </section>
    )
}