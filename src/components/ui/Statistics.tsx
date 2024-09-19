//

import {
  useCompletedPaymentBookingCountQuery,
  useCompletedPaymentBookingRevenueQuery,
} from "@/redux/features/booking/booking.api";
import StatisticsCard from "./StatisticsCard";
import { useGetAllAvailableCarsQuery } from "@/redux/features/cars/car.api";
import { useEffect } from "react";
import { Loading } from "@/pages";

const Statistics = () => {
  const {
    data: complementedBookingCount,
    isLoading: bookingDataLoading,
    refetch: bookCountRefetch,
  } = useCompletedPaymentBookingCountQuery(undefined);

  const {
    data: availableCar,
    isLoading: carDataLoading,
    refetch: availableCarRefetch,
  } = useGetAllAvailableCarsQuery(undefined);

  const {
    data: revenueData,
    isLoading: revenueDataLoading,
    refetch: reveueRefetch,
  } = useCompletedPaymentBookingRevenueQuery(undefined);

  let content = null;

  if (bookingDataLoading || revenueDataLoading || carDataLoading) {
    content = <Loading />;
  } else {
    content = (
      <div className="statisticsCardContent grid xsm:grid-cols-2 lg:grid-cols-3 md:gap-x-3 gap-x-2  gap-y-4">
        <StatisticsCard
          number={complementedBookingCount?.data}
          text={"Total Booking "}
        />
        <StatisticsCard number={revenueData?.data} text={"Total Revenue "} />
        <StatisticsCard
          number={availableCar?.data?.length}
          text="Available car"
        />
      </div>
    );
  }

  useEffect(() => {
    bookCountRefetch();
    availableCarRefetch();
    reveueRefetch();
  }, []);

  return (
    <div className="StatisticsContainer">
      <div className="StatisticsWrapper rounded-md bg-gray-100 dark:bg-black100 border border-gray-200 dark:border-gray-600 p-6 shadow-md">
        <h1 className=" mb-8 px-3 xsm:px-4 sm:px-5 md:px-6 font-medium text-2xl  md:text-3xl   ">
          Statistics
        </h1>
        <div className="cardContainer">{content}</div>
      </div>
    </div>
  );
};

export default Statistics;
