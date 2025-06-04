"use client";

import bgImgMob from "../../../public/images/image/hero-img-mob.webp";
import bgImgDesk from "../../../public/images/image/hero-img-desk.webp";
import { useTranslations } from "next-intl";
import HeroBlurCard from "./HeroBlurCard";

const Hero = () => {
  const t = useTranslations("hero");

  return (
    <>
      <div
        style={{ backgroundImage: `url(${bgImgMob.src})` }}
        className="bg-cover bg-center h-[730px] w-[360px] rounded-t-[28px] px-6 pt-[65px] mx-auto md:hidden"
      >
        <div className="h-full flex flex-col">
          <div>
            <h1 className="font-arsenal font-normal text-4xl text-primary-white text-center mb-5 mx-auto">
              {t("title")}
            </h1>
            <p className="font-montserrat font-normal text-base text-primary-white text-center w-[262px] mx-auto mb-10">
              {t("subtitle")}
            </p>
            <button className="w-[312px] h-[52px] rounded-[32px] bg-primary-white text-primary-black font-montserrat font-medium text-sm mx-auto block hover:bg-primary-black hover:text-primary-white transition-all duration-300">
              {t("button")}
            </button>
          </div>
          <div className="mt-auto flex justify-center">
            <HeroBlurCard />
          </div>
        </div>
      </div>
      <div
        style={{ backgroundImage: `url(${bgImgDesk.src})` }}
        className="hidden md:block lg:hidden bg-cover bg-center h-[730px] w-[768px] rounded-t-[28px] px-6 pt-[65px] mx-auto"
      >
        <div className="h-full flex flex-col">
          <div>
            <h1 className="font-arsenal font-normal text-5xl text-primary-white text-center mb-5 mx-auto">
              {t("title")}
            </h1>
            <p className="font-montserrat font-normal text-lg text-primary-white text-center w-[262px] mx-auto mb-10">
              {t("subtitle")}
            </p>
            <button className="w-[312px] h-[52px] rounded-[32px] bg-primary-white text-primary-black font-montserrat font-medium text-sm mx-auto block hover:bg-primary-black hover:text-primary-white transition-all duration-300">
              {t("button")}
            </button>
          </div>
          <div className="mt-auto flex">
            <HeroBlurCard />
          </div>
        </div>
      </div>
      <div
        style={{ backgroundImage: `url(${bgImgDesk.src})` }}
        className="hidden lg:block bg-cover bg-center h-[730px] w-[1280px] rounded-t-[28px] px-10 pt-[94px] mx-auto relative"
      >
        <div className="h-full flex flex-col">
          <div className="flex justify-between">
            <p className="font-montserrat font-normal text-xl text-primary-white w-[262px]">
              {t("subtitle")}
            </p>
            <div>
              <h1 className="font-arsenal font-normal text-[83px] w-[772px] text-primary-white text-right mb-9 mx-auto leading-[100px]">
                {t("title")}
              </h1>
              <button className="w-[317px] h-[52px] rounded-[32px] bg-primary-white text-primary-black font-montserrat font-medium text-sm ml-auto block hover:bg-primary-black hover:text-primary-white transition-all duration-300">
                {t("button")}
              </button>
            </div>
          </div>
          <div className="mt-auto flex">
            <HeroBlurCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
