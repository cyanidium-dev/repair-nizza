"use client";

import Image from "next/image";
import heroBlurImg from "../../../public/images/image/hero-blur-img.webp";

const HeroBlurCard = () => {
  return (
    <div className="rounded-t-[16px] rounded-b-0 p-7 w-[310px] h-[393px] backdrop-blur-[26px] shadow-[inset_0_4px_13px_0_rgba(255,255,255,0.25)] bg-[rgba(18,18,18,0.26)]">
      <Image
        src={heroBlurImg}
        alt="hero card image"
        className="rounded-md mb-[22px]"
      />
      <h3 className="font-arsenal font-normal text-base text-primary-white uppercase mb-4">
        Наш последний выполненный проект
      </h3>
      <p className="font-montserrat font-light text-xs text-primary-white mb-6">
        Создаём пространство, в котором хочется жить! Мы создали уникальный
        дизайн для дома в центре Ниццы...
      </p>
      <button className="w-[253px] h-9 rounded-[32px] bg-transparent border border-primary-white text-primary-white font-raleway font-normal text-xs mx-auto block">
        Посмотреть проект
      </button>
    </div>
  );
};

export default HeroBlurCard;
