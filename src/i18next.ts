import i18next from "i18next";
import languagedetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18next
  .use(languagedetector)
  .use(initReactI18next)
  .init({
    debug: false,
    fallbackLng: "ge",
    lng: "ge",  
    returnObjects: true,
    resources: {
      ge: {
        translation: {
          navbar: {
            main: "მთავარი",
            product: "პროდუქტი",
            aboutUs: "ჩვენს შესახებ",
            contact: "კონტაქტი",
          },
          titles: {
            products: "პროდუქტი",
            howToUse: "როგორ გამოვიყენოთ",
            aboutUs: "ჩვენს შესახებ",
            social: "ქსელები",
            quickLinks: "ლინკები",
            contactUs: "კონტაქტი",
          },
        },
      },
      en: {
        translation: {
          navbar: {
            main: "Main",
            product: "Product",
            aboutUs: "About Us",
            contact: "Contact",
          },
          titles: {
            products: "products",
            howToUse: "how to use",
            aboutUs: "about us",
            social: "socials",
            quickLinks: "quick links",
            contactUs: "contact us",
          },
        },
      },
    },
  });

export default i18next;
