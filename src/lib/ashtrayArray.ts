import { useTranslation } from "react-i18next";

const AshtrayArray = () => {
  const { t } = useTranslation();

  const ashArray = [
    {
      image: "/images/classic.webp",
      title: "Classic perfume",
    },
    {
      image: "/images/ocean.webp",
      title: "Fresh ocean",
    },
    {
      image: "/images/lemon.webp",
      title: "Lemon scent",
    },
    {
      image: "/images/gardenia.webp",
      title: "Gardenia flower",
    },
    {
      image: "/images/lavender.webp",
      title: "Lavander fra-grance.webp",
    },
    {
      image: "/images/botanical.webp",
      title: "Botanical scent",
    },
  ];

  return ashArray;
};

export default AshtrayArray;
