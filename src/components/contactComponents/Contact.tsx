import { menuArray } from "../../lib/menuArray";
import SocialBlock from "./SocialBlock";

const Contact = () => {
  return (
    <footer className="max-w-[1440px] mx-auto px-[20px] md:px-[50px] flex justify-between">
      {/* footer title */}
      <div className="w-[300px] hidden md:block">
        <p className="text-[16px] md:text-[20px] font-[900]">Ashtray</p>
        <p className="text-[#AEAEAE]">
          Nisi, purus vitae, ultrices nunc. Sit ac sit suscipit hendrerit.
          Gravida massa volutpat aenean odio erat nullam fringilla.
        </p>
      </div>

      <SocialBlock />

      <div>
        <p className="text-[16px] md:text-[20px] font-[900] uppercase">quick links</p>
        <div className="flex flex-col gap-[10px]">
          {
            menuArray.map((item, index)=>{
              return(
                <p className="text-[#AEAEAE] text-[14px] cursor-pointer hover:text-activeColor transition-all" key={index}>{item.name}</p>
              )
            })
          }
        </div>
      </div>

      <div>
        <p className="text-[16px] md:text-[20px] font-[900] uppercase">Contact us</p>
        <div className="flex flex-col gap-[10px]">
          <p className="text-[#AEAEAE]">yourinfo@gmail.com</p>
          <p className="text-[#AEAEAE]">+995 000 00 00 00</p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
