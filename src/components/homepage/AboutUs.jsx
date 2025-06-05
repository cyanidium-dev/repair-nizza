"use client";

import bgMob from "../../../public/images/image/about-bg-mob.webp";
import Container from "../Container";
import { useTranslations } from "next-intl";

const AboutUs = () => {
  const t = useTranslations();

  return (
    <div
      style={{ backgroundImage: `url(${bgMob.src})` }}
      className="bg-cover bg-center h-[896px] w-full md:hidden"
    >
      <Container>
        <div className="pt-[72px] relative">
          <div>
            <h2 className="font-arsenal font-normal text-4xl text-primary-white uppercase mb-[18px] leading-[43px]">
              {t("aboutUs.title")}
            </h2>
            <p className="font-montserrat font-normal text-sm text-primary-white mb-9 w-[295px]">
              {t("aboutUs.description")}
            </p>
            <button className="w-[310px] h-[52px] rounded-[32px] bg-primary-white text-primary-black font-montserrat font-normal text-sm mx-auto leading-5 hover:bg-transparent hover:text-primary-white hover:border-primary-white border transition-all duration-300">
              {t("aboutUs.button")}
            </button>
          </div>
          <div className="absolute bottom-[-555px] left-0 w-[310px] rounded-t-[20px] py-9 px-[22px] backdrop-blur-[26px] shadow-[inset_0_4px_13px_0_rgba(255,255,255,0.25)] bg-[rgba(18,18,18,0.26)]">
            <h3 className="font-arsenal font-normal text-[32px] text-primary-white uppercase mb-9 leading-[38px]">
              {t("aboutUs.whyChooseUs.title")}
            </h3>
            <ul className="flex flex-col gap-4">
              <li className="gradient-border relative rounded-[6px] py-4 px-5 ">
                <p className="font-montserrat font-normal text-sm text-primary-white text-right relative">
                  {t("aboutUs.whyChooseUs.advantages.fullService")}
                </p>
                <div className="w-5 h-5 bg-primary-white rounded-full absolute top-1/2 -translate-y-1/2 left-3" />
              </li>
              <li className="gradient-border relative rounded-[6px] py-4 px-5 ">
                <p className="font-montserrat font-normal text-sm text-primary-white text-right relative">
                  {t("aboutUs.whyChooseUs.advantages.transparentEstimate")}
                </p>
                <div className="w-5 h-5 bg-primary-white rounded-full absolute top-1/2 -translate-y-1/2 left-3" />
              </li>
              <li className="gradient-border relative rounded-[6px] py-4 px-5 ">
                <p className="font-montserrat font-normal text-sm text-primary-white text-right relative">
                  {t("aboutUs.whyChooseUs.advantages.warranty")}
                </p>
                <div className="w-5 h-5 bg-primary-white rounded-full absolute top-1/2 -translate-y-1/2 left-3" />
              </li>
              <li className="gradient-border relative rounded-[6px] py-4 px-5 ">
                <p className="font-montserrat font-normal text-sm text-primary-white text-right relative">
                  {t("aboutUs.whyChooseUs.advantages.control")}
                </p>
                <div className="w-5 h-5 bg-primary-white rounded-full absolute top-1/2 -translate-y-1/2 left-3" />
              </li>
              <li className="gradient-border relative rounded-[6px] py-4 px-5 ">
                <p className="font-montserrat font-normal text-sm text-primary-white text-right relative">
                  {t("aboutUs.whyChooseUs.advantages.experience")}
                </p>
                <div className="w-5 h-5 bg-primary-white rounded-full absolute top-1/2 -translate-y-1/2 left-3" />
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutUs;
