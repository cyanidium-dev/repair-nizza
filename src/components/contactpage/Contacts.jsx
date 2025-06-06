"use client";

import Image from "next/image";
import Container from "../Container";
import { useTranslations } from "next-intl";
import imgMob from "../../../public/images/image/contacts-page-mob.webp";
import imgDesk from "../../../public/images/image/contacts-page-desk.webp";
import imgMotifMob from "../../../public/images/image/contacts-page-motif-mob.png";
import imgShadowMob from "../../../public/images/image/contacts-page-shadow-mob.png";

const Contacts = () => {
  const t = useTranslations("contactPage");

  return (
    <Container>
      <div className="pt-[34px] pb-[94px]">
        <div className="mb-[110px] md:mb-[70px]">
          <h1 className="font-arsenal font-normal text-[32px] md:text-4xl text-primary-black uppercase mb-4 md:text-center">
            {t("title")}
          </h1>
          <p className="font-montserrat font-light text-xs md:text-sm text-primary-black leading-[15px] md:text-center">
            {t("description")}
          </p>
        </div>
        <div className="relative">
          <Image
            src={imgMob}
            alt="interior image"
            className="rounded-lg mb-[100px] md:hidden"
          />
          <Image
            src={imgDesk}
            alt="interior image"
            className="hidden rounded-lg mb-[100px] md:block md:mx-auto"
          />
          <Image
            src={imgMotifMob}
            alt="interior image"
            className="absolute top-[50px] right-[50px] rotate-[10deg] md:top-[250px] md:right-[210px] -z-10"
          />
          <Image
            src={imgShadowMob}
            alt="interior image"
            className="absolute top-[110px] md:top-[310px] right-[85px] md:right-[245px] -z-10"
          />
          <ul className="flex flex-col gap-8 md:flex-row md:justify-between">
            <div className="flex flex-col gap-8">
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
            <div className="flex flex-col gap-8">
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
    </Container>
  );
};

export default Contacts;
