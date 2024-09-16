import Wrapper from "../shared/Wrapper";
import HeroSlider from "./HeroSlider";

const HeroBanner = () => {
  return (
    <div className="HeroBannerContainer py-4 lg:py-8 ">
      <Wrapper className="HeroBannerWrapper  flex flex-col lg:flex-row justify-between items-center  gap-y-5 lg:gap-y-0 ">
        <div className="sliderContainer  w-[100%] lg:w-[60%]  ">
          <HeroSlider />
        </div>

        <div className=" searchContainer bg-yellow-500 w-[100%] lg:w-[40%] ">
          <h1>search </h1>
          <h1>search </h1>
          <h1>search </h1>
          <h1>search </h1>
          <h1>search </h1>
        </div>
      </Wrapper>
    </div>
  );
};

export default HeroBanner;
