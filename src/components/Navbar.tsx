import { useEffect, useState } from "react";
import BurgerMenuComp from "./BurgerMenuComp";
import hambuergIcon from "/icons/menu.png";
import NavbarLinkItem from "./NavbarLinkItem";
import { menuArray } from "../lib/menuArray";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  useEffect(()=>{
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"; // Disable scroll
    } else {
      document.body.style.overflow = ""; // Reset overflow to default when menu closes
    }
  },[isMenuOpen])

  return (
    <nav className="h-[60px] md:h-[89px] w-full bg-[#f8f9fa] fixed left-0 top-0 z-[999]">
      <div className="max-w-[1440px] mx-auto h-full flex items-center justify-between px-[20px] md:px-[50px]">
        <p className="text-[30px] md:text-[40px] font-[900]">Ashtray</p>

        <div className="hidden md:flex items-center gap-[40px] text-[#717171] font-[600]">
          {menuArray.map((item, index) => {
            return (
              <NavbarLinkItem
                key={index}
                fontWeight={item.fontWeight}
                name={item.name}
                fontSize={item.navFont}
              />
            );
          })}
        </div>
      </div>
      <img
        src={hambuergIcon}
        alt="menu"
        onClick={handleMenu}
        className="w-[32px] scale-x-[-1] cursor-pointer md:hidden absolute top-1/2 -translate-y-1/2 right-[20px]"
      />

      <div
        className={`fixed top-0 w-[500px] max-w-full md:hidden transition-all ease-in duration-200 ${
          isMenuOpen ? "right-0" : "-right-full"
        }`}
      >
        <div
          className={`w-full h-full bg-[#00000050] fixed top-0 left-0 ${
            isMenuOpen ? "block" : "hidden"
          }`}
          onClick={handleMenu}
        />
        <BurgerMenuComp funcName={handleMenu} array={menuArray} />
      </div>
    </nav>
  );
};

export default Navbar;
