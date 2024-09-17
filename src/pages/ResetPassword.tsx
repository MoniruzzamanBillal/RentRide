import { z } from "zod";
import { RentForm, RentInput } from "@/components/form";
import Wrapper from "@/components/shared/Wrapper";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues } from "react-hook-form";
import { useParams } from "react-router-dom";
import { verifyToken } from "@/util/Verify.token";
import { toast } from "sonner";

const ResetPassword = () => {
  const { token } = useParams();

  console.log(token);
  //   ! for reseting password

  if (!token) {
    toast.error("No valid token detected!!", { duration: 2000 });
  }

  const handleResetPassword = (data: FieldValues) => {
    console.log("reset password !! ");
    console.log(data);

    const verifyTokenData = verifyToken(token as string);

    console.log(verifyTokenData);
  };

  return (
    <div className="ResetPasswordContainer w-full min-h-screen  imageCenter   bg-[url('https://i.postimg.cc/XvsTKcvd/pexels-albert-nunez-18065-88630-1.jpg')] flex items-center justify-center">
      <Wrapper className="ResetPasswordWrapper py-14">
        {/*  */}
        <div className=" w-[95%] xsm:w-[85%] sm:w-[78%] md:w-[70%] xmd:w-[65%] lg:w-[55%] m-auto p-3 xsm:p-5 sm:p-7 md:p-10  rounded-md shadow-xl bg-gray-200 backdrop-blur bg-opacity-60 dark:backdrop-blur  ">
          <p className=" mb-3 xsm:mb-5 sm:mb-8 text-xl xsm:text-2xl sm:text-3xl text-center font-semibold CormorantFont text-gray-700 dark:text-white  ">
            Reset Password
          </p>

          {/*  */}

          {/* form starts  */}
          <RentForm
            onSubmit={handleResetPassword}
            resolver={zodResolver(
              z
                .object({
                  password: z.string().min(6, {
                    message: "Password must be at least 6 characters",
                  }),
                  confirmPassword: z.string().min(6, {
                    message: "Confirm Password must be at least 6 characters",
                  }),
                })
                .refine((data) => data.password === data.confirmPassword, {
                  message: "password don't match ",
                  path: ["confirmPassword"],
                })
            )}
          >
            <RentInput type="password" label="Password :" name="password" />
            <RentInput
              type="password"
              label="Confirm Password :"
              name="confirmPassword"
            />

            <Button className="px-3 xsm:px-4 sm:px-5 md:px-6 font-semibold text-xs sm:text-sm md:text-base bg-prime50 hover:bg-prime100 active:scale-95 duration-500">
              Reset Password
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

export default ResetPassword;
