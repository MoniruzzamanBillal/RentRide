import { Button } from "@/components/ui/button";
import { useMakeBookingMutation } from "@/redux/features/booking/booking.api";
import { clearBookingData } from "@/redux/features/booking/booking.slice";
import { useAppDispatch } from "@/redux/hook";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const BookingConfirmation = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const booking = useSelector((state: RootState) => state.booking);
  const [makeBooking] = useMakeBookingMutation();

  //   !  for confirming booking
  const handleConfirmBooking = async () => {
    console.log("Booking Confirmed", booking);

    const taostId = toast.loading("Booking car ...");

    try {
      const result = await makeBooking(booking);

      console.log(result);

      //  *  for any  error
      if (result?.error) {
        const errorMessage = (result?.error as any)?.data?.message;

        toast.error(errorMessage, {
          id: taostId,
          duration: 1400,
        });
      }

      // * for successful insertion
      if (result?.data) {
        const successMsg = result?.data?.message;

        toast.success(successMsg, {
          id: taostId,
          duration: 2000,
        });

        dispatch(clearBookingData());

        setTimeout(() => {
          navigate("/");
        }, 1600);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong !!!", { id: taostId, duration: 1400 });
    }
  };

  return (
    <div className="BookingConfirmationContainer  py-8 ">
      <div className="BookingConfirmationWrapper  bg-gray-100 p-3 shadow rounded-md  flex flex-col justify-center items-center w-[40%] m-auto ">
        <h2 className="text-3xl font-bold mb-6 ">Booking Confirmation</h2>
        <div className="confirmation-details bg-gray-100 p-4 rounded-lg">
          <h3 className="font-bold text-xl mb-4">
            Review your Booking Details
          </h3>
          {/* <p className="mb-1.5">
            <strong>Car ID:</strong> {booking.carId}
          </p> */}
          <p>
            <strong>Date:</strong> {booking.date}
          </p>
          <p className="mb-1.5">
            <strong>Start Time:</strong> {booking.startTime}
          </p>
          <p className="mb-1.5">
            <strong>Drop Location:</strong> {booking.dropLocation}
          </p>
          <p className="mb-1.5">
            <strong>Payment Method:</strong> {booking.paymentMethod}
          </p>
          <p className="mb-1.5">
            <strong>Additional Features:</strong>{" "}
            {booking.additionalFeature.join(", ")}
          </p>
        </div>

        {/* Confirm button */}
        <div className="mt-4">
          <Button
            className="px-3 xsm:px-4 sm:px-5 md:px-6 font-semibold text-xs sm:text-sm md:text-base bg-prime50 hover:bg-prime100 active:scale-95 duration-500 "
            onClick={() => handleConfirmBooking()}
          >
            Confirm Booking
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BookingConfirmation;
