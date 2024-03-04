'use client'
import React, { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import { servicesItems } from './../../data/services';
import './Services.css';

export default function Services() {
    const [positions, setPositions] = useState(servicesItems.map(() => 50));

    const handleSliderChange = (index, value) => {
        const newPositions = [...positions];
        newPositions[index] = value;
        setPositions(newPositions);
    };

    return (
        <section className="bg-gray-100 py-3 md:py-8">
            <div className="container px-5 mx-auto flex flex-col gap-4">
                <div className="pb-4">
                    <div className="text-center max-w-lg mx-auto md:max-w-5xl">
                        <h2 className="text-3xl md:text-5xl font-bold py-3">Services</h2>
                        <p className="text-base md:text-xl md:leading-8 color-primary">Explore our services below.</p>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 allow-slider" >
                    {servicesItems.map((item, index) => (
                        <div className="flex flex-col shadow-lg" key={index}>
                            <div className="rounded-t-lg relative ">
                                <div className="imageContainer ralative" style={{ '--position': `${positions[index]}%` }}>
                                    <div className="imageWrapper">
                                        <Image
                                            src={item.image.beforeImage}
                                            className="slider-image image-before w-full h-auto services-wrapper"
                                            width='500'
                                            height="400"
                                            loading="lazy"
                                            alt=""
                                        />
                                        <Image
                                            src={item.image.afterImage}
                                            className="slider-image w-full h-auto  services-wrapper"
                                            width='500'
                                            height="400"
                                            loading="lazy"
                                            alt=""
                                        />
                                        <input
                                            type="range"
                                            min={0}
                                            max={100}
                                            defaultValue={50}
                                            aria-label="Percentage of before photo shown"
                                            className="slider"
                                            value={positions[index]}
                                            onChange={(e) => handleSliderChange(index, e.target.value)}
                                        />
                                        <div className="slider-line" aria-hidden="true" />
                                        <div className="slider-button" aria-hidden="true">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={30}
                                                height={30}
                                                fill="currentColor"
                                                viewBox="0 0 256 256"
                                            >
                                                <rect width={256} height={256} fill="none" />
                                                <line
                                                    x1={128}
                                                    y1={40}
                                                    x2={128}
                                                    y2={216}
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={16}
                                                />
                                                <line
                                                    x1={96}
                                                    y1={128}
                                                    x2={16}
                                                    y2={128}
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={16}
                                                />
                                                <polyline
                                                    points="48 160 16 128 48 96"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={16}
                                                />
                                                <line
                                                    x1={160}
                                                    y1={128}
                                                    x2={240}
                                                    y2={128}
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={16}
                                                />
                                                <polyline
                                                    points="208 96 240 128 208 160"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={16}
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full bg-primary color-white py-5 px-8 min-h-[260px] rounded-b-lg" >
                                <h3 className="text-2xl text-center py-4 font-bold  ">{item.title}</h3>
                                <p className="text-base text-center pb-2 ">{item.subtitle}</p>
                                <Link
                                    href="/portfolio"
                                    className="mx-auto mt-2  w-[150px] bg-secondary color-white font-bold h-[50px] my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#F9F9F9] before:to-[#F9F9F9] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0  hover:text-[#DF283A]"
                                >
                                    Learn More
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
