"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import Container from "../Container";
import imgMob1 from "../../../public/images/image/leave-request-img/leave-request-mob-1.webp";
import imgMob2 from "../../../public/images/image/leave-request-img/leave-request-mob-2.webp";
import imgMob3 from "../../../public/images/image/leave-request-img/leave-request-mob-3.webp";
import imgDesk1 from "../../../public/images/image/leave-request-img/leave-request-desk-1.webp";
import imgDesk2 from "../../../public/images/image/leave-request-img/leave-request-desk-2.webp";
import imgDesk3 from "../../../public/images/image/leave-request-img/leave-request-desk-3.webp";
import motifMob1 from "../../../public/images/image/leave-request-img/leave-motif-mob-1.png";
import motifMob2 from "../../../public/images/image/leave-request-img/leave-motif-mob-2.png";
import motifDesk1 from "../../../public/images/image/leave-request-img/leave-motif-desk-1.png";
import motifDesk2 from "../../../public/images/image/leave-request-img/leave-motif-desk-2.png";
import shadowMob from "../../../public/images/image/leave-request-img/leave-shadow-mob.png";
import shadowDesk from "../../../public/images/image/leave-request-img/leave-shadow-desk.png";
import mainMotifMob from "../../../public/images/image/leave-request-img/request-page-motif-mob.png";
import mainMotifDesk from "../../../public/images/image/leave-request-img/request-page-motif-desk.png";

const HeroPath = () => {
  const t = useTranslations("leaveRequest.hero");

  return (
    <div className="relative">
      <Image
        src={mainMotifMob}
        alt="leave-motif-mob-1"
        className="absolute top-[125px] right-0 -z-30 lg:hidden"
      />
      <Image
        src={mainMotifDesk}
        alt="leave-motif-mob-1"
        className="absolute top-[-130px] right-[-90px] -z-30 lg:block hidden"
      />
      <Container>
        <div className="pt-[30px] pb-[94px] lg:pt-[71px] lg:pb-[70px]">
          <h1 className="font-arsenal font-normal text-[32px] text-center leading-[38px] text-primary-black uppercase mb-[264px] mx-auto relative lg:text-5xl lg:w-[539px] lg:text-left lg:mb-[134px]">
            {t("title")}
          </h1>
          <Image
            src={motifMob1}
            alt="leave-motif-mob-1"
            className="absolute top-[90px] left-0 -z-20 lg:hidden"
          />
          <Image
            src={motifDesk1}
            alt="leave-motif-mob-1"
            className="absolute top-[-90px] left-0 -z-10 hidden lg:block"
          />
          <Image
            src={shadowMob}
            alt="leave-motif-mob-1"
            className="absolute top-[125px] right-[5px] -z-20 lg:hidden"
          />
          <Image
            src={shadowMob}
            alt="leave-motif-mob-1"
            className="absolute top-[45px] left-[5px] -z-10 opacity-20 lg:hidden"
          />
          <Image
            src={shadowDesk}
            alt="leave-motif-mob-1"
            className="absolute top-0 right-0 -z-20 hidden lg:block"
          />
          <Image
            src={shadowDesk}
            alt="leave-motif-mob-1"
            className="absolute top-[-245px] left-[-90px] -z-10 hidden lg:block"
          />
          <Image
            src={motifMob2}
            alt="leave-motif-mob-1"
            className="absolute top-[175px] md:top-[160px] right-0 -z-20 lg:hidden"
          />
          <Image
            src={motifDesk2}
            alt="leave-motif-mob-1"
            className="absolute bottom-[190px] right-0 -z-10 hidden lg:block"
          />
          <div>
            <h2 className="font-arsenal font-normal text-[32px] leading-[39px] text-primary-black uppercase mb-6 md:text-center lg:text-left lg:text-4xl lg:leading-[43px] lg:mb-5">
              {t("repairType.title")}
            </h2>
            <p className="font-montserrat font-light text-sm text-primary-black mb-10 md:text-center lg:text-left lg:text-base lg:leading-[19px] lg:w-[479px] lg:mb-16">
              {t("repairType.description")}
            </p>
            <div className="flex flex-col gap-6 md:items-center lg:flex-row lg:gap-5">
              <div>
                <Image
                  src={imgMob1}
                  alt="leave-request-img"
                  className="rounded-xl mb-3 lg:hidden"
                />
                <Image
                  src={imgDesk1}
                  alt="leave-request-img"
                  className="rounded-xl mb-[18px] hidden lg:block"
                />
                <p className="font-arsenal font-normal text-base text-center text-primary-black uppercase">
                  {t("repairType.types.capital")}
                </p>
              </div>
              <div>
                <Image
                  src={imgMob2}
                  alt="leave-request-img"
                  className="rounded-xl mb-3 lg:hidden"
                />
                <Image
                  src={imgDesk2}
                  alt="leave-request-img"
                  className="rounded-xl mb-[18px] hidden lg:block"
                />
                <p className="font-arsenal font-normal text-base text-center text-primary-black uppercase">
                  {t("repairType.types.cosmetic")}
                </p>
              </div>
              <div>
                <Image
                  src={imgMob3}
                  alt="leave-request-img"
                  className="rounded-xl mb-3 lg:hidden"
                />
                <Image
                  src={imgDesk3}
                  alt="leave-request-img"
                  className="rounded-xl mb-[18px] hidden lg:block"
                />
                <p className="font-arsenal font-normal text-base text-center text-primary-black uppercase">
                  {t("repairType.types.design")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HeroPath;
