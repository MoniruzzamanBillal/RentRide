import Wrapper from "@/components/shared/Wrapper";
import GlassZoomImage from "@/util/GlassZoomImage";

import { useGetCarQuery } from "@/redux/features/cars/car.api";
import { carStatus, UserRole } from "@/util/Constants";
import { Link, useParams } from "react-router-dom";
import Loading from "./Loading";
import { useAppSelector } from "@/redux/hook";

const CarDetail = () => {
  const { user } = useAppSelector((state) => state.auth);

  const { id } = useParams();

  if (!id) {
    throw new Error("Something went wrong!! ");
  }

  const { data: carDetail, isLoading } = useGetCarQuery(id, { skip: !id });

  if (isLoading) {
    return <Loading />;
  }

  console.log(carDetail);

  return (
    <div className="CarDetailContainer py-8 ">
      <Wrapper className="CarDetailWrapper bg-gray-100 dark:bg-black20 py-6 px-4 rounded-lg shadow-sm  ">
        {/* top section starts  */}
        <div className="grid gap-8 md:grid-cols-2">
          {/* detail left starts  */}
          <div className=" detailLeft space-y-4">
            {/* images - start  */}
            <div className="relative overflow-hidden rounded-lg  ">
              <GlassZoomImage imageSrc={carDetail?.data?.carImg} />
            </div>
            {/* images - end  */}
          </div>
          {/* detail left ends  */}

          {/* detail right starts  */}
          {/* {/* content - start  */}
          <div className=" detailRight  md:py-8">
            {/* {/* name - start  */}
            <div className="mb-6  ">
              <h2 className="text-3xl font-semibold  lg:text-4xl">
                {carDetail?.data?.name}
              </h2>
            </div>
            {/* name - end  */}

            {/* {/* description - start  */}
            <div className=" mb-6 ">
              <p className="text-gray-500 dark:text-gray-300 ">
                {carDetail?.data?.description}
              </p>
            </div>
            {/* description - end  */}

            {/* price - start  */}
            <div className="mb-6">
              <div className="  font-medium mb-1.5  ">
                Price Per Hour :{" "}
                <span className=" font-bold text-gray-800 dark:text-gray-100 md:text-xl">
                  {carDetail?.data?.pricePerHour} $
                </span>
              </div>
            </div>
            {/* price - end  */}

            {/* trip completed section  */}

            {carDetail?.data?.tripCompleted > 1 && (
              <div className="mb-6">
                <div className="  font-medium mb-1.5  ">
                  Trip Completed :{" "}
                  <span className=" font-bold text-gray-800 dark:text-gray-100 md:text-xl">
                    {carDetail?.data?.tripCompleted}+
                  </span>
                </div>
              </div>
            )}

            {/* trip completed section ends  */}

            {/* drop location starts   */}
            <div className="dropLocation mb-5 ">
              <p className="  font-medium mb-1.5  "> Drop location : </p>

              {carDetail?.data?.dropLocation?.map(
                (location: string, ind: number) => (
                  <p
                    key={ind}
                    className="text-gray-700 dark:text-gray-300 pl-6"
                  >
                    {" "}
                    * {location}
                  </p>
                )
              )}
            </div>
            {/* drop location ends  */}

            {/* product category starts  */}
            <div className="mb-4 ">
              <p className="font-medium  ">Additional features : </p>
              <ul
                className="text-gray-600 dark:text-gray-300 pl-6
               "
              >
                <li> * GPS</li>
                <li> * Child seat</li>
              </ul>
            </div>
            {/* product category ends  */}

            {/* available stock starts  */}
            <div className="mb-7 flex items-center gap-2  ">
              <span
                className={` font-semibold  ${
                  carDetail?.data?.status === carStatus.available
                    ? "text-green-600"
                    : "text-red-600"
                }  `}
              >
                {carDetail?.data?.status}
              </span>
            </div>
            {/* available stock ends  */}

            {/* {/* buttons - start  */}
            <div className="   ">
              {user?.userRole === UserRole.admin ? (
                <Link to={`/dashboard/update-car/${carDetail?.data?._id}`}>
                  <button
                    disabled={
                      carDetail?.data?.status === carStatus.unavailable
                        ? true
                        : false
                    }
                    className={`inline-block flex-1 rounded-lg px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 sm:flex-none md:text-base 
                 ${
                   carDetail?.data?.status === carStatus.available
                     ? "bg-prime50 hover:bg-prime100 hover:scale-[1.02] active:scale-100 cursor-pointer   "
                     : " bg-red-600 cursor-not-allowed "
                 }
             
             `}
                  >
                    Update Car
                  </button>
                </Link>
              ) : (
                <Link to={`/book-car/${carDetail?.data?._id}`}>
                  <button
                    disabled={
                      carDetail?.data?.status === carStatus.unavailable
                        ? true
                        : false
                    }
                    className={`inline-block flex-1 rounded-lg px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 sm:flex-none md:text-base 
                 ${
                   carDetail?.data?.status === carStatus.available
                     ? "bg-prime50 hover:bg-prime100 hover:scale-[1.02] active:scale-100 cursor-pointer   "
                     : " bg-red-600 cursor-not-allowed "
                 }
             
             `}
                  >
                    Book Now
                  </button>
                </Link>
              )}
            </div>
            {/* buttons - end  */}
          </div>
          {/* content - end  */}
          {/* detail right ends  */}
        </div>
        {/* top section ends  */}

        {/* comment section starts  */}
        <div className="commentContainer  mt-4 flex flex-col gap-y-5 ">
          {/* add review section starts  */}
          {/* <NewComment /> */}
          {/* add review section ends */}

          {/* all comments starts  */}
          {/* <div className="allComments mt-4 ">
            <h1 className="  mb-6 font-semibold text-lg xsm:text-xl sm:text-3xl md:text-3xl xl:text-4xl text-shadow-blue text-gray-800 ">
              Customer Reviews
            </h1>

            <div className="commentContent flex flex-col gap-y-8 ">
              <CommentCard />
              <CommentCard />
              <CommentCard />
              <CommentCard />
              <CommentCard />
            </div>
          </div> */}
          {/* all comments ends */}

          {/*  */}
        </div>
        {/* comment section ends */}

        {/*  */}
      </Wrapper>
    </div>
  );
};

export default CarDetail;
