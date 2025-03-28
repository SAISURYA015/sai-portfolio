import Logo from "../../assets/react.svg";
import React, { useEffect, useState } from "react";
import { Menus } from "../../utils";
import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";

const handleNavigation = (path) => {
  if (path.startsWith("#")) {
    // If already on the home page, just scroll
    if (location.pathname === "/") {
      scrollToSection(path);
    } else {
      // Navigate to home, then scroll after rendering
      navigate("/", { replace: false });
      setTimeout(() => {
        scrollToSection(path);
      }, 100); // Delay to ensure the page loads before scrolling
    }
  } else {
    navigate(path);
  }
};

const scrollToSection = (id) => {
  const element = document.getElementById(id.replace("#", ""));
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>

      <header
        className={`h-16 sticky inset-0 z-[999] w-full flex-center text-[16px] duration-500 font-medium text-lg text-white ${isScrolled ? "bg-black text-zinc-800" : "bg-[#000]"
          }`}
      >
        {/* <Header /> */}
        <nav className="px-3 w-full max-w-7xl mx-auto flex-center-between">
          <div className="flex-center gap-x-3 z-[999] relative">
            <a href="/"><img src={Logo} alt="logo" className="w-12 lg:w-14" /></a>
          </div>
          {/* Menus  */}
          {/* Desktop Menu */}
          <ul className="hidden lg:flex gap-x-5">
            {Menus.map((menu) => (
              <DesktopMenu menu={menu} key={menu.name} />
            ))}
          </ul>

          <div className="flex lg:hidden">
            <MobileMenu Menus={Menus} />
          </div>
        </nav>
      </header>
    </>
  );
};

export default Nav;