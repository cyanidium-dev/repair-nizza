"use client";

import React, { useState } from "react";
import Container from "../Container";
import { useTranslations } from "next-intl";
import Image from "next/image";
import portfolioMob from "../../../public/images/image/portfolio-page.webp";
import arrowWhite from "../../../public/images/SVG/arrow-white-portfolio.svg";
import arrowBlack from "../../../public/images/SVG/arrow-black-portfolio.svg";
import arrowDiagonal from "../../../public/images/SVG/arrow-diagonal-portfolio.svg";

const portfolioData = [
  {
    id: 1,
    title: "Современный минимализм",
    description:
      "Светлый, функциональный интерьер с акцентом на чистоту линий и простоту.",
    image: portfolioMob,
  },
  {
    id: 2,
    title: "Современный минимализм",
    description:
      "Светлый, функциональный интерьер с акцентом на чистоту линий и простоту.",
    image: portfolioMob,
  },
  {
    id: 3,
    title: "Современный минимализм",
    description:
      "Светлый, функциональный интерьер с акцентом на чистоту линий и простоту.",
    image: portfolioMob,
  },
  {
    id: 4,
    title: "Современный минимализм",
    description:
      "Светлый, функциональный интерьер с акцентом на чистоту линий и простоту.",
    image: portfolioMob,
  },
  {
    id: 5,
    title: "Современный минимализм",
    description:
      "Светлый, функциональный интерьер с акцентом на чистоту линий и простоту.",
    image: portfolioMob,
  },
  {
    id: 6,
    title: "Современный минимализм",
    description:
      "Светлый, функциональный интерьер с акцентом на чистоту линий и простоту.",
    image: portfolioMob,
  },
  {
    id: 7,
    title: "Современный минимализм",
    description:
      "Светлый, функциональный интерьер с акцентом на чистоту линий и простоту.",
    image: portfolioMob,
  },
  {
    id: 8,
    title: "Современный минимализм",
    description:
      "Светлый, функциональный интерьер с акцентом на чистоту линий и простоту.",
    image: portfolioMob,
  },
];

const PortfolioCard = ({ title, description, image }) => {
  return (
    <div className="relative">
      <Image src={image} alt="portfolio image" className="rounded-[20px]" />
      <div className="absolute bottom-0 left-0 w-[310px] rounded-b-[20px] backdrop-blur-[26px] shadow-[inset_0_4px_13px_0_rgba(255,255,255,0.25)] bg-[rgba(18,18,18,0.26)] pt-4 pb-5 pr-10 pl-[25px]">
        <h3 className="font-arsenal font-normal text-base text-primary-white leading-[19px] w-[174px] uppercase mb-3 lg:text-xl lg:w-[246px]">
          {title}
        </h3>
        <p className="font-montserrat font-light text-xs lg:text-sm text-primary-white">
          {description}
        </p>
      </div>
      <button className="absolute top-[260px] right-[30px] w-[55px] h-[55px] flex items-center justify-center bg-primary-white rounded-full hover:scale-110 transition-all duration-300">
        <Image src={arrowDiagonal} alt="arrow button" />
      </button>
    </div>
  );
};

const PortfolioComponent = () => {
  const t = useTranslations("portfolioPage");
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 4;

  const handlePrevClick = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : 1));
  };

  const handleNextClick = () => {
    setCurrentPage((prev) => (prev < 1 ? prev + 1 : 0));
  };

  const currentItems = portfolioData.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <div>
      <Container>
        <div className="pt-[34px] pb-[94px]">
          <h1 className="font-arsenal font-normal text-primary-black uppercase text-[22px] mb-6 md:text-3xl md:text-center lg:text-5xl lg:text-left">
            {t("title")}
          </h1>
          <div className="flex flex-col gap-2 mb-10 md:flex-row md:justify-center lg:gap-5 lg:justify-start lg:mb-[50px]">
            <button className="w-[310px] md:w-[234px] lg:w-[234px] h-[34px] lg:h-[52px] bg-transparent border border-primary-black text-primary-black rounded-[40px] font-arsenal font-normal text-xs md:text-sm lg:text-xl leading-[14px] lg:leading-6 hover:bg-primary-black hover:text-primary-white transition-all duration-300">
              {t("filters.minimalism")}
            </button>
            <button className="w-[310px] md:w-[234px] lg:w-[186px] h-[34px] lg:h-[52px] bg-transparent border border-primary-black text-primary-black rounded-[40px] font-arsenal font-normal text-xs md:text-sm lg:text-xl leading-[14px] lg:leading-6 hover:bg-primary-black hover:text-primary-white transition-all duration-300">
              {t("filters.neoclassic")}
            </button>
            <button className="w-[310px] md:w-[234px] lg:w-[186px] h-[34px] lg:h-[52px] bg-transparent border border-primary-black text-primary-black rounded-[40px] font-arsenal font-normal text-xs md:text-sm lg:text-xl leading-[14px] lg:leading-6 hover:bg-primary-black hover:text-primary-white transition-all duration-300">
              {t("filters.modern")}
            </button>
          </div>

          <div className="flex flex-col gap-[26px] mb-10 md:flex-row md:flex-wrap md:justify-center md:gap-10">
            {currentItems.map((item) => (
              <PortfolioCard
                key={item.id}
                title={item.title}
                description={item.description}
                image={item.image}
              />
            ))}
          </div>

          <div className="flex justify-center items-center gap-6 md:gap-10">
            <div
              onClick={handlePrevClick}
              className="border border-primary-black rounded-full w-[54px] h-[54px] flex items-center justify-center hover:bg-primary-black group transition-all duration-300 cursor-pointer"
            >
              <div className="bg-transparent border border-primary-black rounded-full w-[27px] h-[27px] flex items-center justify-center group-hover:border-primary-white transition-all duration-300">
                <Image
                  src={arrowBlack}
                  alt="arrow button"
                  className="block group-hover:hidden transition-transform duration-300 rotate-180"
                />
                <Image
                  src={arrowWhite}
                  alt="arrow button"
                  className="hidden group-hover:block transition-transform duration-300"
                />
              </div>
            </div>

            <div className="flex gap-4 items-center">
              <span
                className={`font-montserrat text-lg cursor-pointer ${
                  currentPage === 0
                    ? "border border-primary-black rounded-full w-[30px] h-[30px] flex items-center justify-center"
                    : ""
                }`}
                onClick={() => setCurrentPage(0)}
              >
                1
              </span>
              <span
                className={`font-montserrat text-lg cursor-pointer ${
                  currentPage === 1
                    ? "border border-primary-black rounded-full w-[30px] h-[30px] flex items-center justify-center"
                    : ""
                }`}
                onClick={() => setCurrentPage(1)}
              >
                2
              </span>
            </div>

            <div
              onClick={handleNextClick}
              className="border border-primary-black rounded-full w-[54px] h-[54px] flex items-center justify-center hover:bg-primary-black group transition-all duration-300 cursor-pointer"
            >
              <div className="bg-transparent border border-primary-black rounded-full w-[27px] h-[27px] flex items-center justify-center group-hover:border-primary-white transition-all duration-300">
                <Image
                  src={arrowBlack}
                  alt="arrow button"
                  className="block group-hover:hidden transition-transform duration-300"
                />
                <Image
                  src={arrowWhite}
                  alt="arrow button"
                  className="hidden group-hover:block transition-transform duration-300 rotate-180"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default PortfolioComponent;
