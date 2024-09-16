import React from "react";

interface NavbarLinkItemProps {
  name: string;
  fontSize: string;
  fontWeight: number;
  sectionId: string;  
  funcName?: () => void;
}

const NavbarLinkItem: React.FC<NavbarLinkItemProps> = ({ name, fontSize, fontWeight, sectionId, funcName}) => {

  const handleClick = (event: React.MouseEvent) => {
    event.preventDefault(); 

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }

    if(funcName){
      funcName()
    }
  };

  return (
    <p
      onClick={handleClick} 
      className="hover:text-activeColor cursor-pointer transition-all" 
      style={{ fontSize: fontSize, fontWeight: fontWeight }}
    >
      {name}
    </p>
  );
};

export default NavbarLinkItem;
