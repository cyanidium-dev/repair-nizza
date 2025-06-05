"use client";

import sectionBgMob from "../../../public/images/image/portfolio-bg-mob.webp";
import sectionBgDesk from "../../../public/images/image/portfolio-bg-desk.webp";
import Container from "../Container";
import { useTranslations } from "next-intl";
import portfolioMob from "../../../public/images/image/portfolio-mob.webp";
import Image from "next/image";
import arrowWhite from "../../../public/images/SVG/arrow-white-portfolio.svg";
import arrowBlack from "../../../public/images/SVG/arrow-black-portfolio.svg";
import arrowDiagonal from "../../../public/images/SVG/arrow-diagonal-portfolio.svg";
import { useEffect, useState } from "react";

const PortfolioSection = () => {
  const t = useTranslations();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Убираем слушатель при размонтировании
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const bgImage = windowWidth >= 768 ? sectionBgDesk.src : sectionBgMob.src;

  return (
    <div
      style={{ backgroundImage: `url(${bgImage})` }}
      className="bg-cover bg-center h-[866px] w-full mx-auto"
    >
      <Container>
        <div className="pt-[72px] mb-12">
          <h2 className="font-arsenal font-normal text-4xl text-primary-white text-center mb-[19px] mx-auto uppercase">
            {t("portfolioSection.title")}
          </h2>
          <p className="font-montserrat font-light text-sm text-primary-white text-center w-[242px] mx-auto mb-11 md:w-[300px]">
            {t("portfolioSection.description")}
          </p>
          <button className="w-[310px] h-[52px] rounded-[32px] bg-primary-white text-primary-black font-montserrat font-normal text-sm mx-auto leading-5 block hover:bg-primary-black hover:text-primary-white transition-all duration-300">
            {t("portfolioSection.button")}
          </button>
        </div>
        <div className="flex justify-center gap-6">
          <div className="mb-[26px] relative">
            <Image
              src={portfolioMob}
              alt="portfolio image"
              className="rounded-t-[20px] md:w-[345px]"
            />
            <div className="w-[310px] md:w-[345px] rounded-b-[20px] backdrop-blur-[26px] shadow-[inset_0_4px_13px_0_rgba(255,255,255,0.25)] bg-[rgba(18,18,18,0.26)] py-7 pl-6 pr-10">
              <h3 className="font-arsenal font-normal text-base text-primary-white leading-[19px] w-[174px] uppercase mb-4">
                Наш последний выполненный проект
              </h3>
              <p className="font-montserrat font-light text-xs text-primary-white">
                Создаём пространство, в котором хочется жить! Мы создали
                уникальный дизайн для дома в центре Ниццы...
              </p>
            </div>
            <button className="absolute top-[217px] md:top-[245px] right-[24px] w-[55px] h-[55px] flex items-center justify-center bg-primary-white rounded-full hover:scale-110 transition-all duration-300">
              <Image src={arrowDiagonal} alt="arrow button" />
            </button>
          </div>
          <div className="mb-[26px] relative hidden md:block">
            <Image
              src={portfolioMob}
              alt="portfolio image"
              className="rounded-t-[20px] md:w-[345px]"
            />
            <div className="w-[310px] md:w-[345px] backdrop-blur-[26px] shadow-[inset_0_4px_13px_0_rgba(255,255,255,0.25)] bg-[rgba(18,18,18,0.26)] py-7 pl-6 pr-10">
              <h3 className="font-arsenal font-normal text-base text-primary-white leading-[19px] w-[174px] uppercase mb-4">
                Наш последний выполненный проект
              </h3>
              <p className="font-montserrat font-light text-xs text-primary-white">
                Создаём пространство, в котором хочется жить! Мы создали
                уникальный дизайн для дома в центре Ниццы...
              </p>
            </div>
            <button className="absolute top-[217px] md:top-[245px] right-[24px] w-[55px] h-[55px] flex items-center justify-center bg-primary-white rounded-full hover:scale-110 transition-all duration-300">
              <Image src={arrowDiagonal} alt="arrow button" />
            </button>
          </div>
        </div>
        <div className="flex justify-center gap-6 md:gap-10">
          <div className="border border-primary-white rounded-full w-[54px] h-[54px] flex items-center justify-center hover:bg-primary-white group transition-all duration-300">
            <button className="bg-transparent border border-primary-white rounded-full w-[27px] h-[27px] flex items-center justify-center group-hover:border-primary-black transition-all duration-300">
              <Image
                src={arrowWhite}
                alt="arrow button"
                className="block group-hover:hidden"
              />
              <Image
                src={arrowBlack}
                alt="arrow button"
                className="rotate-180 hidden group-hover:block"
              />
            </button>
          </div>
          <div className="border border-primary-white rounded-full w-[54px] h-[54px] flex items-center justify-center hover:bg-primary-white group transition-all duration-300">
            <button className="bg-transparent border border-primary-white rounded-full w-[27px] h-[27px] flex items-center justify-center group-hover:border-primary-black transition-all duration-300">
              <Image
                src={arrowWhite}
                alt="arrow button"
                className="rotate-180 block group-hover:hidden"
              />
              <Image
                src={arrowBlack}
                alt="arrow button"
                className="hidden group-hover:block"
              />
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default PortfolioSection;
