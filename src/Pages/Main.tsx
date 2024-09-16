import AboutUs from "../components/AboutUs";
import ProductSection from "../components/ProductSection";
import SecondSection from "../components/SecondSection";
import Slider from "../components/Slider";

const Main = () => {
  return (
    <main className="pb-[100px]">
      <Slider />

      <div className="mt-[96px]" />
      <SecondSection />

      <div className="mt-[96px]" />
      <ProductSection />

      <div className="mt-[96px]" />
      <AboutUs />

    </main>
  );
};

export default Main;
