import React from "react";
import closeIcon from "/icons/close.png";

interface BurgerMenuCompProps {
  funcName: () => void;
}

const BurgerMenuComp: React.FC<BurgerMenuCompProps> = ({ funcName }) => {
  return (
    <div className="bg-[#EDF1F3] relative max-w-full w-[500px] h-screen z-[999] flex flex-col gap-[50px] py-[30px] px-[40px]">
      <img
        src={closeIcon}
        className="top-[40px] right-[22px] absolute w-[16px]"
        onClick={funcName}
      />

      <p className="text-[40px] font-[900]">Ashtray</p>

      <ul className="ml-2 flex items-start flex-col gap-[36px] text-[28px] text-[#717171] font-[600]">
        <li>მთავარი</li>
        <li>პროდუქტი</li>
        <li>ჩვენს შესახებ</li>
        <li>კონტაქტი</li>
      </ul>
    </div>
  );
};

export default BurgerMenuComp;
