"use client";

import Image from "next/image";
import Container from "../Container";
import { useTranslations } from "next-intl";
import step1Mob from "../../../public/images/image/step-1-mob.png";
import step2Mob from "../../../public/images/image/step-2-mob.png";
import step3Mob from "../../../public/images/image/step-1-desk.png";
import step4Mob from "../../../public/images/image/step-2-desk.png";

const StepToDream = () => {
  const t = useTranslations("stepToDream");

  return (
    <Container className="relative">
      <div className="pt-[94px] pb-[98px] lg:flex lg:justify-between lg:pt-[164px] lg:pb-[230px]">
        <Image
          src={step1Mob}
          alt="path of three"
          className="absolute top-0 right-0 -z-10 lg:hidden"
        />
        <Image
          src={step3Mob}
          alt="path of three"
          className="hidden absolute top-0 left-[400px] -z-10 lg:block"
        />
        <div>
          <h2 className="font-arsenal font-normal text-[32px] text-primary-black uppercase mb-[147px] w-[286px] leading-tight md:text-center md:mx-auto lg:text-[64px] lg:w-[572px] lg:text-left lg:mb-12">
            {t("title")}
          </h2>
          <button className="hidden lg:block font-montserrat font-normal text-sm text-primary-white bg-primary-black rounded-[32px] w-[317px] h-[52px] mr-auto hover:bg-transparent hover:text-primary-black hover:border-primary-black border transition-all duration-300">
            {t("button")}
          </button>
        </div>
        <p className="font-montserrat font-light text-base text-[#000] mb-[264px] w-[290px] md:text-center md:mx-auto lg:mx-0 lg:text-xl lg:w-[429px] lg:text-left lg:mb-0">
          {t("description")}
        </p>
        <Image
          src={step2Mob}
          alt="path of three"
          className="absolute bottom-[130px] left-0 -z-10 lg:hidden"
        />
        <Image
          src={step4Mob}
          alt="path of three"
          className="hidden absolute bottom-[42px] right-0 -z-10 lg:block"
        />
        <button className="lg:hidden font-montserrat font-normal text-sm text-primary-white bg-primary-black rounded-[32px] w-[310px] h-[52px] flex justify-center items-center mx-auto hover:bg-transparent hover:text-primary-black hover:border-primary-black border transition-all duration-300">
          {t("button")}
        </button>
      </div>
    </Container>
  );
};

export default StepToDream;
