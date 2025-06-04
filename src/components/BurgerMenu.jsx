"use client";

import Image from "next/image";
import burger from "../../public/images/SVG/burger.svg";

const BurgerMenu = () => {
  return (
    <button className="lg:hidden">
      <Image src={burger} alt="burger menu" />
    </button>
  );
};

export default BurgerMenu;
