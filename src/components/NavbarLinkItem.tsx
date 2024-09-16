import React from "react";

interface NavbarLinkItemProps {
  name: string;
  fontSize: string;
  fontWeight: number;
}

const NavbarLinkItem: React.FC<NavbarLinkItemProps> = ({ name, fontSize, fontWeight }) => {
  return <p className="hover:text-activeColor cursor-pointer transition-all" style={{ fontSize: fontSize, fontWeight: fontWeight }}>{name}</p>;
};

export default NavbarLinkItem;
