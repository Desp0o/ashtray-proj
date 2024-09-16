import { socialArray } from "../../lib/footerArrays";

const SocialBlock = () => {
  return (
    <div className="flex flex-col gap-[5px]">
      <p className="text-[16px] md:text-[20px] font-[900] uppercase">Social</p>
      <div className="flex flex-col gap-[10px]">
        {socialArray.map((item, index) => {
          return (
            <a
              href={item.link}
              target="_blank"
              rel="noopener"
              key={index}
              className="flex items-center gap-[10px] group social-item"
            >
              {item.icon}
              <h4 className="text-[12px] md:text-[14px] text-[#AEAEAE] group-hover:text-activeColor cursor-pointer">
                {item.name}
              </h4>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default SocialBlock;
