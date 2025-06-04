"use client";
import { useTranslations } from "next-intl";
import Container from "../Container";
import Image from "next/image";
import logo from "../../../public/images/SVG/logo-svg.svg";
import motifMob from "../../../public/images/image/service-motif-mob.png";
import motifMob2 from "../../../public/images/image/service-motif-2-mob.png";
import bgShadow from "../../../public/images/image/service-bg-shadow.png";
import bgShadow2 from "../../../public/images/image/service-bg-shadow-2.png";
import sericeImg1Mob1 from "../../../public/images/image/service-img-1-mob.webp";
import sericeImg2Mob2 from "../../../public/images/image/service-img-2-mob.webp";
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
    <Container>
      <div className="pt-[94px] mb-[215px] w-[310px] relative">
        <div className="relative mb-16">
          <h2 className="font-arsenal font-normal text-[22px] text-primary-black uppercase w-[299px] mb-[31px]">
            {t("title")}
          </h2>
          <Image
            src={logo}
            alt="logo image"
            width={36}
            height={56}
            className="ml-auto relative my-8"
          />
          <Image
            src={motifMob}
            alt="motif image"
            className="absolute top-[55px] right-[-10px] -z-20"
          />
          <Image
            src={bgShadow}
            alt="motif image"
            className="absolute top-[90px] right-[-10px] -z-10"
          />
          <p className="font-montserrat font-light text-sm text-primary-black text-right w-[290px] ml-auto">
            {t("description")}
          </p>
        </div>
        <div className="mb-9">
          <Image
            src={sericeImg1Mob1}
            alt="service image"
            className="mb-10 rounded-lg"
          />
          <div className="mb-7">
            <div
              className="flex justify-between items-center mb-[22px] w-[310px] cursor-pointer"
              onClick={() => toggleCard("cosmetic")}
            >
              <h3 className="font-arsenal font-normal text-xl text-primary-black uppercase">
                {t("cards.cosmetic.title")}
              </h3>
              <Image
                src={openCards.cosmetic ? minus : plus}
                alt={openCards.cosmetic ? "icon minus" : "icon plus"}
                className="transition-transform duration-300"
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
              <p className="font-montserrat font-light text-xs text-primary-black">
                {t("cards.cosmetic.description")}
              </p>
            </div>
          </div>
          <div className="mb-7">
            <div
              className="flex justify-between items-center mb-[22px] w-[310px] cursor-pointer"
              onClick={() => toggleCard("capital")}
            >
              <h3 className="font-arsenal font-normal text-xl text-primary-black uppercase">
                {t("cards.capital.title")}
              </h3>
              <Image
                src={openCards.capital ? minus : plus}
                alt={openCards.capital ? "icon minus" : "icon plus"}
                className="transition-transform duration-300"
                style={{
                  transform: openCards.capital ? "rotate(180deg)" : "rotate(0)",
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
              <p className="font-montserrat font-light text-xs text-primary-black">
                {t("cards.capital.description")}
              </p>
            </div>
          </div>
          <div>
            <div
              className="flex justify-between items-center mb-[22px] w-[310px] cursor-pointer"
              onClick={() => toggleCard("fullSupport")}
            >
              <h3 className="font-arsenal font-normal text-xl text-primary-black uppercase">
                {t("cards.fullSupport.title")}
              </h3>
              <Image
                src={openCards.fullSupport ? minus : plus}
                alt={openCards.fullSupport ? "icon minus" : "icon plus"}
                className="transition-transform duration-300"
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
              <p className="font-montserrat font-light text-xs text-primary-black">
                {t("cards.fullSupport.description")}
              </p>
            </div>
          </div>
        </div>
        <Image
          src={sericeImg2Mob2}
          alt="second service image"
          className="rounded-lg"
        />
        <Image
          src={motifMob2}
          alt="motif image"
          className="absolute bottom-[-175px] right-0 -z-20"
        />
        <Image
          src={bgShadow2}
          alt="motif image"
          className="absolute bottom-[-185px] right-0 -z-10"
        />
      </div>
      <div className="pb-[94px]">
        <h2 className="font-arsenal font-normal text-[32px] text-primary-black uppercase mb-6 leading-[39px]">
          {t("uniqueness.title")}
        </h2>
        <p className="font-montserrat font-light text-sm text-primary-black mb-12">
          {t("uniqueness.description")}
        </p>
        <ul className="flex gap-8">
          <li className="flex flex-col">
            <p className="font-arsenal font-normal text-[40px] text-primary-black leading-[72px]">
              {t("uniqueness.stats.satisfied.value")}
            </p>
            <p className="font-montserrat font-normal text-xs text-primary-black">
              {t("uniqueness.stats.satisfied.label")}
            </p>
          </li>
          <li className="flex flex-col">
            <p className="font-arsenal font-normal text-[40px] text-primary-black leading-[72px]">
              {t("uniqueness.stats.completed.value")}
            </p>
            <p className="font-montserrat font-normal text-xs text-primary-black">
              {t("uniqueness.stats.completed.label")}
            </p>
          </li>
          <li className="flex flex-col">
            <p className="font-arsenal font-normal text-[40px] text-primary-black leading-[72px]">
              {t("uniqueness.stats.experience.value")}
            </p>
            <p className="font-montserrat font-normal text-xs text-primary-black">
              {t("uniqueness.stats.experience.label")}
            </p>
          </li>
        </ul>
      </div>
    </Container>
  );
};

export default OurService;
