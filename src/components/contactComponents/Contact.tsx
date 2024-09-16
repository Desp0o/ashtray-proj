import { menuArray } from "../../lib/menuArray";
import SocialBlock from "./SocialBlock";

const Contact = () => {
  return (
    <footer id="contact" className="max-w-[1440px] mx-auto px-[20px] md:px-[50px] flex justify-between">
      {/* footer title */}
      <div className="w-[300px] hidden md:block">
        <p className="text-[14px] md:text-[20px] font-[900] uppercase">Ashtray</p>
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
          quick links
        </p>
        <div className="flex flex-col gap-[10px]">
          {menuArray.map((item, index) => {
            return (
              <p
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
          Contact us
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
