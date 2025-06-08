"use client";
import { useTranslations } from "next-intl";
import Container from "../Container";
import Image from "next/image";
import logo from "../../../public/images/SVG/logo-svg.svg";
import motifDesk from "../../../public/images/image/service-motif-test.png";
import motifDesk2 from "../../../public/images/image/service-motif-desk.png";
import motifMob from "../../../public/images/image/service-motif-mob.png";
import motifMob2 from "../../../public/images/image/service-motif-2-mob.png";
import bgShadow from "../../../public/images/image/service-bg-shadow.png";
import bgShadow2 from "../../../public/images/image/service-bg-shadow-2.png";
import bgShadowDesk from "../../../public/images/image/service-shadow-desk.png";
import sericeImg1Mob1 from "../../../public/images/image/service-img-1-mob.webp";
import sericeImg2Mob2 from "../../../public/images/image/service-img-2-mob.webp";
import sericeImgMobDesk1 from "../../../public/images/image/service-img-1-desk.webp";
import sericeImgMobDesk2 from "../../../public/images/image/service-img-2-desk.webp";
import plus from "../../../public/images/SVG/icon-plus.svg";
import minus from "../../../public/images/SVG/icon-minus.svg";
import { useState } from "react";

const OurService = () => {
  const t = useTranslations("ourService");
  const [openCards, setOpenCards] = useState({
    cosmetic: false,
    capital: false,
    fullSupport: false,
  });

  const toggleCard = (cardName) => {
    setOpenCards((prev) => {
      if (!prev[cardName]) {
        return {
          cosmetic: false,
          capital: false,
          fullSupport: false,
          [cardName]: true,
        };
      } else {
        return {
          ...prev,
          [cardName]: false,
        };
      }
    });
  };

  return (
    <Container className="relative overflow-hidden">
      <Image
        src={motifDesk}
        alt="motif image"
        className="absolute top-[150px] right-[-400px] lg:block hidden"
      />
      <Image
        src={motifMob}
        alt="motif image"
        className="absolute top-[135px] right-0 -z-20 lg:hidden"
      />
      <Image
        src={bgShadow}
        alt="motif image"
        className="absolute top-[175px] md:top-[170px] md:rotate-[-3deg] right-0 -z-10  lg:hidden"
      />
      <div className="pt-[94px] mb-[215px] w-[310px] md:w-[715px] lg:w-[1200px] relative md:mb-[150px] lg:mb-[136px]">
        <div className="relative mb-16 lg:flex lg:justify-between lg:mb-[99px] lg:items-start">
          <h2 className="font-arsenal font-normal text-[22px] text-primary-black uppercase w-[299px] mb-[31px] md:text-3xl md:w-[450px] md:text-center lg:text-5xl lg:w-[660px] lg:text-left">
            {t("title")}
          </h2>
          <Image
            src={logo}
            alt="logo image"
            width={36}
            height={56}
            className="ml-auto relative my-8 lg:my-0 lg:ml-0 lg:w-[53px] lg:h-[80px]"
          />
          <p className="font-montserrat font-light text-sm text-primary-black text-right w-[290px] ml-auto md:text-base md:w-[450px] md:text-center lg:ml-0 lg:text-left lg:w-[333px]">
            {t("description")}
          </p>
        </div>
        <div className="">
          <div className="lg:flex">
            <Image
              src={sericeImg1Mob1}
              alt="service image"
              className="mb-10 rounded-lg lg:hidden"
            />
            <Image
              src={sericeImgMobDesk1}
              alt="service image"
              className="rounded-lg lg:block hidden lg:mr-[118px]"
            />
            <div>
              <div className="mb-7 lg:mb-10">
                <div
                  className="flex justify-between items-center mb-[22px] w-[310px] cursor-pointer lg:w-[590px] lg:mb-6"
                  onClick={() => toggleCard("cosmetic")}
                >
                  <h3 className="font-arsenal font-normal text-xl text-primary-black uppercase lg:text-[32px]">
                    {t("cards.cosmetic.title")}
                  </h3>
                  <Image
                    src={openCards.cosmetic ? minus : plus}
                    alt={openCards.cosmetic ? "icon minus" : "icon plus"}
                    className="transition-transform duration-300 lg:w-[32px] lg:h-[32px]"
                    style={{
                      transform: openCards.cosmetic
                        ? "rotate(180deg)"
                        : "rotate(0)",
                    }}
                  />
                </div>
                <div
                  className="overflow-hidden transition-all duration-300 ease-in-out"
                  style={{
                    maxHeight: openCards.cosmetic ? "200px" : "0",
                    opacity: openCards.cosmetic ? 1 : 0,
                  }}
                >
                  <p className="font-montserrat font-light text-xs text-primary-black md:w-[300px] lg:w-[530px] lg:text-sm">
                    {t("cards.cosmetic.description")}
                  </p>
                </div>
              </div>
              <div className="mb-7 lg:mb-10">
                <div
                  className="flex justify-between items-center mb-[22px] w-[310px] cursor-pointer lg:w-[590px] lg:mb-6"
                  onClick={() => toggleCard("capital")}
                >
                  <h3 className="font-arsenal font-normal text-xl text-primary-black uppercase lg:text-[32px]">
                    {t("cards.capital.title")}
                  </h3>
                  <Image
                    src={openCards.capital ? minus : plus}
                    alt={openCards.capital ? "icon minus" : "icon plus"}
                    className="transition-transform duration-300 lg:w-[32px] lg:h-[32px]"
                    style={{
                      transform: openCards.capital
                        ? "rotate(180deg)"
                        : "rotate(0)",
                    }}
                  />
                </div>
                <div
                  className="overflow-hidden transition-all duration-300 ease-in-out"
                  style={{
                    maxHeight: openCards.capital ? "200px" : "0",
                    opacity: openCards.capital ? 1 : 0,
                  }}
                >
                  <p className="font-montserrat font-light text-xs text-primary-black md:w-[300px] lg:w-[530px] lg:text-sm">
                    {t("cards.capital.description")}
                  </p>
                </div>
              </div>
              <div>
                <div
                  className="flex justify-between items-center mb-[22px] w-[310px] cursor-pointer lg:w-[590px] lg:mb-6"
                  onClick={() => toggleCard("fullSupport")}
                >
                  <h3 className="font-arsenal font-normal text-xl text-primary-black uppercase lg:text-[32px]">
                    {t("cards.fullSupport.title")}
                  </h3>
                  <Image
                    src={openCards.fullSupport ? minus : plus}
                    alt={openCards.fullSupport ? "icon minus" : "icon plus"}
                    className="transition-transform duration-300 lg:w-[32px] lg:h-[32px]"
                    style={{
                      transform: openCards.fullSupport
                        ? "rotate(180deg)"
                        : "rotate(0)",
                    }}
                  />
                </div>
                <div
                  className="overflow-hidden transition-all duration-300 ease-in-out"
                  style={{
                    maxHeight: openCards.fullSupport ? "200px" : "0",
                    opacity: openCards.fullSupport ? 1 : 0,
                  }}
                >
                  <p className="font-montserrat font-light text-xs text-primary-black md:w-[300px] lg:w-[530px] lg:text-sm">
                    {t("cards.fullSupport.description")}
                  </p>
                </div>
              </div>

              <Image
                src={sericeImg2Mob2}
                alt="second service image"
                className="rounded-lg mt-9 md:mt-0 md:ml-auto md:h-[295px] lg:hidden"
              />
              <Image
                src={sericeImgMobDesk2}
                alt="second service image"
                className="rounded-lg  lg:block hidden mt-[62px]"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="pb-[94px] lg:flex lg:justify-between lg:items-center">
        <div>
          <h2 className="font-arsenal font-normal text-[32px] text-primary-black uppercase mb-6 leading-[39px] lg:text-5xl lg:leading-[72px]">
            {t("uniqueness.title")}
          </h2>
          <p className="font-montserrat font-light text-sm text-primary-black mb-12 lg:text-base lg:w-[458px]">
            {t("uniqueness.description")}
          </p>
        </div>
        <ul className="flex gap-8 md:justify-center">
          <li className="flex flex-col lg:gap-2">
            <p className="font-arsenal font-normal text-[40px] text-primary-black leading-[72px] lg:text-5xl">
              {t("uniqueness.stats.satisfied.value")}
            </p>
            <p className="font-montserrat font-normal text-xs text-primary-black lg:text-[13px]">
              {t("uniqueness.stats.satisfied.label")}
            </p>
          </li>
          <li className="flex flex-col lg:gap-2">
            <p className="font-arsenal font-normal text-[40px] text-primary-black leading-[72px] lg:text-5xl">
              {t("uniqueness.stats.completed.value")}
            </p>
            <p className="font-montserrat font-normal text-xs text-primary-black lg:text-[13px] ">
              {t("uniqueness.stats.completed.label")}
            </p>
          </li>
          <li className="flex flex-col lg:gap-2">
            <p className="font-arsenal font-normal text-[40px] text-primary-black leading-[72px] lg:text-5xl">
              {t("uniqueness.stats.experience.value")}
            </p>
            <p className="font-montserrat font-normal text-xs text-primary-black lg:text-[13px]">
              {t("uniqueness.stats.experience.label")}
            </p>
          </li>
        </ul>
      </div>
      <Image
        src={motifMob2}
        alt="motif image"
        className="absolute bottom-[500px] md:bottom-[360px] right-0 md:right-[-25px] md:rotate-[8deg] -z-20 lg:hidden"
      />
      <Image
        src={motifDesk2}
        alt="motif image"
        className="absolute bottom-[280px] left-[305px] -z-20 lg:block hidden"
      />
      <Image
        src={bgShadow2}
        alt="motif image"
        className="hiden absolute bottom-[500px] md:bottom-[350px] right-0 -z-10 lg:hidden"
      />
      <Image
        src={bgShadowDesk}
        alt="motif image"
        className="absolute bottom-[285px] right-[110px] opacity-80 -z-10 lg:block hidden"
      />
    </Container>
  );
};

export default OurService;
