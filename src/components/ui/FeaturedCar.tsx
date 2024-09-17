import Wrapper from "../shared/Wrapper";
import { TFeaturedCar } from "@/types/globalTypes";
import FeaturedCarCard from "./FeatureCarCard";
import { useGetAllCarsQuery } from "@/redux/features/cars/car.api";
import TableDataError from "./TableDataError";

const FeaturedCar = () => {
  const {
    data: featureCarData,
    isLoading: featureCarLoading,
    isError: featureCarError,
  } = useGetAllCarsQuery(undefined);

  // console.log(featureCarData?.data);

  let content = null;

  // * if data is loading
  if (featureCarLoading) {
    content = (
      <div className="loadingContainer">
        <div
          className="flex justify-center items-center h-16
           "
        >
          <div className="rounded-full size-8 bg-prime100 animate-ping"></div>
        </div>
      </div>
    );
  }

  // * if error
  if (!featureCarLoading && featureCarError) {
    content = (
      <div className="errorMessage">
        <TableDataError message="Something went wrong " />
      </div>
    );
  }

  // * for no product
  else if (
    !featureCarLoading &&
    !featureCarError &&
    featureCarData?.data?.length < 1
  ) {
    content = (
      <tr>
        <td colSpan={8}>
          <TableDataError message="Nothing Found" />
        </td>
      </tr>
    );
  }

  // ! for data
  else if (
    !featureCarLoading &&
    !featureCarError &&
    featureCarData?.data?.length
  ) {
    content = (
      <div className="productContainer">
        {/* products content starts  */}
        <div className="productsContent  py-3 px-4 ">
          {/* all products  */}
          <div className="allProducts grid grid-cols-1 sm:grid-cols-2 xmd:grid-cols-3  xlm:grid-cols-4 gap-x-4 gap-y-8 ">
            {featureCarData &&
              featureCarData?.data
                ?.slice(0, 4)
                ?.map((product: TFeaturedCar, ind: number) => (
                  <FeaturedCarCard carData={product} key={ind} />
                ))}
          </div>
        </div>
        {/* products content ends */}
      </div>
    );
  }

  return (
    <div className="FeaturedCarContainer py-8 bg-blue-50  dark:bg-black20 ">
      <Wrapper className="FeaturedCarWrapper  ">
        <h1 className=" relative mb-6  md:mb-8 xmd:mb-12 lg:mb-14 text-center font-semibold text-lg xsm:text-xl sm:text-3xl md:text-3xl xl:text-4xl text-shadow-blue">
          <div className="absolute top-[2.1rem] xsm:top-[2.2rem] sm:top-[3rem] md:top-[3rem]  xmd:top-[3rem] left-[50%] md:left-[50%] transform -translate-x-1/2 -translate-y-1/2 h-[.15rem] w-[16%] xsm:w-[15%] sm:w-[20%] md:w-[15%] lg:w-[13%] bg-prime100 "></div>
          Featured <span className=" text-prime100 ">Car</span>
        </h1>

        <div className="featuredCardItem">{content}</div>
      </Wrapper>
    </div>
  );
};

export default FeaturedCar;
