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
                        <div key={image.id} className="w-full h-[650px] max-w-full">
                            <Image
                                src={image.image}
                                alt={image.alt}
                                loading="lazy"
                                width={1900}
                                height={650} 
                                className="h-full w-full object-cover no-repeat"
                                
                            />
                           
                        </div>
                    ))
                    }
                </Slider>
            </section>
        </>
    )
}