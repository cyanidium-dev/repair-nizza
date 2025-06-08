"use client";

import Image from "next/image";
import logo from "../../../public/images/SVG/logo-svg.svg";
import dreamMob from "../../../public/images/image/dream-img-mob.webp";
import dreamDesk from "../../../public/images/image/dream-img-desk.webp";
import { useTranslations } from "next-intl";
import Container from "../Container";
import { useEffect, useState } from "react";
import motifMob1 from "../../../public/images/image/dream-motif-mob-1.png";
import motifMob2 from "../../../public/images/image/dream-motif-mob-2.png";
import motifDesk1 from "../../../public/images/image/dream-motif-desk-1.png";
import motifDesk2 from "../../../public/images/image/dream-motif-desk-2.png";
import motifShadowMob from "../../../public/images/image/service-bg-shadow.png";
import motifShadowDesk from "../../../public/images/image/service-shadow-desk.png";

const DreamRepair = () => {
  const t = useTranslations();
  const [cards, setCards] = useState([
    { id: 1, className: "top-card" },
    { id: 2, className: "middle-card" },
    { id: 3, className: "bottom-card" },
  ]);

  return (
    <Container className="relative">
      <Image
        src={motifMob1}
        alt="motif image"
        className="absolute top-[75px] right-0 -z-20 md:top-[95px] lg:hidden"
      />
      <Image
        src={motifDesk1}
        alt="motif image"
        className="absolute top-[50px] left-[90px] -z-20 lg:block hidden"
      />
      <Image
        src={motifShadowMob}
        alt="motif image"
        className="absolute top-[140px] right-0 -z-20 lg:hidden"
      />
      <Image
        src={motifShadowDesk}
        alt="motif image"
        className="absolute top-[160px] left-[360px] -z-20 lg:block hidden"
      />
      <Image
        src={motifShadowDesk}
        alt="motif image"
        className="absolute top-[40px] right-0 -z-20 lg:block hidden"
      />
      <div className="pt-[94px] pb-[137px] lg:flex lg:justify-between lg:flex-row-reverse lg:pt-[213px] lg:pb-[186px]">
        <div className="mb-auto">
          <h2 className="font-arsenal font-normal text-[32px] uppercase mb-[18px] md:text-center lg:text-right lg:text-[64px] lg:mb-1 lg:leading-none lg:w-[572px]">
            {t("dreamRepair.title")}
          </h2>
          <div className="lg:flex lg:justify-between lg:items-end lg:mb-9">
            <Image
              src={logo}
              alt="logo image"
              className="w-[46px] h-[72px] ml-auto mb-[26px] lg:w-[52px] lg:h-[80px] lg:m-0 lg:mb-4"
            />
            <button className="hidden md:hidden lg:block w-[317px] h-[52px] rounded-[32px] bg-primary-black text-primary-white font-montserrat font-normal text-sm leading-5 hover:bg-primary-white hover:text-primary-black hover:border-primary-black border transition-all duration-300">
              {t("dreamRepair.button")}
            </button>
          </div>
          <p className="font-montserrat font-light text-base mb-[50px] w-[273px] md:text-center md:w-[373px] md:mx-auto lg:text-xl lg:w-[355px] lg:text-left lg:m-0">
            {t("dreamRepair.description")}
          </p>
        </div>
        <div className="lg:mr-16 lg:shrink-0">
          <div className="pb-14 lg:pb-10">
            <div className="relative w-[310px] h-[207px] mx-auto lg:w-[564px] lg:h-[418px]">
              <div className="card-stack">
                {cards.map((card) => (
                  <div key={card.id} className={`card-item ${card.className}`}>
                    <Image
                      src={dreamMob}
                      alt="dream image"
                      className="w-[310px] h-[167px] object-cover mx-auto lg:hidden"
                    />
                    <Image
                      src={dreamDesk}
                      alt="dream image"
                      className="w-[564px] h-[338px] object-cover mx-auto hidden lg:block"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <p className="hidden font-montserrat font-light text-base text-primary-black md:block md:text-center md:mb-6 lg:w-[399px] lg:text-left lg:mb-0">
            {t("dreamRepair.additionalInfo")}
          </p>
        </div>
        <button className="lg:hidden w-[310px] h-[52px] rounded-[32px] bg-primary-black text-primary-white font-montserrat font-normal text-sm leading-5 mx-auto md:flex md:justify-center md:items-center hover:bg-primary-white hover:text-primary-black hover:border-primary-black border transition-all duration-300">
          {t("dreamRepair.button")}
        </button>
      </div>
      <Image
        src={motifMob2}
        alt="motif image"
        className="absolute bottom-[90px] md:bottom-[120px] right-0 -z-20 lg:hidden"
      />
      <Image
        src={motifDesk2}
        alt="motif image"
        className="absolute bottom-[110px] right-0 -z-20 lg:block hidden"
      />
      <Image
        src={motifShadowMob}
        alt="motif image"
        className="absolute bottom-[75px] right-0 -z-20 lg:bottom-[190px]"
      />
      <Image
        src={motifShadowMob}
        alt="motif image"
        className="absolute bottom-[120px] right-[200px] -z-20 lg:block hidden"
      />
    </Container>
  );
};

export default DreamRepair;
