"use client";

import Image from "next/image";
import logo from "../../../public/images/SVG/logo-svg.svg";
import dreamMob from "../../../public/images/image/dream-img-mob.webp";
import dreamDesk from "../../../public/images/image/dream-img-desk.webp";
import { useTranslations } from "next-intl";
import Container from "../Container";

const DreamRepair = () => {
  const t = useTranslations();

  return (
    <Container>
      <div className="py-[94px] lg:flex lg:justify-between lg:flex-row-reverse lg:pt-[213px] lg:pb-[186px]">
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
          <Image
            src={dreamMob}
            alt="dream image"
            className="mb-[59px] mx-auto lg:hidden"
          />
          <Image
            src={dreamDesk}
            alt="dream image"
            className="mb-[59px] mx-auto hidden lg:block lg:mx-0 lg:mb-20"
          />
          <p className="hidden font-montserrat font-light text-base text-primary-black md:block md:text-center md:mb-6 lg:w-[399px] lg:text-left lg:mb-0">
            {t("dreamRepair.additionalInfo")}
          </p>
        </div>
        <button className="lg:hidden w-[310px] h-[52px] rounded-[32px] bg-primary-black text-primary-white font-montserrat font-normal text-sm leading-5 mx-auto md:flex md:justify-center md:items-center hover:bg-primary-white hover:text-primary-black hover:border-primary-black border transition-all duration-300">
          {t("dreamRepair.button")}
        </button>
      </div>
    </Container>
  );
};

export default DreamRepair;
