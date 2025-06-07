"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import Container from "../Container";
import imgMob1 from "../../../public/images/image/leave-request-img/leave-request-mob-1.webp";
import imgMob2 from "../../../public/images/image/leave-request-img/leave-request-mob-2.webp";
import imgMob3 from "../../../public/images/image/leave-request-img/leave-request-mob-3.webp";
import motifMob1 from "../../../public/images/image/leave-request-img/leave-motif-mob-1.png";
import motifMob2 from "../../../public/images/image/leave-request-img/leave-motif-mob-2.png";
import shadowMob from "../../../public/images/image/leave-request-img/leave-shadow-mob.png";

const HeroPath = () => {
  const t = useTranslations("leaveRequest.hero");

  return (
    <Container>
      <div className="pt-[30px] pb-[94px]">
        <h1 className="font-arsenal font-normal text-[32px] text-center leading-[38px] text-primary-black uppercase mb-[264px] mx-auto relative">
          {t("title")}
        </h1>
        <Image
          src={motifMob1}
          alt="leave-motif-mob-1"
          className="absolute top-[175px] left-0 -z-20"
        />
        <Image
          src={shadowMob}
          alt="leave-motif-mob-1"
          className="absolute top-[45px] right-[5px] -z-10 opacity-50 w-full"
        />
        <Image
          src={motifMob2}
          alt="leave-motif-mob-1"
          className="absolute top-[230px] right-0 -z-20"
        />
        <div>
          <h2 className="font-arsenal font-normal text-[32px] leading-[39px] text-primary-black uppercase mb-6">
            {t("repairType.title")}
          </h2>
          <p className="font-montserrat font-light text-sm text-primary-black mb-10">
            {t("repairType.description")}
          </p>
          <div className="flex flex-col gap-6">
            <div>
              <Image
                src={imgMob1}
                alt="leave-request-img"
                className="rounded-xl"
              />
              <p className="font-arsenal font-normal text-base text-center text-primary-black uppercase">
                {t("repairType.types.capital")}
              </p>
            </div>
            <div>
              <Image
                src={imgMob2}
                alt="leave-request-img"
                className="rounded-xl"
              />
              <p className="font-arsenal font-normal text-base text-center text-primary-black uppercase">
                {t("repairType.types.cosmetic")}
              </p>
            </div>
            <div>
              <Image
                src={imgMob3}
                alt="leave-request-img"
                className="rounded-xl"
              />
              <p className="font-arsenal font-normal text-base text-center text-primary-black uppercase">
                {t("repairType.types.design")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default HeroPath;
