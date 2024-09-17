import { z } from "zod";

import { RentForm, RentInput } from "@/components/form";
import Wrapper from "@/components/shared/Wrapper";
import { Button } from "@/components/ui/button";
import { FieldValues } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const navigate = useNavigate();

  // ! for handling sent email for email sent link
  const handleSentEmail = (data: FieldValues) => {
    console.log("sent email !! ");
    console.log(data);

    navigate(`/email-reset-confirmation/${data?.email}`);
  };

  return (
    <div
      className={
        "ForgotPasswordContainer w-full min-h-screen  imageCenter   bg-[url('https://i.postimg.cc/XvsTKcvd/pexels-albert-nunez-18065-88630-1.jpg')] flex items-center justify-center "
      }
    >
      <Wrapper className="ForgotPasswordWrapper py-14 ">
        {/*  */}
        <div className=" w-[95%] xsm:w-[85%] sm:w-[78%] md:w-[70%] xmd:w-[65%] lg:w-[55%] m-auto p-3 xsm:p-5 sm:p-7 md:p-10  rounded-md shadow-xl bg-gray-200 backdrop-blur bg-opacity-60 dark:backdrop-blur  ">
          <p className=" mb-3 xsm:mb-5 sm:mb-8 text-xl xsm:text-2xl sm:text-3xl text-center font-semibold CormorantFont text-gray-700 dark:text-white  ">
            Reset Password
          </p>

          {/*  */}

          {/* form starts  */}
          <RentForm
            onSubmit={handleSentEmail}
            resolver={zodResolver(
              z.object({
                email: z.string().min(1, "Email is required"),
              })
            )}
          >
            <RentInput type="email" label="Email :" name="email" />

            <Button className="px-3 xsm:px-4 sm:px-5 md:px-6 font-semibold text-xs sm:text-sm md:text-base bg-prime50 hover:bg-prime100 active:scale-95 duration-500">
              Next
            </Button>
          </RentForm>
          {/* form ends */}

          {/*  */}
        </div>
        {/*  */}
      </Wrapper>
    </div>
  );
};

export default ForgotPassword;
