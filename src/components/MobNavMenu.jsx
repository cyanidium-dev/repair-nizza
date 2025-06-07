"use client";

import Image from "next/image";
import closeBtn from "../../public/images/SVG/close-icon.svg";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { useEffect } from "react";

const MobNavMenu = ({ isOpen, setIsOpen, openModal }) => {
  const t = useTranslations();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 py-20 px-[60px] bg-primary-white z-30 w-full h-screen">
      <div className="flex flex-col w-[240px] md:w-[300px] mx-auto">
        <Image
          src={closeBtn}
          alt="close button"
          className="absolute top-[20px] right-[20px] cursor-pointer"
          width={16}
          height={16}
          onClick={() => setIsOpen(false)}
        />
        <h3 className="font-arsenal font-normal text-2xl md:text-3xl text-primary-black text-center uppercase mx-auto mb-4">
          {t("mobileMenu.discussProject")}
        </h3>
        <p className="font-montserrat font-light text-xs md:text-sm text-primary-black leading-5 text-center mb-8 mx-auto">
          {t("mobileMenu.leaveContacts")}
        </p>
        <button
          onClick={openModal}
          className="w-[241px] h-10 bg-transparent border border-primary-black text-primary-black font-montserrat font-light text-sm mx-auto rounded-[20px] mb-20 hover:bg-primary-black hover:text-primary-white transition-all duration-300"
        >
          {t("mobileMenu.contactButton")}
        </button>
        <nav>
          <ul className="flex flex-col gap-5 md:items-center">
            <li>
              <Link
                href="/portfolio"
                className="font-montserrat font-normal text-base text-primary-black"
                onClick={() => setIsOpen(false)}
              >
                {t("portfolio")}
              </Link>
            </li>
            <li>
              <Link
                href="/leave-request"
                className="font-montserrat font-normal text-base text-primary-black"
                onClick={() => setIsOpen(false)}
              >
                {t("request")}
              </Link>
            </li>
            <li>
              <Link
                href="/contacts"
                className="font-montserrat font-normal text-base text-primary-black"
                onClick={() => setIsOpen(false)}
              >
                {t("contacts")}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default MobNavMenu;
