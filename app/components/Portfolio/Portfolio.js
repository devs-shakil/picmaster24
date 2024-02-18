"use client";

import { useEffect, useState } from "react";
import { categories } from "@/app/data/portfolio";
import { portfolio } from "@/app/data/portfolio";
import Image from "next/image";
import "./Portfolio.css";
import Link from "next/link";




const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

 

  const filteredPortfolio = selectedCategory === "all"
      ? portfolio
      : portfolio.filter((item) => item.category.name === selectedCategory);

  return (
    <section className="section-spacing   py-10 px-5">
      <h2 className="text-5xl text-center font-semibold mb-5">Portfolio</h2>
      <p className="text-center text-base w-full md:w-3/5 mx-auto">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe doloribus excepturi voluptatibus eius eos ea, commodi enim animi consequuntur a maxime itaque tempora possimus, esse ipsum aliquid. Molestiae, vel esse?
      </p>
      <div className="mt-4">
        <ul className="flex items-center justify-center gap-2 md:gap-5 flex-wrap">
          <li className="">
            <button
              onClick={() => handleCategoryClick("all")}
              className={`${
                selectedCategory === "all" ? "secondary-button" : ""
              } border rounded-sm px-4 md:px-6 py-1 md:py-3 text-sm `}
            >
              All
            </button>
          </li>
          {categories.map((category) => (
            <li className="" key={category.id}>
              <button
                onClick={() => handleCategoryClick(category.title)}
                className={`${
                  selectedCategory === category.title ? "secondary-button" : ""
                } border rounded-sm px-4 md:px-6 py-1 md:py-3 text-sm `}
              >
                {category.title}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className=" mt-[35px] md:mt-[60px] ">
        <ul className="portfolio-card-wrapper">
          {filteredPortfolio.map((portfolioItem) => (
            <li
              key={portfolioItem.id}
              data-aos="zoom-in"
              className="group portfolio-item"
            >
              <div className="">
                <div className="portfolio-border">
                    <Image
                      className="max-h-[318px] w-full object-cover scale-100 group-hover:scale-110 transition-scale object-top"
                      src={portfolioItem.imageUrl}
                      loading="lazy"
                      alt={portfolioItem.title}
                      width="420"
                      height="318"
                    />
                </div>
                
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Portfolio;
