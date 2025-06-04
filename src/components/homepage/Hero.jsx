"use client";

import bgImg from "../../../public/images/image/hero-img-mob.webp";
import { useTranslations } from "next-intl";
import HeroBlurCard from "./HeroBlurCard";

const Hero = () => {
  const t = useTranslations("hero");

  return (
    <div
      style={{ backgroundImage: `url(${bgImg.src})` }}
      className="bg-cover bg-center h-[730px] w-[360px] rounded-t-[28px] px-6 pt-[65px] mx-auto"
    >
      <div className="h-full flex flex-col">
        <div>
          <h1 className="font-arsenal font-normal text-4xl text-primary-white text-center mb-5 mx-auto">
            {t("title")}
          </h1>
          <p className="font-montserrat font-normal text-base text-primary-white text-center w-[262px] mx-auto mb-10">
            {t("subtitle")}
          </p>
          <button className="w-[312px] h-[52px] rounded-[32px] bg-primary-white text-primary-black font-montserrat font-medium text-sm mx-auto block">
            {t("button")}
          </button>
        </div>
        <div className="mt-auto flex justify-center">
          <HeroBlurCard />
        </div>
      </div>
    </div>
  );
};

export default Hero;
