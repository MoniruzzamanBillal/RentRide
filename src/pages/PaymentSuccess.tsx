import { Button } from "@/components/ui/button";
import { useSingleBookingQuery } from "@/redux/features/booking/booking.api";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "./Loading";

const PaymentSuccess = () => {
  const { bookingId } = useParams();
  const navigate = useNavigate();

  const { data: bookingData, isLoading } = useSingleBookingQuery(
    bookingId as string,
    { skip: !bookingId }
  );

  const handleNavigateProduct = () => {
    navigate("/dashboard/user/user-payment");
    window.location.reload();
  };

  console.log(bookingId);

  console.log(bookingData?.data);

  let content = null;

  if (isLoading) {
    content = <Loading />;
  } else if (!isLoading && bookingData) {
    content = (
      <div className="confirmationCard bg-white dark:bg-black100 py-8 px-16 rounded-md shadow-lg border border-gray-100 dark:border-gray-700 flex flex-col  justify-center items-center gap-y-3  ">
        {/* icon starts  */}
        <div className="icon  text-center flex justify-center items-center ">
          <IoIosCheckmarkCircleOutline className=" text-7xl text-prime100  dark:text-prime50 " />
        </div>
        {/* icon ends  */}

        <p className=" text-3xl font-semibold mb-3 ">
          Your payment is confirmed !!
        </p>

        {/* payment receipt starts  */}
        <div className="paymentReceiptContainer text-lg mb-3 ">
          <p className="mb-1.5">
            <strong>User name:</strong> {bookingData?.data?.user?.name}
          </p>
          <p className="mb-1.5">
            <strong>User email:</strong> {bookingData?.data?.user?.email}
          </p>
          <p className="mb-1.5">
            <strong>Booking Date:</strong> {bookingData?.data?.date}
          </p>
          <p className="mb-1.5">
            <strong>Drop Location:</strong> {bookingData?.data?.dropLocation}
          </p>
          <p className="mb-1.5">
            <strong>Car :</strong> {bookingData?.data?.car?.name}
          </p>
          <p className="mb-3">
            <strong>Amount :</strong> {bookingData?.data?.totalCost}$
          </p>
          {/* <div className="printBtn print:hidden">
            <button
              onClick={() => window.print()}
              className=" py-1.5 px-3 bg-orange-500 text-sm text-gray-100 font-semibold rounded-md  "
            >
              Print
            </button>
          </div> */}
        </div>
        {/* payment receipt starts  */}

        <Button
          onClick={() => handleNavigateProduct()}
          className=" mt-3  bg-prime50 hover:bg-prime100 hover:scale-[1.01] hover:shadow-md active:scale-100  "
        >
          Continue Booking
        </Button>
      </div>
    );
  }

  return (
    <div className="paymentSuccessContainer bg-gray-200 dark:bg-black20 ">
      <div className="paymentSuccessWrapper min-h-screen  flex justify-center items-center   ">
        {content}
      </div>
    </div>
  );
};

export default PaymentSuccess;
