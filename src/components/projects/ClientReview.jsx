"use client";

import React from "react";
import Image from "next/image";
import Container from "../Container";
import { useTranslations, useLocale } from "next-intl";

const ClientReview = ({ data }) => {
  const t = useTranslations("projectPage");
  const locale = useLocale();

  if (!data) return null;

  return (
    <Container className="pb-[160px] lg:pb-[150px]">
      <h2 className="font-arsenal font-normal text-right text-[32px] leading-[39px] md:text-[32px] lg:text-[48px] lg:leading-[58px] text-primary-black uppercase mb-10 lg:mb-9">
        {t("clientReviewTitle")}
      </h2>
      <div className="relative w-full h-[402px] md:h-[400px] lg:h-[318px] rounded-[20px] lg:rounded-[12px] overflow-hidden">
        {data.roomPhoto?.asset?.url && (
          <Image
            src={data.roomPhoto.asset.url}
            alt="Room background"
            fill
            className="object-cover object-bottom lg:object-bottom"
            sizes="(max-width: 768px) 310px, (max-width: 1024px) 400px, 1200px"
          />
        )}
        <div className="absolute bottom-0 left-0 right-0 py-6 pl-[25px] pr-[40px] h-[205px] md:w-[350px] lg:w-[501px] lg:py-[58px] lg:pl-[50px] lg:pr-[90px] md:h-full backdrop-blur-[26px] shadow-[inset_0_4px_13px_0_rgba(255,255,255,0.25)] bg-[rgba(18,18,18,0.26)]">
          <div className="flex flex-col justify-center h-full">
            <div className="flex items-center gap-4 mb-3 md:mb-5 lg:gap-6 lg:mb-[28px]">
              {data.clientPhoto?.asset?.url && (
                <div className="relative w-[40px] h-[40px] lg:w-[68px] lg:h-[68px] rounded-full overflow-hidden">
                  <Image
                    src={data.clientPhoto.asset.url}
                    alt={data.clientName?.[locale] || data.clientName?.en}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 40px, 120px"
                  />
                </div>
              )}
              <h3 className="font-arsenal font-normal text-base lg:text-[32px] leading-[19px] lg:leading-[38px] text-primary-white uppercase">
                {data.clientName?.[locale] || data.clientName?.en}
              </h3>
            </div>
            <p className="font-montserrat font-light text-xs text-primary-white leading-[15px] lg:text-base lg:leading-[19px]">
              {data.text?.[locale]?.[0]?.children?.[0]?.text ||
                data.text?.en?.[0]?.children?.[0]?.text}
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ClientReview;
