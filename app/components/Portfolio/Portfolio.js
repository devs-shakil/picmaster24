"use client";

import { useEffect, useState,useCallback  } from "react";
import { categories } from "@/app/data/portfolio";
import { portfolio } from "@/app/data/portfolio";
import { imgLightBoxSrc } from "@/app/data/portfolio";
import Image from "next/image";
import "./Portfolio.css";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import ImageViewer from 'react-simple-image-viewer';



const Portfolio = ({title,subtitle}) => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const pathname = usePathname();
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
 

  const filteredPortfolio = selectedCategory === "all"
      ? portfolio
      : portfolio.filter((item) => item.category.name === selectedCategory);

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  return (
    <section className="section-spacing   py-10 px-5">
      <h2 className="text-3xl md:text-5xl font-bold py-3 text-center">{title}</h2>
      <p className="text-center text-base w-full md:w-3/5 mx-auto">
        {subtitle}</p>
      <div className="mt-4">
        <ul className="flex items-center justify-center gap-2 md:gap-5 flex-wrap">
          <li className="">
            <button
              onClick={() => handleCategoryClick("all")}
              className={`${
                selectedCategory === "all" ? "active" : ""
              } border rounded-sm px-4 md:px-6 py-2 md:py-3 text-xs lg:text-sm inline-flex items-center`}
            >
              All
            </button>
          </li>
          {categories.map((category) => (
            <li className="" key={category.id}>
              <button
                onClick={() => handleCategoryClick(category.title)}
                className={`${
                  selectedCategory === category.title ? "active" : ""
                } border  px-4 md:px-6 py-2 md:py-3 text-xs lg:text-sm rounded-sm inline-flex items-center`}
              >
                {category.title}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className=" mt-[35px] md:mt-[60px] ">
        <ul className="portfolio-card-wrapper">
          {filteredPortfolio.map((portfolioItem, index) => (
            <li
              key={portfolioItem.id}
              data-aos="zoom-in"
              className="group portfolio-item"
            >
              <div className="">
                <div className="portfolio-border">
                    <Image
                      className="ease-in-out delay-150 transition-all max-h-[400px] w-full object-contain scale-100 group-hover:scale-110 transition-scale object-center rounded-xl shadow-sm hover:shadow-md cursor-pointer hover:border-gray-100"
                      src={portfolioItem.imageUrl}
                      loading="lazy"
                      alt={portfolioItem.title}
                      width="500"
                      height="500"
                      onClick={ () => openImageViewer(index) }
                    />
                </div>
                
              </div>
            </li>
          ))}
        </ul>
      </div>
       {isViewerOpen && (
        <ImageViewer
          src={ imgLightBoxSrc }
          currentIndex={ currentImage }
          disableScroll={ false }
          closeOnClickOutside={ true }
          onClose={ closeImageViewer }
        />
      )}
    </section>
   
  );
};

export default Portfolio;
