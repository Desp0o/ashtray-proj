import i18next from "i18next";
import languagedetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18next
  .use(languagedetector)
  .use(initReactI18next)
  .init({
    debug: false,
    fallbackLng: "en",
    returnObjects: true,
    resources: {
      en: {
        translation: {
          navbar:{
            main:"Main",
            product:"Product",
            aboutUs:"About Us",
            contact:"Contact"
          },
          titles:{
            products:"products",
            howToUse:"how to use",
            aboutUs: "about us",
            social: "socials",
            quickLinks: "quick links",
            contactUs:"contact us"
          }
        },
      },
      ge: {
        translation: {
          navbar:{
            main:"მთავარი",
            product:"პროდუქტი",
            aboutUs:"ჩვენს შესახებ",
            contact:"კონტაქტი"
          },
          titles:{
            products:"პროდუქტი",
            howToUse:"როგორ გამოვიყენოთ",
            aboutUs: "ჩვენს შესახებ",
            social: "ქსელები",
            quickLinks: "ლინკები",
            contactUs:"კონტაქტი"
          }
        },
      },
    },
  });

export default i18next;