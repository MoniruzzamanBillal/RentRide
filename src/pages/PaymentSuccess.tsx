import { Button } from "@/components/ui/button";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const PaymentSuccess = () => {
  const navigate = useNavigate();

  const handleNavigateProduct = () => {
    navigate("/dashboard/user/user-payment");
    window.location.reload();
  };

  return (
    <div className="paymentSuccessContainer bg-gray-200 ">
      <div className="paymentSuccessWrapper min-h-screen  flex justify-center items-center   ">
        <div className="confirmationCard bg-white py-8 px-16 rounded-md shadow-lg border border-gray-100 flex flex-col  justify-center items-center gap-y-3  ">
          {/* icon starts  */}
          <div className="icon  text-center flex justify-center items-center ">
            <IoIosCheckmarkCircleOutline className=" text-7xl text-pink-600 " />
          </div>
          {/* icon ends  */}

          <p className=" text-3xl font-semibold ">
            Your payment is confirmed !!
          </p>

          <Button
            onClick={() => handleNavigateProduct()}
            className=" mt-3  bg-pink-600 hover:bg-pink-700 hover:scale-[1.01] hover:shadow-md active:scale-100  "
          >
            Continue Booking
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
