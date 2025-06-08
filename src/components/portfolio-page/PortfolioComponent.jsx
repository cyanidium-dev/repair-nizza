"use client";

import React from "react";
import Container from "../Container";
import { useTranslations } from "next-intl";

const PortfolioComponent = () => {
  const t = useTranslations("portfolioPage");

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
        </div>
      </Container>
    </div>
  );
};

export default PortfolioComponent;
