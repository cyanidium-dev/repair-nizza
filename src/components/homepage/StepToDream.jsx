"use client";

import Image from "next/image";
import Container from "../Container";
import { useTranslations } from "next-intl";
import step1Mob from "../../../public/images/image/step-1-mob.png";
import step2Mob from "../../../public/images/image/step-2-mob.png";

const StepToDream = () => {
  const t = useTranslations("stepToDream");

  return (
    <Container className="relative">
      <div className="pt-[94px] pb-[98px]">
        <Image
          src={step1Mob}
          alt="path of three"
          className="absolute top-0 right-0 -z-10"
        />
        <h2 className="font-arsenal font-normal text-[32px] text-primary-black uppercase mb-[147px] w-[286px] leading-tight md:text-center md:mx-auto">
          {t("title")}
        </h2>
        <p className="font-montserrat font-light text-base text-primary-black mb-[264px] w-[290px] md:text-center md:mx-auto">
          {t("description")}
        </p>
        <Image
          src={step2Mob}
          alt="path of three"
          className="absolute bottom-[130px] left-0 -z-10"
        />
        <button className="font-montserrat font-normal text-sm text-primary-white bg-primary-black rounded-[32px] w-[310px] h-[52px] flex justify-center items-center mx-auto hover:bg-transparent hover:text-primary-black hover:border-primary-black border transition-all duration-300">
          {t("button")}
        </button>
      </div>
    </Container>
  );
};

export default StepToDream;
