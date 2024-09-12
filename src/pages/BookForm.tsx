//

import {
  RentDatePicker,
  RentForm,
  RentInput,
  RentSelectInput,
} from "@/components/form";
import RentMultiSelectInput from "@/components/form/RentMultiSelectInput ";
import Wrapper from "@/components/shared/Wrapper";
import { Button } from "@/components/ui/button";
import { useGetCarQuery } from "@/redux/features/cars/car.api";
import { useAppDispatch } from "@/redux/hook";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { FieldValues } from "react-hook-form";
import { GetStartTime } from "@/util/GetStartTime";
import { setBookingData } from "@/redux/features/booking/booking.slice";

const paymentOptions = [
  {
    name: "Amar Pay",
    value: "amarPay",
  },
];

const carFeaturesOptions = [
  { name: "GPS", value: "gps" },
  { name: "Child Seat", value: "childSeat" },
  { name: "Sunroof", value: "sunroof" },
];

const BookForm = () => {
  const { carId } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  if (!carId) {
    throw new Error("Something went wrong!! ");
  }

  const { data: carDetail, isLoading: carDetailLoading } = useGetCarQuery(
    carId,
    { skip: !carId }
  );

  const [droppLocationOption, setDropLocationOption] = useState([]);

  // console.log(carDetail?.data);

  // !  for booking car
  const handleBookCar = (data: FieldValues) => {
    const { bookingDate, additionalFeature, dropLocation, paymentMethod } =
      data;

    const date = new Date(bookingDate);

    const { formattedDate, startTime } = GetStartTime(date);

    const bookingData = {
      carId,
      date: formattedDate,
      startTime,
      dropLocation: dropLocation,
      paymentMethod,
      additionalFeature,
    };

    dispatch(setBookingData(bookingData));

    navigate("/confirm-booking");
  };

  //  * effect for getting drop location option
  useEffect(() => {
    const droppLocation = carDetail?.data?.dropLocation?.map(
      (location: string) => ({
        name: location,
        value: location,
      })
    );

    setDropLocationOption(droppLocation);
  }, [carDetail, carDetailLoading]);

  // ! if data is loading
  if (carDetailLoading) {
    return (
      <div
        className="flex justify-center items-center h-screen
     "
      >
        <div className="rounded-full size-16 bg-prime100 animate-ping"></div>
      </div>
    );
  }

  return (
    <div className="bookformContainer w-full min-h-screen  imageCenter  flex items-center justify-center ">
      <Wrapper className="formWrapper   py-14 ">
        <div className="    w-[95%] xsm:w-[85%] sm:w-[78%] md:w-[70%] xmd:w-[65%] lg:w-[55%] m-auto p-3 xsm:p-5 sm:p-7 md:p-10  rounded-md shadow-xl bg-gray-200 backdrop-blur bg-opacity-60 dark:backdrop-blur  ">
          <h1 className=" mb-6  md:mb-8 xmd:mb-12 lg:mb-14 text-center font-semibold text-prime100 text-lg xsm:text-xl sm:text-3xl md:text-3xl xl:text-4xl text-shadow-prime ">
            Book Car
          </h1>

          {/*  */}

          {/* form starts  */}
          {/* resolver={zodResolver(loginSchema)} */}
          <RentForm onSubmit={handleBookCar}>
            <RentInput type="number" label="NID/Passport :" name="nid" />
            <RentInput type="number" label="License :" name="license" />
            <RentSelectInput
              name="paymentMethod"
              label="Payment Method: "
              options={paymentOptions}
            />

            <RentMultiSelectInput
              name="additionalFeature"
              label="Features : "
              options={carFeaturesOptions}
            />
            <RentSelectInput
              name="dropLocation"
              label="Drop Location : "
              options={droppLocationOption}
            />

            <RentDatePicker name="bookingDate" label="Booking Date" />

            <Button className="px-3 xsm:px-4 sm:px-5 md:px-6 font-semibold text-xs sm:text-sm md:text-base bg-prime50 hover:bg-prime100 active:scale-95 duration-500 ">
              Book Now
            </Button>
          </RentForm>
          {/* form ends */}

          {/*  */}
        </div>
      </Wrapper>
    </div>
  );
};

export default BookForm;
