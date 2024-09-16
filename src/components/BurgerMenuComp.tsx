import React from "react";
import closeIcon from "/icons/close.png";
import NavbarLinkItem from "./NavbarLinkItem";

interface BurgerMenuCompProps {
  funcName: () => void;
  array: {
    name: string;
    navFont: string;
    burgerFont: string;
    fontWeightBurger: number;
    sectionId: string;
  }[];
}

const BurgerMenuComp: React.FC<BurgerMenuCompProps> = ({ funcName, array }) => {
  return (
    <div className="bg-[#EDF1F3] relative max-w-full w-[500px] h-screen z-[999] flex flex-col gap-[50px] py-[30px] px-[40px]">
      <img
        src={closeIcon}
        className="top-[40px] right-[22px] absolute w-[16px] cursor-pointer"
        onClick={funcName}
      />

      <p className="text-[40px] font-[900]">Ashtray</p>

      <div className="ml-2 flex items-start flex-col gap-[36px] text-[#717171] font-[600]">
        {array.map((item, index) => {
          return (
            <NavbarLinkItem
              key={index}
              fontWeight={item.fontWeightBurger}
              name={item.name}
              fontSize={item.burgerFont}
              sectionId={item.sectionId}
              funcName={funcName}
            />
          );
        })}
      </div>
    </div>
  );
};

export default BurgerMenuComp;
