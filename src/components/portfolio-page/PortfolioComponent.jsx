"use client";

import React, { useState, useMemo } from "react";
import Container from "../Container";
import { useTranslations } from "next-intl";
import Image from "next/image";
import motif from "../../../public/images/image/porto-page-motif.png";
import shadow from "../../../public/images/image/porto-page-shadow.png";
import arrowWhite from "../../../public/images/SVG/arrow-white-portfolio.svg";
import arrowBlack from "../../../public/images/SVG/arrow-black-portfolio.svg";
import arrowDiagonal from "../../../public/images/SVG/arrow-diagonal-portfolio.svg";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";

const PortfolioCard = ({ data }) => {
  const router = useRouter();
  const locale = useLocale();

  const handleProjectClick = () => {
    router.push(`/${locale}/projects/${data._id}`);
  };

  if (!data?.title || !data?.title[locale]) return null;

  return (
    <div className="relative w-[310px] md:w-[310px] lg:w-[387px]">
      {data.mainImage?.asset?.url && (
        <div className="relative w-[310px] h-[402px]">
          <Image
            src={data.mainImage.asset.url}
            alt={data.title[locale]}
            fill
            className="rounded-[20px] object-cover"
          />
        </div>
      )}
      <div className="absolute bottom-0 left-0 w-[310px] rounded-b-[20px] backdrop-blur-[26px] shadow-[inset_0_4px_13px_0_rgba(255,255,255,0.25)] bg-[rgba(18,18,18,0.26)] pt-4 pb-5 pr-10 pl-[25px]">
        <h3 className="font-arsenal font-normal text-base text-primary-white leading-[19px] w-[174px] uppercase mb-3 lg:text-xl lg:w-[246px]">
          {data.title[locale]}
        </h3>
        <p className="font-montserrat font-light text-xs lg:text-sm text-primary-white">
          {data.subtitle[locale]}
        </p>
      </div>
      <button
        onClick={handleProjectClick}
        className="absolute top-[260px] right-[30px] w-[55px] h-[55px] flex items-center justify-center bg-primary-white rounded-full hover:scale-110 transition-all duration-300"
      >
        <Image src={arrowDiagonal} alt="arrow button" />
      </button>
    </div>
  );
};

