"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import heroBlurImgMob from "../../../public/images/image/hero-blur-img-mob.webp";
import heroBlurImgDesk from "../../../public/images/image/hero-blur-img-desk.webp";

const HeroBlurCard = () => {
  return (
    <div className="absolute top-8 md:top-[56px] md:left-0 lg:top-[-45px] lg:left-0 h-[393px] overflow-hidden">
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1], delay: 0.7 }}
        className="rounded-t-[16px] rounded-b-0 p-7 w-[310px] lg:w-[359px] h-[393px] backdrop-blur-[16px] shadow-[inset_0_4px_13px_0_rgba(255,255,255,0.25)] bg-[rgba(18,18,18,0.26)]"
      >
        <Image
          src={heroBlurImgMob}
          alt="hero card image"
          className="rounded-md mb-[22px] lg:hidden"
        />
        <Image
          src={heroBlurImgDesk}
          alt="hero card image"
          className="rounded-md mb-[22px] hidden lg:block"
        />
        <h3 className="font-arsenal font-normal text-base text-primary-white uppercase mb-4 w-[171px] lg:w-[246px] lg:text-xl lg:leading-6">
          Наш последний выполненный проект
        </h3>
        <p className="font-montserrat font-light text-xs text-primary-white mb-6 lg:text-sm">
          Создаём пространство, в котором хочется жить! Мы создали уникальный
          дизайн для дома в центре Ниццы...
        </p>
        <button className="w-[253px] h-9 rounded-[32px] lg:w-[303px] lg:h-[42px] lg:text-sm lg:leading-5 bg-transparent border border-primary-white text-primary-white font-raleway font-normal text-xs mx-auto block hover:bg-primary-white hover:text-primary-black transition-all duration-300">
          Посмотреть проект
        </button>
      </motion.div>
    </div>
  );
};

export default HeroBlurCard;
