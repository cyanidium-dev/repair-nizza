"use client";

import React from "react";
import Container from "./Container";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
import instagram from "../../public/images/SVG/instagram.svg";
import telegram from "../../public/images/SVG/telegram.svg";
import tikTok from "../../public/images/SVG/tik-tok.svg";
import icon from "../../public/images/SVG/footer-icon.svg";

const Footer = () => {
  const t = useTranslations("footer");

  return (
    <footer className="bg-primary-black">
      <Container>
        <div className="pt-20 pb-[30px] md:flex md:flex-wrap md:gap-7">
          <div className="flex flex-col gap-3 mb-10">
            <Link
              href="/"
              className="font-arsenal font-normal text-xl text-primary-white leading-[22px] uppercase hover:scale-105 transition-all duration-300"
            >
              Solide renovation
            </Link>
            <p className="font-montserrat font-light text-xs text-primary-white w-[195px]">
              {t("slogan")}
            </p>
          </div>
          <nav>
            <ul className="flex flex-col gap-4 mb-8 md:items-center">
              <li className="hover:scale-105 transition-all duration-300">
                <Link
                  href="/"
                  className="font-montserrat font-normal text-sm text-primary-white uppercase"
                >
                  {t("navigation.main")}
                </Link>
              </li>
              <li className="hover:scale-105 transition-all duration-300">
                <Link
                  href="/"
                  className="font-montserrat font-normal text-sm text-primary-white uppercase"
                >
                  {t("navigation.request")}
                </Link>
              </li>
              <li className="hover:scale-105 transition-all duration-300">
                <Link
                  href="/"
                  className="font-montserrat font-normal text-sm text-primary-white uppercase"
                >
                  {t("navigation.portfolio")}
                </Link>
              </li>
              <li className="hover:scale-105 transition-all duration-300">
                <Link
                  href="/"
                  className="font-montserrat font-normal text-sm text-primary-white uppercase"
                >
                  {t("navigation.contacts")}
                </Link>
              </li>
            </ul>
            <ul className="flex flex-col gap-4 mb-16 md:items-center">
              <li className="hover:scale-105 transition-all duration-300">
                <Link
                  href="/"
                  className="font-montserrat font-normal text-sm text-primary-white uppercase"
                >
                  {t("legal.data")}
                </Link>
              </li>
              <li className="hover:scale-105 transition-all duration-300">
                <Link
                  href="/"
                  className="font-montserrat font-normal text-sm text-primary-white uppercase"
                >
                  {t("legal.contract")}
                </Link>
              </li>
              <li className="hover:scale-105 transition-all duration-300">
                <Link
                  href="/"
                  className="font-montserrat font-normal text-sm text-primary-white uppercase"
                >
                  {t("legal.offer")}
                </Link>
              </li>
              <li className="hover:scale-105 transition-all duration-300">
                <Link
                  href="/"
                  className="font-montserrat font-normal text-sm text-primary-white uppercase"
                >
                  {t("legal.privacy")}
                </Link>
              </li>
            </ul>
          </nav>
          <address className="flex flex-col gap-3 mb-6">
            <a
              className="font-montserrat font-normal text-xs not-italic text-primary-white uppercase leading-[18px] hover:scale-105 transition-all duration-300"
              href="tel:+380970067656"
            >
              +380-97-006-76-56
            </a>
            <a
              className="font-montserrat font-normal text-xs not-italic text-primary-white uppercase leading-[18px] hover:scale-105 transition-all duration-300"
              href="mailto:email@gmail.com"
            >
              email@gmail.com
            </a>
          </address>
          <ul className="flex gap-5 mb-[94px]">
            <li>
              <Link href="/">
                <Image
                  src={instagram}
                  alt="instagram"
                  width={24}
                  height={24}
                  className="hover:scale-105 transition-all duration-300"
                />
              </Link>
            </li>
            <li>
              <Link href="/">
                <Image
                  src={telegram}
                  alt="telegram"
                  width={24}
                  height={24}
                  className="hover:scale-105 transition-all duration-300"
                />
              </Link>
            </li>
            <li>
              <Link href="/">
                <Image
                  src={tikTok}
                  alt="tik tok"
                  width={24}
                  height={24}
                  className="hover:scale-105 transition-all duration-300"
                />
              </Link>
            </li>
          </ul>
          <p className="font-montserrat font-normal text-base not-italic text-primary-white uppercase leading-[29px] mb-6 md:mb-0 md:mt-auto">
            &copy; 2025 Solide renovation
          </p>
          <div className="md:ml-auto">
            <p className="font-raleway font-normal text-[6px] text-primary-white leading-6 uppercase tracking-[0.08em]">
              {t("createdBy")}
            </p>
            <div className="flex items-center gap-[6px]">
              <p className="font-raleway font-medium text-base text-primary-white leading-6 uppercase tracking-[0.04em]">
                Code-site.art
              </p>
              <Image src={icon} alt="icon" />
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
