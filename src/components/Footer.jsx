"use client";

import React from "react";
import Container from "./Container";
import Link from "next/link";
import Image from "next/image";
import instagram from "../../public/images/SVG/instagram.svg";
import telegram from "../../public/images/SVG/telegram.svg";
import tikTok from "../../public/images/SVG/tik-tok.svg";

const Footer = () => {
  return (
    <footer className="bg-primary-black">
      <Container>
        <div className="pt-20 pb-[30px]">
          <div>
            <Link href="/">Solide renovation</Link>
            <p>Мы создаем лучшие решения в сфере ремонта</p>
          </div>
          <nav>
            <ul>
              <li>
                <Link href="/">Главная</Link>
              </li>
              <li>
                <Link href="/">Оставить заявку</Link>
              </li>
              <li>
                <Link href="/">Портфолио</Link>
              </li>
              <li>
                <Link href="/">Контакты</Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link href="/">Юридические данные</Link>
              </li>
              <li>
                <Link href="/">Публичный договор</Link>
              </li>
              <li>
                <Link href="/">Оферта</Link>
              </li>
              <li>
                <Link href="/">Конфиденциальность</Link>
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
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
