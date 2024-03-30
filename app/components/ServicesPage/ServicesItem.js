'use client';
import React, { useState } from 'react';
import './ServicesItem.css'
import { FaArrowLeft } from "react-icons/fa";

const ServicesItem = () => {
    const [sliderValue, setSliderValue] = useState(50);

    const handleSliderChange = (event) => {
        const value = event.target.value;
        setSliderValue(value);
    };
    return (
        <section>
            <div className='flex gap-2 container px-5'>
                <div className='w-full md:w-2/4'>
                    <h2>Gost Mannequin</h2>
                    <p>The Hollow-Man montage combines photography and postproduction. The procedure is simple: the piece of clothing is photographed on a doll, then the elements concealed by the doll are photographed separately. Then the doll is removed from the image and the missing elements are added.</p>
                    <ul>
                        <li>Provide realistically look</li>
                        <li>Custom Model Replacing</li>
                        <li>Precise Mannequin Removing</li>
                        <li>Stunning 3D/360 Image-Making</li>
                    </ul>
                </div>
                <div className='w-full md:w-2/4'>
                        <div className="before-after">
                            <img className="img back-img" src="https://www.dropbox.com/s/tdsrvvngq73cqex/before.jpg?raw=1" alt="before" />
                            <img className="img front-img" src="https://www.dropbox.com/s/vytawj8zjwfavb2/after.jpg?raw=1" alt="after" style={{ clipPath: `polygon(0 0, ${sliderValue}% 0, ${sliderValue}% 100%, 0% 100%)` }} />

                           <div className=''>
                                <input type="range" min="1" max="100" value={sliderValue} className="slider" name="slider" id="slider" onChange={handleSliderChange} />
                                <FaArrowLeft />
                           </div>
                        </div>
                </div>
            </div>
        </section>
    );
}

export default ServicesItem;
