"use client";

import React from "react";
import Logo from "./Logo";
import LocaleSwitcher from "./LocaleSwitcher";
import Container from "./Container";
import BurgerMenu from "./BurgerMenu";
import DeskNavMenu from "./DeskNavMenu";
import LinkWithUsBtn from "./LinkWithUsBtn";

const Header = () => {
  return (
    <Container>
      <header className="flex items-center justify-between py-[22px]">
        <Logo />
        <DeskNavMenu />
        <LocaleSwitcher />
        <LinkWithUsBtn />
        <BurgerMenu />
      </header>
    </Container>
  );
};

export default Header;
