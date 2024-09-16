import AboutUs from "../components/AboutUs";
import Contact from "../components/contactComponents/Contact";
import ProductSection from "../components/ProductSection";
import SecondSection from "../components/SecondSection";
import Slider from "../components/Slider";

const Main = () => {
  return (
    <main className="pb-[60px] relative">
      <div id="home" />
      <Slider />

      <div className="mt-[96px]" />
      <SecondSection />

      <div className="mt-[96px]" />
      <ProductSection />

      <div className="mt-[96px]" />
      <AboutUs />

      <div className="mt-[96px]" />
      <Contact />

      <p className="absolute left-1/2 -translate-x-1/2 bottom-[10px] z-10 text-[12px]">© Copyright 2024 Ashtray.ge</p>
    </main>
  );
};

export default Main;
