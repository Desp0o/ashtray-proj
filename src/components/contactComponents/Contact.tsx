import SocialBlock from "./SocialBlock";
import MenuArray from "../../lib/menuArray";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  const menuListArray = MenuArray()
  const handleClick = (event: React.MouseEvent, sectionId: string) => {
    event.preventDefault();

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer
      id="contact"
      className="max-w-[1440px] mx-auto px-[20px] md:px-[50px] flex justify-between"
    >
      {/* footer title */}
      <div className="w-[300px] hidden md:block">
        <p className="text-[14px] md:text-[20px] font-[900] uppercase">
          Ashtray
        </p>
        <p className="text-[#AEAEAE]">
          Nisi, purus vitae, ultrices nunc. Sit ac sit suscipit hendrerit.
          Gravida massa volutpat aenean odio erat nullam fringilla.
        </p>
      </div>

      {/* socials */}
      <SocialBlock />

      {/* quick links */}
      <div className="flex flex-col gap-[5px]">
        <p className="text-[14px] md:text-[20px] font-[900] uppercase">
          {t("titles.quickLinks")}
        </p>
        <div className="flex flex-col gap-[10px]">
          {menuListArray.map((item, index) => {
            return (
              <p
                onClick={(e) => handleClick(e, item.sectionId)}
                className="text-[#AEAEAE] text-[12px] md:text-[14px] cursor-pointer hover:text-activeColor transition-all"
                key={index}
              >
                {item.name}
              </p>
            );
          })}
        </div>
      </div>

      {/* conatact */}
      <div className="flex flex-col gap-[5px]">
        <p className="text-[14px] md:text-[20px] font-[900] uppercase">
        {t("titles.contactUs")}
        </p>
        <div className="flex flex-col gap-[10px]">
          <p className="text-[#AEAEAE] text-[12px] md:text-[14px]">
            info@ashtray.ge
          </p>
          <p className="text-[#AEAEAE] text-[12px] md:text-[14px]">
            +995 000 00 00 00
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
