"use client";

import { useEffect, useState } from "react";
import { categories } from "@/app/data/portfolio";
// import { portfolio } from "@/app/data/portfolio";
import Image from "next/image";
import "./Portfolio.css";
import Link from "next/link";


const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

 

  const filteredPortfolio =
    selectedCategory === "all"
      ? portfolio
      : portfolio.filter((item) => item.category.name === selectedCategory);

  return (
    <section className="section-spacing container mx-auto">
      <h2 className="section-title text-center mb-5">Portfolio</h2>
      <p className="text-center primary-text w-full md:w-3/5 mx-auto">
        Elevate your projects with our diverse portfolio showcasing innovative
        solutions, cutting-edge designs, and successful collaborations. Our past
        achievements and witness the transformative impact our services can
        bring to your business.
      </p>
      <div className="mt-4">
        <ul className="flex items-center justify-center gap-2 md:gap-5 flex-wrap">
          <li className="">
            <button
              onClick={() => handleCategoryClick("all")}
              className={`${
                selectedCategory === "all" ? "secondary-button" : ""
              } border rounded-3xl px-4 md:px-6 py-1 md:py-3 text-base `}
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
                } border rounded-3xl px-4 md:px-6 py-1 md:py-3 text-base `}
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
                  <Link
                    href={portfolioItem.url}
                    target="_blank"
                    className="block w-full h-full overflow-hidden"
                  >
                    <Image
                      className="max-h-[318px] w-full object-cover scale-100 group-hover:scale-110 transition-scale object-top"
                      src={portfolioItem.image}
                      loading="lazy"
                      alt={portfolioItem.title}
                      width="420"
                      height="318"
                    />
                  </Link>
                </div>
                <div className="p-[14px] portfolio-content">
                  <Link href={portfolioItem.url} target="_blank">
                    <h3 className="text-[20px] md:text-[24px] font-semibold pt-[20px] text-[#212121]">
                      {portfolioItem.title}
                    </h3>
                  </Link>
                  <p className="text-[#393939] text-base line-clamp-2">
                    {portfolioItem.short_description}
                  </p>
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
