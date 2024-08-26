import { featureCarData } from "@/util/Data";
import Wrapper from "../shared/Wrapper";
import { TFeaturedCar } from "@/types/globalTypes";
import FeaturedCarCard from "./FeatureCarCard";

const FeaturedCar = () => {
  return (
    <div className="FeaturedCarContainer py-8 bg-blue-50 ">
      <Wrapper className="FeaturedCarWrapper  ">
        <h1 className=" relative mb-6  md:mb-8 xmd:mb-12 lg:mb-14 text-center font-semibold text-lg xsm:text-xl sm:text-3xl md:text-3xl xl:text-4xl text-shadow-blue">
          <div className="absolute top-[2.1rem] xsm:top-[2.2rem] sm:top-[3rem] md:top-[3rem]  xmd:top-[3rem] left-[50%] md:left-[50%] transform -translate-x-1/2 -translate-y-1/2 h-[.15rem] w-[16%] xsm:w-[15%] sm:w-[20%] md:w-[15%] lg:w-[13%] bg-prime100 "></div>
          Featured <span className=" text-prime100 ">Car</span>
        </h1>

        <div className="featuredCardItem">
          {/* products content starts  */}
          <div className="productsContent  py-3 px-4 ">
            {/* all products  */}
            <div className="allProducts grid grid-cols-1 sm:grid-cols-2 xmd:grid-cols-3  xlm:grid-cols-4 gap-x-4 gap-y-8 ">
              {featureCarData &&
                featureCarData?.map((product: TFeaturedCar, ind: number) => (
                  <FeaturedCarCard carData={product} key={ind} />
                ))}
            </div>
          </div>
          {/* products content ends */}
        </div>
      </Wrapper>
    </div>
  );
};

export default FeaturedCar;
