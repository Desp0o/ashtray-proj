import React from "react";

interface FeaturesBlockProps {
  icon: string;
  title: string;
  text: string;
}

const FeaturesBlock: React.FC<FeaturesBlockProps> = ({ icon, title, text }) => {
  return (
    <div className="flex items-start gap-[20px]">
      <img src={icon} alt="feature icon" className="w-[28px]" />

      <div className="max-w-full md:w-[306px] lg:w-[174px] 1xl:w-[266px]">
        <h3 className="text-[#212529] text-[21px] uppercase">{title}</h3>
        <p className="text-[16px] text-[#AEAEAE]">{text}</p>
      </div>
    </div>
  );
};

export default FeaturesBlock;
