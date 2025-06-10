"use client";

import React, { useState } from "react";
import Image from "next/image";
import Container from "../Container";
import { useTranslations } from "next-intl";
import galleryIconBtnMob from "../../../public/images/SVG/gallery-icon-btn-mob.svg";
import galleryIconBtnDesk from "../../../public/images/SVG/gallery-icon-btn-desk.svg";

const ProjectGallery = ({ gallery }) => {
  const t = useTranslations("projectPage");
  const [currentPage, setCurrentPage] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [direction, setDirection] = useState("next");
  const imagesPerPage = 1;

  if (!gallery || gallery.length === 0) return null;

  const totalPages = Math.ceil(gallery.length / imagesPerPage);
  const currentImage = gallery[currentPage];

  const handlePrevPage = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setDirection("prev");
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const handleNextPage = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setDirection("next");
    setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
    setTimeout(() => setIsTransitioning(false), 300);
  };

  return (
    <Container className="pb-[67px] lg:pb-[150px]">
      <h2 className="font-arsenal font-normal text-[32px] leading-[39px] md:text-[32px] lg:text-5xl lg:leading-[58px] text-primary-black uppercase mb-10 lg:mb-9">
        {t("galleryTitle")}
      </h2>
      <div className="relative w-full h-[160px] md:h-[400px] lg:h-[620px] rounded-[20px] overflow-hidden">
        {currentImage?.asset?.url && (
          <div className="relative w-full h-full">
            <Image
              src={currentImage.asset.url}
              alt={`Gallery image ${currentPage + 1}`}
              fill
              className={`object-cover object-center transition-transform duration-300 ${
                isTransitioning
                  ? direction === "next"
                    ? "translate-x-[-100%]"
                    : "translate-x-[100%]"
                  : "translate-x-0"
              }`}
              sizes="(max-width: 768px) 310px, (max-width: 1024px) 400px, 1200px"
              priority
            />
          </div>
        )}

        {/* Desktop/Tablet Navigation Buttons */}
        <div className="hidden md:flex absolute inset-y-0 left-0 right-0 items-center justify-between px-2">
          <button
            onClick={handlePrevPage}
            className="flex items-center justify-center transition-transform hover:scale-110"
          >
            <Image
              src={galleryIconBtnDesk}
              alt="Previous"
              className="rotate-180 md:w-[60px] md:h-[60px] lg:w-[74px] lg:h-[74px]"
            />
          </button>

          <button
            onClick={handleNextPage}
            className="flex items-center justify-center transition-transform hover:scale-110"
          >
            <Image
              src={galleryIconBtnDesk}
              alt="Next"
              className="md:w-[60px] md:h-[60px] lg:w-[74px] lg:h-[74px]"
            />
          </button>
        </div>
      </div>

      {/* Mobile Navigation Buttons */}
      <div className="md:hidden flex items-center justify-center gap-3 mt-8">
        <button
          onClick={handlePrevPage}
          className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-all hover:scale-110"
        >
          <Image
            src={galleryIconBtnMob}
            alt="Previous"
            width={40}
            height={40}
            className="rotate-180"
          />
        </button>

        <button
          onClick={handleNextPage}
          className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-all hover:scale-110"
        >
          <Image src={galleryIconBtnMob} alt="Next" width={40} height={40} />
        </button>
      </div>
    </Container>
  );
};

export default ProjectGallery;
