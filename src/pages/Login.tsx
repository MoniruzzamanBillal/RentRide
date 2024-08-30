import { RentForm, RentInput } from "@/components/form";
import Wrapper from "@/components/shared/Wrapper";
import { Button } from "@/components/ui/button";
import loginSchema from "@/schemas/Login.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
  // ! for log in
  const handleLogin = (data: FieldValues) => {
    console.log("Login !!");
    console.log(data);
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

          {/*  */}

          <div className="text-center  ">
            <a className="right-0 inline-block text-sm font-light align-baseline text-gray-900 hover:text-gray-950 dark:text-gray-100 dark:hover:text-gray-200 ">
              Don't have any account ?{" "}
              <span className=" text-blue-700 font-bold cursor-pointer ">
                <Link to={`/sign-up`}>Log in </Link>
              </span>
            </a>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Login;
