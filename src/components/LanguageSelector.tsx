import { useTranslation } from "react-i18next";

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const selectLanguage = () => {
    if (i18n.language === "en") {
      i18n.changeLanguage("ge");
    } else {
      i18n.changeLanguage("en");
    }
  };

  return (
    <p
      onClick={selectLanguage}
      className="text-activeColor font-[600]"
    >
      {i18n.language === "ge" ? "EN" : "GE"}
    </p>
  );
};

export default LanguageSelector;
