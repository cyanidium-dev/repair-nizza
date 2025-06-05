"use client";

import Image from "next/image";
import logo from "../../../public/images/SVG/logo-svg.svg";
import dreamMob from "../../../public/images/image/dream-img-mob.webp";
import { useTranslations } from "next-intl";
import Container from "../Container";

const DreamRepair = () => {
  const t = useTranslations();

  return (
    <Container>
      <div className="py-[94px]">
        <h2 className="font-arsenal font-normal text-[32px] uppercase mb-[18px] md:text-center">
          {t("dreamRepair.title")}
        </h2>
        <Image
          src={logo}
          alt="logo image"
          className="w-[46px] h-[72px] ml-auto mb-[26px]"
        />
        <p className="font-montserrat font-light text-base mb-[50px] w-[273px] md:text-center md:w-[373px] md:mx-auto">
          {t("dreamRepair.description")}
        </p>
        <Image src={dreamMob} alt="dream image" className="mb-[59px] mx-auto" />
        <p className="hidden">{t("dreamRepair.additionalInfo")}</p>
        <button className="w-[310px] h-[52px] rounded-[32px] bg-primary-black text-primary-white font-montserrat font-normal text-sm leading-5 mx-auto md:flex md:justify-center md:items-center hover:bg-primary-white hover:text-primary-black hover:border-primary-black border transition-all duration-300">
          {t("dreamRepair.button")}
        </button>
      </div>
    </Container>
  );
};

export default DreamRepair;
