"use client";
import Link from "next/link";

import DesktopNav from "./DesktopNav/DesktopNav";
import MobileNav from "./MobileNev/MobileNev";

const Header = () => {
  return (
    <header className="w-screen bg-[#09101a]  text-white fixed top-0 z-10">
      <div className="hiddenmd:flex">
        <DesktopNav />
      </div>

      <div className="md:hidden">
        <MobileNav />
      </div>
    </header>
  );
};

export default Header;
