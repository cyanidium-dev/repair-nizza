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
        <div className="pt-20 pb-[30px]">
          <div>
            <Link href="/" className="font-arsenal font-normal">
              Solide renovation
            </Link>
            <p>{t("slogan")}</p>
          </div>
          <nav>
            <ul>
              <li>
                <Link href="/">{t("navigation.main")}</Link>
              </li>
              <li>
                <Link href="/">{t("navigation.request")}</Link>
              </li>
              <li>
                <Link href="/">{t("navigation.portfolio")}</Link>
              </li>
              <li>
                <Link href="/">{t("navigation.contacts")}</Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link href="/">{t("legal.data")}</Link>
              </li>
              <li>
                <Link href="/">{t("legal.contract")}</Link>
              </li>
              <li>
                <Link href="/">{t("legal.offer")}</Link>
              </li>
              <li>
                <Link href="/">{t("legal.privacy")}</Link>
              </li>
            </ul>
          </nav>
          <address>
            <a href="tel:+380970067656">+380-97-006-76-56</a>
            <a href="mailto:email@gmail.com">email@gmail.com</a>
          </address>
          <ul>
            <li>
              <Link href="/">
                <Image src={instagram} alt="instagram" />
              </Link>
            </li>
            <li>
              <Link href="/">
                <Image src={telegram} alt="telegram" />
              </Link>
            </li>
            <li>
              <Link href="/">
                <Image src={tikTok} alt="tik tok" />
              </Link>
            </li>
          </ul>
          <p>&copy; 2025 Solide renovation</p>
          <div>
            <p>{t("createdBy")}</p>
            <div>
              <p>Code-site.art</p>
              <Image src={icon} alt="icon" />
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
