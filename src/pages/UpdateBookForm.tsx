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

import "react-datepicker/dist/react-datepicker.css";
import { FieldValues } from "react-hook-form";
import { GetStartTime } from "@/util/GetStartTime";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  clearBookingData,
  setBookingData,
} from "@/redux/features/booking/booking.slice";
import {
  useSingleBookingQuery,
  useUpdateBookingMutation,
} from "@/redux/features/booking/booking.api";
import { UpdatebookCarSchema } from "@/schemas/BookCarSchema";
import { toast } from "sonner";
import Loading from "./Loading";

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

const UpdateBookForm = () => {
  const { bookId } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [updateBooking] = useUpdateBookingMutation();

  if (!bookId) {
    throw new Error("Something went wrong!! ");
  }

  const { data: bookingDetail, isLoading: bookingDetailLoading } =
    useSingleBookingQuery(bookId, { skip: !bookId });

  const { data: carDetail, isLoading: carDetailLoading } = useGetCarQuery(
    bookingDetail?.data?.car,
    { skip: !bookingDetail?.data?.car }
  );

  const [droppLocationOption, setDropLocationOption] = useState([]);

  let defaultValues;

  defaultValues = {
    dropLocation: bookingDetail?.data?.dropLocation,
    paymentMethod: bookingDetail?.data?.paymentMethod,
    additionalFeature: bookingDetail?.data?.additionalFeature,
    license: bookingDetail?.data?.license,
    nid: bookingDetail?.data?.nid,
  };

  //   ! for updating booking data
  const handleUpdateBooking = async (data: FieldValues) => {
    dispatch(clearBookingData());
    const {
      bookingDate,
      additionalFeature,
      dropLocation,
      paymentMethod,
      license,
      nid,
    } = data;

    const date = new Date(bookingDate);

    const { formattedDate, startTime } = GetStartTime(date);

    const bookingData = {
      date: formattedDate,
      startTime,
      dropLocation: dropLocation,
      paymentMethod,
      additionalFeature,
      license,
      nid,
    };

    const taostId = toast.loading("Updating car....");

    try {
      const result = await updateBooking({ bookId, bookingData });

      console.log(result);

      //  *  for any  error
      if (result?.error) {
        console.log(result?.error);
        const errorMessage = (result?.error as any)?.data?.message;

        toast.error(errorMessage, {
          id: taostId,
          duration: 1500,
        });
      }

      // * for successful updation
      if (result?.data) {
        console.log(result?.data);
        const successMsg = result?.data?.message;

        toast.success(successMsg, {
          id: taostId,
          duration: 1000,
        });

        setTimeout(() => {
          navigate("/dashboard/user/user-booking");
        }, 600);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong !!!", { id: taostId, duration: 1400 });
    }
  };

  // ! effect for getting default value
  useEffect(() => {
    if (bookingDetail?.data) {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      defaultValues = {
        dropLocation: bookingDetail?.data?.dropLocation,
        paymentMethod: bookingDetail?.data?.paymentMethod,
        additionalFeature: bookingDetail?.data?.additionalFeature,
        license: bookingDetail?.data?.license,
        nid: bookingDetail?.data?.nid,
      };
    }
  }, [bookingDetail]);

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
  if (carDetailLoading || bookingDetailLoading) {
    return <Loading />;
  }

  return (
    <div className="UpdateBookFormContainer w-full min-h-screen  imageCenter  flex items-center justify-center ">
      <Wrapper className="formWrapper   py-14 ">
        <div className="    w-[95%] xsm:w-[85%] sm:w-[78%] md:w-[70%] xmd:w-[65%] lg:w-[55%] m-auto p-3 xsm:p-5 sm:p-7 md:p-10  rounded-md shadow-xl bg-gray-200 backdrop-blur bg-opacity-60 dark:backdrop-blur  ">
          <h1 className=" mb-6  md:mb-8 xmd:mb-12 lg:mb-14 text-center font-semibold text-prime100 text-lg xsm:text-xl sm:text-3xl md:text-3xl xl:text-4xl text-shadow-prime ">
            Update Booking Data
          </h1>

          {/*  */}

          {/* form starts  */}
          <RentForm
            onSubmit={handleUpdateBooking}
            resolver={zodResolver(UpdatebookCarSchema)}
            defaultValues={defaultValues}
          >
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

export default UpdateBookForm;
