import { TFeaturedCar } from "@/types/globalTypes";

import { Link } from "react-router-dom";
import { Button } from "./button";

type TFeatureCarProps = {
  carData: TFeaturedCar;
};

const FeaturedCarCard = ({ carData }: TFeatureCarProps) => {
  return (
    <div className=" bg-gray-50 min-h-[28rem] w-[82%] xsm:w-[65%]  sm:w-auto m-auto carCard p-4  cursor-pointer group flex flex-col justify-between  gap-y-4 border   border-gray-300 rounded-2xl  shadow-md hover:shadow-lg hover:scale-[1.02] duration-200 overflow-hidden ">
      {/* product image  */}
      <div className="carImg  h-[12rem] ">
        <img className="w-full h-full" src={carData?.imageUrl} alt="" />
      </div>

      {/* prod name  */}
      <div className="carName   ">
        <p className=" font-semibold text-lg ">{carData?.name}</p>
      </div>

      {/* brief description  */}
      <div className="carBriefDescription   ">
        <p className=" font-medium  text-sm text-gray-700 ">
          {carData?.briefDescription}
        </p>
      </div>

      {/* product price  */}
      <div className="carPrice  ">
        <p className=" font-semibold  ">
          price per hour :{" "}
          <span className=" font-bold  "> {carData?.pricePerHour} $ </span>
        </p>
      </div>

      {/* detail section  */}
      <div className="carDetailBTN  ">
        <Link to={`/product/detail/product?._id`}>
          <Button className=" -z-[1] text-xs sm:text-sm md:text-base bg-prime50 hover:bg-prime100 ">
            Detail
          </Button>
        </Link>
      </div>

      {/*  */}
    </div>
  );
};

export default FeaturedCarCard;
