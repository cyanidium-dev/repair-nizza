"use client";

import React, { useState } from "react";
import Logo from "./Logo";
import LocaleSwitcher from "./LocaleSwitcher";
import Container from "./Container";
import BurgerMenu from "./BurgerMenu";
import DeskNavMenu from "./DeskNavMenu";
import LinkWithUsBtn from "./LinkWithUsBtn";
import MobNavMenu from "./MobNavMenu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <Container>
        <header className="flex items-center justify-between py-[22px] lg:py-[25px]">
          <Logo />
          <DeskNavMenu />
          <LocaleSwitcher />
          <LinkWithUsBtn />
          <div className="lg:hidden">
            <BurgerMenu onClick={() => setIsMenuOpen(true)} />
          </div>
        </header>
      </Container>
      <MobNavMenu isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
    </>
  );
};

export default Header;
