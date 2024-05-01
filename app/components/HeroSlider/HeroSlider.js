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
        autoplaySpeed:2000,
        arrows:false,
        fade:true

       
  };
    return(
         <section className="hero-section-slider">
              <Slider {...settings}>
                    {
                    heroSliderImg.map((image) =>(
                        <div key={image.id} className={`hero-slide max-h-[700px] ${image.id == 2 ? 'gray-color' : ''}`}>
                            <Image
                                src={image.image}
                                alt={image.alt}
                                loading="lazy"
                                width={1900}
                                height={600} 
                                className="w-full h-full object-contain max-h-[600px]"
                                
                            />
                           
                        </div>
                    ))
                    }
                </Slider>
        </section>
    )
}