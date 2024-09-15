//

import { useGetSingleUserQuery } from "@/redux/features/user/user.api";
import { useParams } from "react-router-dom";
import Loading from "./Loading";
import Wrapper from "@/components/shared/Wrapper";
import { RentForm, RentInput } from "@/components/form";
import { Button } from "@/components/ui/button";
import { FieldValues } from "react-hook-form";
import UpdateUserSchema from "@/schemas/UpdateUserSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";

const UpdateUserForm = () => {
  const { id } = useParams();

  const { data: userData, isLoading: userDataLoadig } = useGetSingleUserQuery(
    id!,
    { skip: !id }
  );

  console.log(userData?.data);

  let defaultValues;
  defaultValues = {
    email: userData?.data?.email,
    name: userData?.data?.name,
    phone: userData?.data?.phone,
  };

  //   ! for updating a user
  const handleUpdateUser = (data: FieldValues) => {
    console.log("update user ");
    console.log(data);

    const { email, name, phone } = data;
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
    <div className="UpdateUserFormContainer">
      <Wrapper className="formContainer py-14 ">
        {/*  */}
        <div className="    w-[95%] xsm:w-[85%] sm:w-[78%] md:w-[70%] xmd:w-[65%] lg:w-[55%] m-auto p-3 xsm:p-5 sm:p-7 md:p-10  rounded-md shadow-xl bg-gray-200 backdrop-blur bg-opacity-60 dark:backdrop-blur  ">
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
