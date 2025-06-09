"use client";

import Image from "next/image";
import Container from "../Container";
import { useTranslations } from "next-intl";
import imgMob from "../../../public/images/image/contacts-page-mob.webp";
import imgDesk from "../../../public/images/image/contacts-page-desk.webp";
import imgMotifMob from "../../../public/images/image/contacts-page-motif-mob.png";
import imgMotifDesk from "../../../public/images/image/contacts-page-motif-desk.png";
import imgShadowMob from "../../../public/images/image/contacts-page-shadow-mob.png";
import motifMob from "../../../public/images/image/contact-page-motif-mob.png";
import motifDesk from "../../../public/images/image/contact-page-motif-desk.png";
import shadowDesk from "../../../public/images/image/contact-page-shadow-desk.png";

const Contacts = () => {
  const t = useTranslations("contactPage");

  return (
    <Container className="relative">
      <Image
        src={motifMob}
        alt="motif image"
        className="absolute top-[110px] md:top-[60px] right-0 -z-10 lg:hidden"
      />
      <Image
        src={imgShadowMob}
        alt="interior image"
        className="absolute top-0 right-0 -z-10 opacity-50 lg:hidden"
      />
      <div className="pt-[34px] lg:pt-[54px] pb-[94px] lg:pb-[150px] lg:flex">
        <div className="mb-[110px] md:mb-[70px] lg:mr-[182px]">
          <h1 className="font-arsenal font-normal text-[32px] md:text-4xl text-primary-black uppercase mb-4 md:text-center lg:text-left lg:text-5xl lg:mb-5">
            {t("title")}
          </h1>
          <p className="font-montserrat font-light text-xs md:text-sm lg:text-base text-primary-black leading-[15px] md:text-center lg:text-left">
            {t("description")}
          </p>
        </div>
        <div className="relative lg:flex lg:flex-col-reverse lg:items-center">
          <Image
            src={imgMob}
            alt="interior image"
            className="rounded-lg mb-[100px] md:hidden"
          />
          <Image
            src={imgDesk}
            alt="interior image"
            className="hidden rounded-lg mb-[100px] lg:mb-0 md:block md:mx-auto"
          />
          <Image
            src={imgMotifMob}
            alt="interior image"
            className="absolute top-[50px] right-[50px] rotate-[10deg] md:top-[250px] md:right-[210px] -z-10 lg:hidden"
          />
          <Image
            src={imgMotifDesk}
            alt="interior image"
            className="hidden absolute top-0 right-[147px] -z-10 lg:block"
          />
          <Image
            src={imgShadowMob}
            alt="interior image"
            className="absolute top-[110px] md:top-[310px] right-[85px] md:right-[245px] -z-10 lg:top-[-40px] lg:right-[195px] lg:rotate-[-40deg] opacity-70"
          />
          <ul className="flex flex-col gap-8 md:flex-row md:justify-between lg:w-[679px] lg:mb-[90px]">
            <div className="flex flex-col gap-8 lg:gap-[52px]">
              <li>
                <p className="font-montserrat font-light mb-[13px] text-sm text-primary-black uppercase">
                  {t("contacts.email")}
                </p>
                <a
                  href="mailto:support@[yourdomain].com"
                  className="font-montserrat font-bold text-xs text-primary-black uppercase"
                >
                  support@[yourdomain].com
                </a>
              </li>
              <li>
                <p className="font-montserrat font-light mb-[13px] text-sm text-primary-black uppercase">
                  {t("contacts.instagram")}
                </p>
                <a
                  href="/"
                  className="font-montserrat font-bold text-xs text-primary-black uppercase"
                >
                  your.repair
                </a>
              </li>
            </div>
            <div className="flex flex-col gap-8 lg:gap-[52px]">
              <li>
                <p className="font-montserrat font-light mb-[13px] text-sm text-primary-black uppercase">
                  {t("contacts.telegram")}
                </p>
                <a
                  href="/"
                  className="font-montserrat font-bold text-xs text-primary-black uppercase"
                >
                  @yourusername
                </a>
              </li>
              <li>
                <p className="font-montserrat font-light mb-[13px] text-sm text-primary-black uppercase">
                  {t("contacts.phone")}
                </p>
                <a
                  href="tel:+380984548993"
                  className="font-montserrat font-bold text-xs text-primary-black uppercase"
                >
                  +38-098-454-89-93
                </a>
              </li>
            </div>
          </ul>
        </div>
      </div>
      <Image
        src={motifDesk}
        alt="motif image"
        className="absolute bottom-[-170px] left-0 -z-10 hidden lg:block"
      />
      <Image
        src={shadowDesk}
        alt="interior image"
        className="absolute -z-10 bottom-[-200px] left-0 lg:block hidden"
      />
    </Container>
  );
};

export default Contacts;
