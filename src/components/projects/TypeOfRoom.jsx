"use client";

import React from "react";
import Image from "next/image";
import Container from "../Container";
import { useTranslations, useLocale } from "next-intl";
import Logo from "../../../public/images/SVG/logo-svg.svg";

const TypeOfRoom = ({ data }) => {
  const t = useTranslations("projectPage");
  const locale = useLocale();

  if (!data) return null;

  const getDescription = () => {
    if (!data.description?.[locale]) return "";

    return data.description[locale]
      .map((block) => block.children.map((child) => child.text).join(""))
      .join(" ");
  };

  return (
    <Container className="pb-[94px] lg:pb-[150px]">
      {/* Mobile Version */}
      <div className="block md:hidden">
        <div className="flex flex-col gap-6">
          <div className="mb-[203px] md:mb-0">
            <h2 className="font-arsenal font-normal text-[32px] uppercase text-primary-black mb-6 leading-[39px]">
              {data.title?.[locale]}
            </h2>
            <p className="font-montserrat text-normal text-sm text-primary-black">
              {getDescription()}
            </p>
          </div>
          <div className="relative w-[310px] h-[172px] mx-auto">
            {data.image?.asset?.url && (
              <Image
                src={data.image.asset.url}
                alt={data.title?.[locale]}
                fill
                className="object-cover rounded-lg"
                sizes="310px"
              />
            )}
          </div>
        </div>
      </div>

      {/* Tablet Version */}
      <div className="hidden md:flex lg:hidden justify-between items-center gap-4">
        <div className="text-center w-[330px]">
          <h2 className="font-arsenal font-normal text-[32px] text-primary-black mb-6 leading-[39px]">
            {data.title?.[locale]}
          </h2>
          <p className="text-base text-primary-black">{getDescription()}</p>
        </div>
        <div className="relative w-[310px] h-[200px]">
          {data.image?.asset?.url && (
            <Image
              src={data.image.asset.url}
              alt={data.title?.[locale]}
              fill
              className="object-cover rounded-lg"
              sizes="310px"
            />
          )}
        </div>
      </div>

      {/* Desktop Version */}
      <div className="hidden lg:flex justify-between items-center">
        <div className="mb-auto">
          <h2 className="font-arsenal font-normal text-5xl leading-[58px] text-primary-black mb-5">
            {data.title?.[locale]}
          </h2>
          <p className="font-montserrat font-light text-base leading-[19px] text-primary-black w-[491px]">
            {getDescription()}
          </p>
        </div>
        <div className="mr-auto mt-auto">
          <Image
            src={Logo}
            alt="Logo"
            width={52}
            height={80}
            className="object-contain"
          />
        </div>
        <div className="relative w-[590px] h-[328px]">
          {data.image?.asset?.url && (
            <Image
              src={data.image.asset.url}
              alt={data.title?.[locale]}
              fill
              className="object-cover rounded-lg"
              sizes="590px"
            />
          )}
        </div>
      </div>
    </Container>
  );
};

export default TypeOfRoom;