const PortfolioComponent = ({ projects }) => {
  const t = useTranslations("portfolioPage");
  const [currentPage, setCurrentPage] = useState(0);
  const [activeFilter, setActiveFilter] = useState("all");
  const itemsPerPage = 4;

  const filteredProjects = useMemo(() => {
    if (!projects) return [];
    if (activeFilter === "all") return projects;
    return projects.filter((project) => project.style === activeFilter);
  }, [projects, activeFilter]);

  const handlePrevClick = () => {
    setCurrentPage((prev) =>
      prev > 0
        ? prev - 1
        : Math.ceil(filteredProjects.length / itemsPerPage) - 1
    );
  };

  const handleNextClick = () => {
    setCurrentPage((prev) =>
      prev < Math.ceil(filteredProjects.length / itemsPerPage) - 1
        ? prev + 1
        : 0
    );
  };

  const currentItems = filteredProjects.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);

  return (
    <div>
      <Container className="relative">
        <Image
          src={motif}
          alt="motif image"
          className="hidden lg:block absolute top-[-60px] right-0"
        />
        <Image
          src={shadow}
          alt="shadow image"
          className="hidden lg:block absolute top-0 right-0"
        />
        <div className="pt-[34px] pb-[94px]">
          <h1 className="font-arsenal font-normal text-primary-black uppercase text-[22px] mb-6 md:text-3xl md:text-center lg:text-5xl lg:text-left">
            {t("title")}
          </h1>
          <div className="flex flex-col gap-2 mb-10 md:flex-row md:justify-center lg:gap-5 lg:justify-start lg:mb-[50px]">
            <button
              onClick={() => {
                setActiveFilter("all");
                setCurrentPage(0);
              }}
              className={`w-[310px] md:w-[234px] lg:w-[234px] h-[34px] lg:h-[52px] rounded-[40px] font-arsenal font-normal text-xs md:text-sm lg:text-xl leading-[14px] lg:leading-6 transition-all duration-300 relative z-10 ${
                activeFilter === "all"
                  ? "bg-primary-black text-primary-white"
                  : "bg-transparent border border-primary-black text-primary-black hover:bg-primary-black hover:text-primary-white"
              }`}
            >
              {t("filters.minimalism")}
            </button>
            <button
              onClick={() => {
                setActiveFilter("neoclassic");
                setCurrentPage(0);
              }}
              className={`w-[310px] md:w-[234px] lg:w-[186px] h-[34px] lg:h-[52px] rounded-[40px] font-arsenal font-normal text-xs md:text-sm lg:text-xl leading-[14px] lg:leading-6 transition-all duration-300 relative z-10 ${
                activeFilter === "neoclassic"
                  ? "bg-primary-black text-primary-white"
                  : "bg-transparent border border-primary-black text-primary-black hover:bg-primary-black hover:text-primary-white"
              }`}
            >
              {t("filters.neoclassic")}
            </button>
            <button
              onClick={() => {
                setActiveFilter("modern");
                setCurrentPage(0);
              }}
              className={`w-[310px] md:w-[234px] lg:w-[186px] h-[34px] lg:h-[52px] rounded-[40px] font-arsenal font-normal text-xs md:text-sm lg:text-xl leading-[14px] lg:leading-6 transition-all duration-300 relative z-10 ${
                activeFilter === "modern"
                  ? "bg-primary-black text-primary-white"
                  : "bg-transparent border border-primary-black text-primary-black hover:bg-primary-black hover:text-primary-white"
              }`}
            >
              {t("filters.modern")}
            </button>
          </div>

          <div className="flex flex-col gap-[26px] mb-10 md:flex-row md:flex-wrap md:justify-center md:gap-[26px]">
            {filteredProjects.length === 0 ? (
              <div className="w-full text-center font-arsenal text-xl md:text-2xl lg:text-3xl text-primary-black relative z-10">
                {t("noProjects")}
              </div>
            ) : (
              currentItems.map((project) => (
                <PortfolioCard key={project._id} data={project} />
              ))
            )}
          </div>

          {filteredProjects.length > 0 && (
            <div className="flex justify-center items-center gap-6 md:gap-10">
              <div
                onClick={handlePrevClick}
                className="border border-primary-black rounded-full w-[54px] h-[54px] flex items-center justify-center hover:bg-primary-black group transition-all duration-300 cursor-pointer"
              >
                <div className="bg-transparent border border-primary-black rounded-full w-[27px] h-[27px] flex items-center justify-center group-hover:border-primary-white transition-all duration-300">
                  <Image
                    src={arrowBlack}
                    alt="arrow button"
                    className="block group-hover:hidden transition-transform duration-300 rotate-180"
                  />
                  <Image
                    src={arrowWhite}
                    alt="arrow button"
                    className="hidden group-hover:block transition-transform duration-300"
                  />
                </div>
              </div>

              <div className="flex gap-4 items-center">
                {Array.from({ length: totalPages }, (_, i) => (
                  <span
                    key={i}
                    className={`font-montserrat text-lg cursor-pointer ${
                      currentPage === i
                        ? "border border-primary-black rounded-full w-[30px] h-[30px] flex items-center justify-center"
                        : ""
                    }`}
                    onClick={() => setCurrentPage(i)}
                  >
                    {i + 1}
                  </span>
                ))}
              </div>

              <div
                onClick={handleNextClick}
                className="border border-primary-black rounded-full w-[54px] h-[54px] flex items-center justify-center hover:bg-primary-black group transition-all duration-300 cursor-pointer"
              >
                <div className="bg-transparent border border-primary-black rounded-full w-[27px] h-[27px] flex items-center justify-center group-hover:border-primary-white transition-all duration-300">
                  <Image
                    src={arrowBlack}
                    alt="arrow button"
                    className="block group-hover:hidden transition-transform duration-300"
                  />
                  <Image
                    src={arrowWhite}
                    alt="arrow button"
                    className="hidden group-hover:block transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

export default PortfolioComponent;
