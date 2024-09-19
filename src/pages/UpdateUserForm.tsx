/* eslint-disable @typescript-eslint/no-explicit-any */

import {
  useGetSingleUserQuery,
  useUpdateUserMutation,
} from "@/redux/features/user/user.api";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "./Loading";
import Wrapper from "@/components/shared/Wrapper";
import { RentForm, RentInput } from "@/components/form";
import { Button } from "@/components/ui/button";
import { FieldValues } from "react-hook-form";
import UpdateUserSchema from "@/schemas/UpdateUserSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { toast } from "sonner";

const UpdateUserForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const { data: userData, isLoading: userDataLoadig } = useGetSingleUserQuery(
    id!,
    { skip: !id }
  );

  const [updateUser] = useUpdateUserMutation();

  //   console.log(userData?.data);

  let defaultValues;
  defaultValues = {
    email: userData?.data?.email,
    name: userData?.data?.name,
    phone: userData?.data?.phone,
  };

  //   ! for updating a user
  const handleUpdateUser = async (data: FieldValues) => {
    const { email, name, phone } = data;

    const toastId = toast.loading("updating user.....");

    try {
      const payload = {
        email,
        name,
        phone,
      };

      const result = await updateUser(payload);

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

        setTimeout(() => {
          navigate("/dashboard");
        }, 1000);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong!! ", { id: toastId, duration: 1400 });
    }
  };

  //   ! use effect for getting default values
  useEffect(() => {
    if (userData?.data) {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      defaultValues = {
        email: userData?.data?.email,
        name: userData?.data?.name,
        phone: userData?.data?.phone,
      };
    }
  }, [userData]);

  if (userDataLoadig) {
    return <Loading />;
  }

  return (
    <div className="UpdateUserFormContainer dark:bg-black50 ">
      <Wrapper className="formContainer py-14 ">
        {/*  */}
        <div className="    w-[95%] xsm:w-[85%] sm:w-[78%] md:w-[70%] xmd:w-[65%] lg:w-[55%] m-auto p-3 xsm:p-5 sm:p-7 md:p-10  rounded-md shadow-xl bg-gray-200 dark:bg-black100 backdrop-blur bg-opacity-60 dark:backdrop-blur  ">
          <p className=" mb-3 xsm:mb-5 sm:mb-8 text-xl xsm:text-2xl sm:text-3xl text-center font-semibold CormorantFont text-gray-700 dark:text-white  ">
            Update user
          </p>

          {/*  */}

          {/* form starts  */}
          <RentForm
            onSubmit={handleUpdateUser}
            resolver={zodResolver(UpdateUserSchema)}
            defaultValues={defaultValues}
          >
            <RentInput type="text" label="Name :" name="name" />
            <RentInput type="email" label="Email :" name="email" />
            <RentInput type="number" label="Phone :" name="phone" />

            <Button className="px-3 xsm:px-4 sm:px-5 md:px-6 font-semibold text-xs sm:text-sm md:text-base bg-prime50 hover:bg-prime100 active:scale-95 duration-500">
              Update
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

export default UpdateUserForm;
