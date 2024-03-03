'use client';
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { heroSliderImg } from "@/app/data/heroSlider";
import Image from "next/image";

export default function HeroSlider(){
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        adaptiveHeight: true,
        autoplay:true,
        autoplaySpeed:3000,

       
  };
    return(
        <>
            <section>
                <Slider {...settings}>
                    {
                    heroSliderImg.map((image) =>(
                        <div key={image.id} className="w-full h-auto max-w-full max-h-[600px]">
                            <Image
                                src={image.image}
                                alt={image.alt}
                                loading="lazy"
                                width={1900}
                                height={650} 
                                className=" w-full object-contain no-repeat max-w-full h-auto"
                                
                            />
                           
                        </div>
                    ))
                    }
                </Slider>
            </section>
        </>
    )
}