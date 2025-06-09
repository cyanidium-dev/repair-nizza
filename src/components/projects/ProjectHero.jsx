"use client";

import Image from "next/image";
import { useLocale } from "next-intl";

const ProjectHero = ({ data }) => {
  const locale = useLocale();

  if (!data?.mobileMainImage?.asset?.url || !data?.mainImage?.asset?.url) {
    return null;
  }

  return (
    <div className="relative w-full">
      {/* Mobile Image with Blur Card */}
      <div className="md:hidden relative w-full">
        <div className="w-full">
          <Image
            src={data.mobileMainImage.asset.url}
            alt={data.title?.[locale] || "Project image"}
            width={310}
            height={660}
            className="w-full h-[660px] object-cover rounded-t-[28px]"
            priority
          />
        </div>
        <div className="absolute bottom-0 left-0 right-0 w-full py-8 px-6 h-[230px] backdrop-blur-[16px] shadow-[inset_0_4px_13px_0_rgba(255,255,255,0.25)] bg-[rgba(18,18,18,0.26)]">
          <h3 className="font-arsenal font-normal text-4xl text-primary-white mb-5 leading-[43px] uppercase text-center">
            {data.title?.[locale]}
          </h3>
          <p className="font-montserrat font-light text-base text-primary-white text-center w-[282px] mx-auto leading-5">
            {data.subtitle?.[locale]}
          </p>
        </div>
      </div>

      {/* Desktop Image */}
      <div className="hidden md:block">
        <Image
          src={data.mainImage.asset.url}
          alt={data.title?.[locale] || "Project image"}
          width={1440}
          height={453}
          className="w-full h-[453px] object-cover rounded-t-[20px]"
          priority
        />
      </div>
    </div>
  );
};

export default ProjectHero;
