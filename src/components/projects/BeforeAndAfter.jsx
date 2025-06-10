"use client";

import React from "react";
import Image from "next/image";
import Container from "../Container";
import { useTranslations } from "next-intl";
import mobileIcon from "../../../public/images/SVG/before-after-mob.svg";
import desktopIcon from "../../../public/images/SVG/before-after-desk.svg";

const BeforeAndAfter = ({ data }) => {
  const t = useTranslations("projectPage");

  if (!data) return null;

  return (
    <Container className="pt-[136px] pb-[94px] lg:py-[150px]">
      <div className="flex flex-col gap-3 md:gap-6 lg:gap-5">
        {/* Mobile Version */}
        <div className="block md:hidden">
          <h2 className="font-arsenal font-normal text-[22px] text-primary-black mb-10 text-center">
            {t("beforeAfter.title")}
          </h2>
          <div className="flex flex-col gap-3 relative">
            <div className="relative w-[310px] h-[355px]">
              {data.before?.asset?.url && (
                <Image
                  src={data.before.asset.url}
                  alt={t("beforeAfter.before")}
                  fill
                  className="object-cover rounded-lg"
                  sizes="310px"
                />
              )}
            </div>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
              <Image src={mobileIcon} alt="" width={64} height={64} />
            </div>
            <div className="relative w-[310px] h-[355px]">
              {data.after?.asset?.url && (
                <Image
                  src={data.after.asset.url}
                  alt={t("beforeAfter.after")}
                  fill
                  className="object-cover rounded-lg"
                  sizes="310px"
                />
              )}
            </div>
          </div>
        </div>

        {/* Tablet Version */}
        <div className="hidden md:flex lg:hidden justify-center gap-4 relative">
          <div className="flex flex-col items-center">
            <h3 className="font-arsenal text-2xl text-primary-black mb-6">
              {t("beforeAfter.before")}
            </h3>
            <div className="relative w-[310px] h-[355px]">
              {data.before?.asset?.url && (
                <Image
                  src={data.before.asset.url}
                  alt={t("beforeAfter.before")}
                  fill
                  className="object-cover rounded-lg"
                  sizes="310px"
                />
              )}
            </div>
          </div>
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <Image src={desktopIcon} alt="" width={60} height={60} />
          </div>
          <div className="flex flex-col items-center">
            <h3 className="font-arsenal text-2xl text-primary-black mb-6">
              {t("beforeAfter.after")}
            </h3>
            <div className="relative w-[310px] h-[355px]">
              {data.after?.asset?.url && (
                <Image
                  src={data.after.asset.url}
                  alt={t("beforeAfter.after")}
                  fill
                  className="object-cover rounded-lg"
                  sizes="310px"
                />
              )}
            </div>
          </div>
        </div>

        {/* Desktop Version */}
        <div className="hidden lg:flex justify-center gap-5 relative">
          <div className="flex flex-col items-center">
            <h3 className="font-arsenal text-3xl text-primary-black mb-[10px]">
              {t("beforeAfter.before")}
            </h3>
            <div className="relative w-[590px] h-[618px]">
              {data.before?.asset?.url && (
                <Image
                  src={data.before.asset.url}
                  alt={t("beforeAfter.before")}
                  fill
                  className="object-cover rounded-lg"
                  sizes="590px"
                />
              )}
            </div>
          </div>
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <Image src={desktopIcon} alt="" width={72} height={72} />
          </div>
          <div className="flex flex-col items-center">
            <h3 className="font-arsenal text-3xl text-primary-black mb-[10px]">
              {t("beforeAfter.after")}
            </h3>
            <div className="relative w-[590px] h-[618px]">
              {data.after?.asset?.url && (
                <Image
                  src={data.after.asset.url}
                  alt={t("beforeAfter.after")}
                  fill
                  className="object-cover rounded-lg"
                  sizes="590px"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default BeforeAndAfter;
