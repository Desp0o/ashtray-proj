import FeaturesBlock from "./FeaturesBlock";
import { featureArray } from "../lib/featureblock";

const SecondSection = () => {
  return (
    <section className="w-full max-w-[1440px] mx-auto flex flex-col items-center md:flex-row md:flex-wrap md:items-start justify-center lg:justify-between gap-[30px] 1xl:gap-0 px-[50px]">
      {featureArray.map((item, index) => {
        return (
          <FeaturesBlock
            key={index}
            icon={item.icon}
            title={item.title}
            text={item.text}
          />
        );
      })}
    </section>
  );
};

export default SecondSection;
