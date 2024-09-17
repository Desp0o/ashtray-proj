import { useTranslation } from "react-i18next";


  const MenuArray = () => {
    const { t } = useTranslation();  
    const menuListArray = [
      {
        name: t("navbar.main"),
        navFont: "14px",
        burgerFont: "28px",
        fontWeight: 400,
        fontWeightBurger:400,
        sectionId: "home"
      },
      {
        name: t("navbar.product"),
        navFont: "14px",
        burgerFont: "28px",
        fontWeight: 400,
        fontWeightBurger:400,
        sectionId: "product"
      },
      {
        name: t("navbar.aboutUs"),
        navFont: "14px",
        burgerFont: "28px",
        fontWeight: 400,
        fontWeightBurger:400,
        sectionId: "aboutUs"
      },
      {
        name: t("navbar.contact"),
        navFont: "14px",
        burgerFont: "28px",
        fontWeight: 400,
        fontWeightBurger:400,
        sectionId: "contact"
      },
    ];

    return menuListArray
  }
  
  export default MenuArray