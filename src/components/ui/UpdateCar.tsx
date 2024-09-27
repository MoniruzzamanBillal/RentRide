/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  useGetCarQuery,
  useUpdateCarMutation,
} from "@/redux/features/cars/car.api";
import { useNavigate, useParams } from "react-router-dom";

import { useEffect } from "react";
import { RentForm, RentInput, RentSelectInput } from "../form";
import { FieldValues } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import UpdateCarSchema from "@/schemas/UpdateCarSchema";
import {
  carFeaturesOptions,
  dropLocationOptions,
  isElectricCarOption,
} from "@/util/Constants";
import RentMultiSelectInput from "../form/RentMultiSelectInput ";
import { Button } from "./button";
import { toast } from "sonner";
import FormSubmitLoading from "./FormSubmitLoading";

const UpdateCar = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  if (!id) {
    throw new Error("Something went wrong!! ");
  }

  console.log(id);

  const {
    data: carDetail,
    isLoading: carDetailLoading,
    isFetching: carDetailFetching,
  } = useGetCarQuery(id, { skip: !id });

  const [updateCar, { isLoading }] = useUpdateCarMutation();

  let defaultValues;
  defaultValues = {
    name: carDetail?.data?.name,
    description: carDetail?.data?.description,
    color: carDetail?.data?.color,
    isElectric: carDetail?.data?.isElectric === true ? "yes" : "no",
    features: carDetail?.data?.features,
    pricePerHour: carDetail?.data?.pricePerHour,
    dropLocation: carDetail?.data?.dropLocation,
  };

  //   ! for updating car data
  const handleUpdateCar = async (data: FieldValues) => {
    const {
      name,
      description,
      color,
      isElectric: electric,
      features,
      dropLocation,
      pricePerHour,
    } = data;

    const elec = electric === "yes" ? true : false;

    const taostId = toast.loading("Updating car....");

    try {
      const carData = {
        name,
        description,
        color,
        isElectric: elec,
        features,
        pricePerHour,
        dropLocation,
      };

      const result = await updateCar({ id, carData });

      //  *  for any  error
      if (result?.error) {
        console.log(result?.error);
        const errorMessage = (result?.error as any)?.data?.message;

        toast.error(errorMessage, {
          id: taostId,
          duration: 1500,
        });
      }

      // * for successful updation
      if (result?.data) {
        console.log(result?.data);
        const successMsg = result?.data?.message;

        toast.success(successMsg, {
          id: taostId,
          duration: 1000,
        });

        setTimeout(() => {
          navigate("/dashboard/admin/manage-car");
        }, 600);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong !!!", { id: taostId, duration: 1400 });
    }
  };

  // ! effect for getting default value
  useEffect(() => {
    if (carDetail?.data) {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      defaultValues = {
        name: carDetail?.data?.name,
        description: carDetail?.data?.description,
        color: carDetail?.data?.color,
        isElectric: carDetail?.data?.isElectric === true ? "yes" : "no",
        features: carDetail?.data?.features,
        pricePerHour: carDetail?.data?.pricePerHour,
        dropLocation: carDetail?.data?.dropLocation,
      };
    }
  }, [carDetail]);

  let content = null;

  //   ! if data is loading
  if (carDetailLoading || carDetailFetching) {
    content = (
      <div className="flex justify-center items-center h-screen">
        <div className="rounded-full h-20 w-20 bg-prime100 animate-ping"></div>
      </div>
    );
  } else if ((!carDetailLoading || !carDetailFetching) && carDetail?.data) {
    content = (
      <RentForm
        defaultValues={defaultValues}
        onSubmit={handleUpdateCar}
        resolver={zodResolver(UpdateCarSchema)}
      >
        <RentInput
          type="text"
          label="Name :"
          name="name"
          placeholder="Enter car name"
        />
        {/* <RentInput type="file" label="Car Image :" name="image" /> */}
        <RentInput
          type="text"
          label="Description :"
          name="description"
          placeholder="Enter car description"
        />
        <RentInput
          type="text"
          label="Color :"
          name="color"
          placeholder="Enter car color"
        />

        <RentSelectInput
          name="isElectric"
          label="Electric  : "
          options={isElectricCarOption}
        />
        <RentMultiSelectInput
          name="features"
          label="Features : "
          options={carFeaturesOptions}
        />
        <RentMultiSelectInput
          name="dropLocation"
          label="Drop locations: "
          options={dropLocationOptions}
        />

        <RentInput
          type="number"
          label="Price per hour :"
          name="pricePerHour"
          placeholder="Enter car price per hour cost"
        />

        <Button
          disabled={isLoading}
          className={`px-3 xsm:px-4 sm:px-5 md:px-6 font-semibold text-xs sm:text-sm md:text-base  active:scale-95 duration-500 ${
            isLoading
              ? " cursor-not-allowed bg-gray-300  "
              : " bg-green-600 hover:bg-green-700"
          } `}
        >
          Update
        </Button>
      </RentForm>
    );
  }

  return (
    <>
      {isLoading && <FormSubmitLoading />}

      <div className="UpdateCarContainer  py-8 bg-gray-100 dark:bg-black100 min-h-screen p-3 shadow rounded-md ">
        <div className="UpdateCarWrapper">
          <h1 className=" mb-8 px-3 xsm:px-4 sm:px-5 md:px-6 font-bold text-2xl  md:text-3xl text-center  ">
            Update car
          </h1>

          {/* update car form container starts  */}
          <div className="updateCarForm p-1 w-[95%] xsm:w-[85%] sm:w-[78%] md:w-[70%] xmd:w-[65%] lg:w-[55%] m-auto ">
            {content}
          </div>
          {/* update car form container ends  */}
        </div>
      </div>
    </>
  );
};

export default UpdateCar;
