import React from "react";

interface NavbarLinkItemProps {
  name: string;
  fontSize: string;
}

const NavbarLinkItem: React.FC<NavbarLinkItemProps> = ({ name, fontSize }) => {
  return <p style={{ fontSize: fontSize }}>{name}</p>;
};

export default NavbarLinkItem;
