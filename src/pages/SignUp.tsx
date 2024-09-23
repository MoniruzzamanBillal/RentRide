/* eslint-disable @typescript-eslint/no-explicit-any */
import { RentForm, RentInput } from "@/components/form";
import Wrapper from "@/components/shared/Wrapper";
import { Button } from "@/components/ui/button";
import { FieldValues } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useNavigate } from "react-router-dom";
import userSchema from "@/schemas/CreateUser.schema";
import RentCheckbox from "@/components/form/RentCheckbox ";
import { useSignUpMutation } from "@/redux/features/auth/auth.api";
import { toast } from "sonner";

const SignUp = () => {
  const navigate = useNavigate();
  const [signUp] = useSignUpMutation();

  // ! for  creating a user
  const handleCreateUser = async (data: FieldValues) => {
    const toastId = toast.loading("creating a user.....");

    const { name, email, password, phone } = data;

    const payload = {
      name,
      email,
      password,
      phone,
    };

    try {
      const result = await signUp(payload);

      // * if there is error
      if (result?.error) {
        const errorMsg = (result?.error as any)?.data?.errorMessages[0]
          ?.message;

        toast.error(errorMsg, {
          id: toastId,
          duration: 1400,
        });

        return;
      }

      // * for success sign up
      if (result?.data?.success) {
        toast.success(result?.data?.message, {
          id: toastId,
          duration: 1400,
        });

        navigate("/login");
      }
    } catch (error) {
      toast.error("Something went wrong!! ", { id: toastId, duration: 1400 });
      console.log(error);
    }
  };

  return (
    <div className="SignUpContainer w-full min-h-screen  imageCenter   bg-[url('https://i.postimg.cc/3w2BvtCZ/signupBg.jpg')] flex items-center justify-center ">
      <Wrapper className="formContainer py-14 ">
        {/*  */}
        <div className="    w-[95%] xsm:w-[85%] sm:w-[78%] md:w-[70%] xmd:w-[65%] lg:w-[55%] m-auto p-3 xsm:p-5 sm:p-7 md:p-10  rounded-md shadow-xl bg-gray-200 dark:bg-black100 backdrop-blur bg-opacity-60 dark:backdrop-blur  ">
          <p className=" mb-3 xsm:mb-5 sm:mb-8 text-xl xsm:text-2xl sm:text-3xl text-center font-semibold CormorantFont text-gray-700 dark:text-white  ">
            Sign up
          </p>

          {/*  */}

          {/* form starts  */}
          <RentForm
            onSubmit={handleCreateUser}
            resolver={zodResolver(userSchema)}
          >
            <RentInput
              type="text"
              label="Name :"
              name="name"
              placeholder="Enter your name"
            />
            <RentInput
              type="email"
              label="Email :"
              name="email"
              placeholder="Enter your email"
            />
            <RentInput
              type="number"
              label="Phone :"
              name="phone"
              placeholder="Enter your phone number"
            />
            <RentInput
              type="password"
              label="Password :"
              name="password"
              placeholder="Enter your password"
            />
            <RentInput
              type="password"
              label="Confirm Password :"
              name="confirmPassword"
              placeholder="Confirm your password "
            />
            <RentCheckbox
              label="I agree to the terms and conditions"
              name="terms"
            />
            <Button className="px-3 xsm:px-4 sm:px-5 md:px-6 font-semibold text-xs sm:text-sm md:text-base bg-prime50 hover:bg-prime100 active:scale-95 duration-500">
              Sign up
            </Button>
          </RentForm>
          {/* form ends */}

          {/*  */}

          <div className="text-center mt-6   ">
            <a className="right-0 inline-block text-sm font-semibold align-baseline text-gray-900 hover:text-gray-950 dark:text-gray-200  ">
              Already have account ?{" "}
              <span className=" text-blue-700 font-bold cursor-pointer ">
                <Link to={`/login`}>Log in </Link>
              </span>
            </a>
          </div>
        </div>
        {/*  */}
      </Wrapper>
    </div>
  );
};

export default SignUp;
