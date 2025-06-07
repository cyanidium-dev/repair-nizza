"use client";

import { useTranslations } from "next-intl";
import { Field } from "formik";
import bgImgMob from "../../../public/images/image/leave-request-img/leave-bg-mob.webp";
import bgImgDesk from "../../../public/images/image/leave-request-img/leave-bg-desk.webp";
import logo from "../../../public/images/image/leave-request-img/logo-white.png";
import Container from "../Container";
import Image from "next/image";

const SoloInput = () => {
  const t = useTranslations("leaveRequest");

  return (
    <>
      <div
        style={{ backgroundImage: `url(${bgImgMob.src})` }}
        className="flex flex-col gap-4 py-[113px] bg-cover bg-center lg:hidden"
      >
        <div className="pt-9 pb-11 backdrop-blur-[16px] shadow-[inset_0_4px_13px_0_rgba(255,255,255,0.25)] bg-[rgba(18,18,18,0.26)]">
          <Container>
            <div className="flex flex-col gap-9 md:flex-row md:items-center">
              <h2 className="font-arsenal text-[28px] font-normal text-primary-white uppercase leading-[34px]">
                {t("notFoundOption")}
              </h2>
              <Field
                as="textarea"
                name="customDescription"
                className="w-[310px] h-[149px] py-3 px-[14px] border border-primary-white bg-transparent rounded-lg resize-none placeholder:font-montserrat placeholder:font-normal placeholder:text-primary-white placeholder:text-sm placeholder:opacity-70 placeholder:leading-6"
                placeholder={t("describeRepair")}
              />
            </div>
          </Container>
        </div>
      </div>
      <div
        style={{ backgroundImage: `url(${bgImgDesk.src})` }}
        className=" py-9 bg-cover bg-center hidden lg:block"
      >
        <div className="py-8 backdrop-blur-[16px] shadow-[inset_0_4px_13px_0_rgba(255,255,255,0.25)] bg-[rgba(18,18,18,0.26)]">
          <Container>
            <div className="flex justify-between items-center">
              <h2 className="font-arsenal text-[28px] font-normal text-primary-white uppercase leading-[34px] lg:text-[36px] lg:leading-[44px] lg:w-[336px]">
                {t("notFoundOption")}
              </h2>
              <Image src={logo} alt="logo" />
              <Field
                as="textarea"
                name="customDescription"
                className="w-[310px] h-[149px] py-3 px-[14px] border border-primary-white bg-transparent rounded-lg resize-none lg:w-[571px] lg:h-[84px] placeholder:font-montserrat placeholder:font-normal placeholder:text-primary-white placeholder:text-sm placeholder:opacity-70 placeholder:leading-6"
                placeholder={t("describeRepair")}
              />
            </div>
          </Container>
        </div>
      </div>
    </>
  );
};

export default SoloInput;
