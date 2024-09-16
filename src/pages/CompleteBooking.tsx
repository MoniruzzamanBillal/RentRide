/* eslint-disable @typescript-eslint/no-explicit-any */
import Wrapper from "@/components/shared/Wrapper";
import { Button } from "@/components/ui/button";
import {
  useCompleteBookingMutation,
  useSingleBookingQuery,
} from "@/redux/features/booking/booking.api";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";

const CompleteBooking = () => {
  const navigate = useNavigate();
  const { bookId } = useParams();

  const { data: bookingDetail, isLoading: bookingDetailLoading } =
    useSingleBookingQuery(bookId!, { skip: !bookId });

  const [completeBooking] = useCompleteBookingMutation();

  const [startDate, setStartDate] = useState(new Date());
  const [bookingStartTime, setbookingStartTime] = useState("");

  console.log(bookingDetail?.data);

  const filterPassedTime = (time: Date) => {
    const currentDate = new Date();
    const selectedDate = new Date(time);

    const [hours, minutes] = bookingStartTime.split(":").map(Number);

    const bookingStartDate = new Date(currentDate);

    bookingStartDate.setHours(hours, minutes, 0, 0);

    return selectedDate.getTime() > bookingStartDate.getTime();
  };

  // ! for compleating booking
  const handleCompleteBooking = async () => {
    if (!startDate) {
      toast.error("Select ending time !!  ", { duration: 1200 });
    }

    const completeData = new Date(startDate);

    const hours = completeData.getHours().toString().padStart(2, "0");
    const minutes = completeData.getMinutes().toString().padStart(2, "0");

    const endTime = `${hours}:${minutes}`;

    const completeBookingData = {
      endTime,
      bookingId: bookId,
    };

    const toastId = toast.loading("Completing booking !! ");

    try {
      const response = await completeBooking(completeBookingData);

      // * for any error
      if (response?.error) {
        toast.error((response?.error as any)?.data?.message, {
          id: toastId,
          duration: 1400,
        });
      }

      if (response?.data?.success) {
        toast.success(response?.data?.message, { id: toastId, duration: 1200 });
        setTimeout(() => {
          navigate("/dashboard/user/user-booking");
        }, 600);
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong !! ", { duration: 2000, id: toastId });
    }
  };

  useEffect(() => {
    if (bookingDetail?.data) {
      setbookingStartTime(bookingDetail?.data?.startTime);
    }
  }, [bookingDetail]);

  // * if data is loading
  if (bookingDetailLoading) {
    return (
      <div className="loadingContainer min-h-screen flex items-center justify-center ">
        <div
          className="flex justify-center items-center h-14
         "
        >
          <div className="rounded-full size-8 bg-prime100 animate-ping"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="CompleteBookingContainer w-full min-h-screen flex items-center justify-center  ">
      <Wrapper className="formWrapper   py-14 ">
        <div className="fomrContainer   w-[95%] xsm:w-[85%] sm:w-[78%] md:w-[70%] xmd:w-[65%] lg:w-[55%] m-auto p-3 xsm:p-5 sm:p-7 md:p-10  rounded-md shadow-xl bg-gray-200 backdrop-blur bg-opacity-60 dark:backdrop-blur ">
          <h1 className=" mb-6  md:mb-8 xmd:mb-12 lg:mb-14 text-center font-semibold text-prime100 text-lg xsm:text-xl sm:text-3xl md:text-3xl xl:text-4xl text-shadow-prime ">
            Complete Booking
          </h1>

          {/* form starts  */}

          <div className="completeBookingForm  flex flex-col gap-y-4 justify-center items-center ">
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date!)}
              showTimeSelect
              showTimeSelectOnly
              timeIntervals={15}
              filterTime={filterPassedTime}
              timeCaption="Time"
              dateFormat="h:mm aa"
              className="border border-gray-400 py-2 px-3 rounded-md "
            />

            <Button
              onClick={() => handleCompleteBooking()}
              className="px-3 xsm:px-4 sm:px-5 md:px-6 font-semibold text-xs sm:text-sm md:text-base bg-prime50 hover:bg-prime100 active:scale-95 duration-500 "
            >
              Complete Booking
            </Button>
          </div>

          {/* form Ends */}
        </div>
      </Wrapper>
    </div>
  );
};

export default CompleteBooking;
