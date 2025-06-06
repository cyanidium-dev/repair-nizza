"use client";

import Image from "next/image";
import Container from "../Container";
import { useTranslations } from "next-intl";
import imgMob from "../../../public/images/image/contacts-page-mob.webp";
import imgMotifMob from "../../../public/images/image/contacts-page-motif-mob.png";
import imgShadowMob from "../../../public/images/image/contacts-page-shadow-mob.png";

const Contacts = () => {
  const t = useTranslations("contacts");

  return (
    <Container>
      <div className="pt-[34px] pb-[94px]">
        <div>
          <h1 className="font-arsenal font-normal text-[32px] text-primary-black uppercase mb-4">
            {t("title")}
          </h1>
          <p className="font-montserrat font-light text-xs text-primary-black mb-[110px] leading-[15px]">
            {t("description")}
          </p>
        </div>
        <div className="relative">
          <Image
            src={imgMob}
            alt="interior image"
            className="rounded-lg mb-[100px]"
          />
          <Image
            src={imgMotifMob}
            alt="interior image"
            className="absolute top-[50px] right-[50px] rotate-[10deg] -z-10"
          />
          <Image
            src={imgShadowMob}
            alt="interior image"
            className="absolute top-[110px] right-[85px] -z-10"
          />
          <ul className="flex flex-col gap-8">
            <li>
              <p className="font-montserrat font-light mb-[13px] text-sm text-primary-black uppercase">
                Email
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
                Instagram
              </p>
              <a
                href="/"
                className="font-montserrat font-bold text-xs text-primary-black uppercase"
              >
                your.repair
              </a>
            </li>
            <li>
              <p className="font-montserrat font-light mb-[13px] text-sm text-primary-black uppercase">
                Telegram
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
                Phone
              </p>
              <a
                href="tel:+380984548993"
                className="font-montserrat font-bold text-xs text-primary-black uppercase"
              >
                +38-098-454-89-93
              </a>
            </li>
          </ul>
        </div>
      </div>
    </Container>
  );
};

export default Contacts;
