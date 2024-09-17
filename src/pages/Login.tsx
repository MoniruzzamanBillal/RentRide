/* eslint-disable @typescript-eslint/no-explicit-any */
import { RentForm, RentInput } from "@/components/form";
import Wrapper from "@/components/shared/Wrapper";
import { Button } from "@/components/ui/button";
import { useLogInMutation } from "@/redux/features/auth/auth.api";
import { setUser } from "@/redux/features/auth/auth.slice";
import { useAppDispatch } from "@/redux/hook";

import loginSchema from "@/schemas/Login.schema";
import { TUser } from "@/types/globalTypes";
import { verifyToken } from "@/util/Verify.token";
import { zodResolver } from "@hookform/resolvers/zod";

import { FieldValues } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Login = () => {
  const dispatch = useAppDispatch();
  const [logIn] = useLogInMutation();

  const navigate = useNavigate();

  // ! for log in
  const handleLogin = async (data: FieldValues) => {
    const { email, password } = data;

    const toastId = toast.loading("Loginng in...");

    try {
      const payload = {
        email,
        password,
      };

      const result = await logIn(payload).unwrap();

      if (result?.success) {
        const token = result?.token;

        const user = verifyToken(token) as TUser;

        dispatch(setUser({ user, token }));

        toast.success(result?.message, { id: toastId, duration: 1400 });

        setTimeout(() => {
          navigate("/", {
            replace: true,
          });
        }, 500);
      }
    } catch (error) {
      const errorMsg = (error as any)?.data?.message;
      toast.error(errorMsg, { id: toastId, duration: 1800 });
      console.log(error);
    }
  };

  return (
    <div className="LoginContainer w-full min-h-screen  imageCenter   bg-[url('https://i.ibb.co/ctgNtL9/loginBg.jpg')] flex items-center justify-center ">
      <Wrapper className="formContainer py-14 ">
        <div className="    w-[95%] xsm:w-[85%] sm:w-[78%] md:w-[70%] xmd:w-[65%] lg:w-[55%] m-auto p-3 xsm:p-5 sm:p-7 md:p-10  rounded-md shadow-xl bg-gray-200 backdrop-blur bg-opacity-60 dark:backdrop-blur  ">
          <p className=" mb-3 xsm:mb-5 sm:mb-8 text-xl xsm:text-2xl sm:text-3xl text-center font-semibold CormorantFont text-gray-700 dark:text-white  ">
            Log in
          </p>

          {/*  */}

          {/* form starts  */}
          <RentForm onSubmit={handleLogin} resolver={zodResolver(loginSchema)}>
            <RentInput type="email" label="Email :" name="email" />

            <RentInput type="password" label="Password :" name="password" />

            <Button className="px-3 xsm:px-4 sm:px-5 md:px-6 font-semibold text-xs sm:text-sm md:text-base bg-prime50 hover:bg-prime100 active:scale-95 duration-500">
              Log in
            </Button>
          </RentForm>
          {/* form ends */}

          <div className="forgotPassword  mt-2  font-semibold underline cursor-pointer text-blue-800 ">
            <Link to={"/forgotPassword"}>forgot password</Link>
          </div>

          {/*  */}

          <div className="text-center  mt-6  ">
            <a className="right-0 inline-block text-sm font-semibold align-baseline text-gray-900 hover:text-gray-950  ">
              Don't have any account ?{" "}
              <span className=" text-blue-700 font-bold cursor-pointer ">
                <Link to={`/sign-up`}>Sign up </Link>
              </span>
            </a>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Login;
