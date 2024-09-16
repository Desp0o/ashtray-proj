import { useState } from "react";
import BurgerMenuComp from "./BurgerMenuComp";
import hambuergIcon from "/icons/menu.png";
import NavbarLinkItem from "./NavbarLinkItem";

const menuArray = [
  {
    name: "მთავარი",
    navFont: "14px",
    burgerFont: "28px",
    fontWeight: 600,
    fontWeightBurger:400,
  },
  {
    name: "პროდუქტი",
    navFont: "14px",
    burgerFont: "28px",
    fontWeight: 600,
    fontWeightBurger:400,
  },
  {
    name: "ჩვენს შესახებ",
    navFont: "14px",
    burgerFont: "28px",
    fontWeight: 600,
    fontWeightBurger:400,
  },
  {
    name: "კონტაქტი",
    navFont: "14px",
    burgerFont: "28px",
    fontWeight: 600,
    fontWeightBurger:400,
  },
];

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenu = () => {
    setMenuOpen(!isMenuOpen);
    console.log(isMenuOpen);
    
  };

  return (
    <nav className="h-[89px] w-full bg-white px-[40px] fixed left-0 top-0 z-[999] flex items-center justify-between">
      <p className="text-[40px] font-[900]">Ashtray</p>

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

      <img
        src={hambuergIcon}
        alt="menu"
        onClick={handleMenu}
        className="w-[32px] scale-x-[-1] cursor-pointer md:hidden"
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
