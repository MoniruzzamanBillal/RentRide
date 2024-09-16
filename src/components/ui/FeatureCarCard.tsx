import { TFeaturedCar } from "@/types/globalTypes";

import { Link } from "react-router-dom";
import { Button } from "./button";
import { carStatus } from "@/util/Constants";

type TFeatureCarProps = {
  carData: TFeaturedCar;
};

const FeaturedCarCard = ({ carData }: TFeatureCarProps) => {
  // console.log(carData);

  return (
    <div className=" bg-gray-50 min-h-[28rem] w-[88%] xsm:w-[65%]  sm:w-auto m-auto carCard p-4  cursor-pointer group flex flex-col justify-between  gap-y-4 border   border-gray-300 rounded-2xl  shadow-md hover:shadow-lg hover:scale-[1.02] duration-200 overflow-hidden relative ">
      <div className="carStatusContainer  absolute top-[1.1rem] left-[3.1rem] transform -translate-x-1/2 -translate-y-1/2 ">
        <h1
          className={`  font-medium ${
            carData?.status === carStatus.available
              ? "text-green-700"
              : "text-red-700"
          }  `}
        >
          {" "}
          {carData?.status}{" "}
        </h1>
      </div>

      {/* product image  */}
      <div className="carImg  h-[12rem] ">
        <img
          className="w-full h-full"
          src={carData?.carImg}
          alt="car image "
          // src="https://i.ibb.co/XWy9KF8/car1.png"
        />
      </div>

      {/* prod name  */}
      <div className="carName   ">
        <p className=" font-semibold text-lg ">{carData?.name}</p>
      </div>

      {/* brief description  */}
      <div className="carBriefDescription   ">
        <p className="   text-sm text-gray-500 ">
          {carData?.description?.length >= 110
            ? `${carData?.description.slice(0, 100)}....`
            : carData?.description}
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
        <Link to={`/car-detail/${carData?._id}`}>
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
