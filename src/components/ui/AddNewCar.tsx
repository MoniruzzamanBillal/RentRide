/* eslint-disable @typescript-eslint/no-explicit-any */
import { useNavigate } from "react-router-dom";
import { RentForm, RentInput, RentSelectInput } from "../form";
import { FieldValues } from "react-hook-form";
import {
  carFeaturesOptions,
  carTypeOptions,
  dropLocationOptions,
  isElectricCarOption,
} from "@/util/Constants";
import { Button } from "./button";
import RentMultiSelectInput from "../form/RentMultiSelectInput ";
import { zodResolver } from "@hookform/resolvers/zod";
import addCarValidationSchema from "@/schemas/AddCarSchema";
import { toast } from "sonner";

import { useAddNewCarMutation } from "@/redux/features/cars/car.api";

const AddNewCar = () => {
  const navigate = useNavigate();
  const [addNewCar, { isLoading }] = useAddNewCarMutation();

  // ! for adding new car
  const handleAddCar = async (data: FieldValues) => {
    const {
      name,
      description,
      color,
      isElectric: electric,
      features,
      dropLocation,
      pricePerHour,
      image,
      type,
    } = data;

    const elec = electric === "yes" ? true : false;

    const payload = {
      name,
      description,
      color,
      isElectric: elec,
      features,
      pricePerHour,
      dropLocation,
      type,
    };
    const cardata = {
      car: payload,
    };

    const formdata = new FormData();

    formdata.append("data", JSON.stringify(cardata));
    formdata.append("file", image);

    const taostId = toast.loading("Adding car....");

    try {
      const result = await addNewCar(formdata);

      console.log(result);

      //  *  for any  error
      if (result?.error) {
        const errorMessage = (result?.error as any)?.data?.message;

        toast.error(errorMessage, {
          id: taostId,
          duration: 1400,
        });
      }

      // * for successful insertion
      if (result?.data) {
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

  return (
    <div className="AddNewCarContainer py-8 bg-gray-100 min-h-screen p-3 shadow rounded-md ">
      <div className="addCarWrapper">
        <h1 className=" mb-8 px-3 xsm:px-4 sm:px-5 md:px-6 font-bold text-2xl  md:text-3xl text-center  ">
          Add new car
        </h1>

        {/* add car form container starts  */}
        <div className="addCarForm p-1 w-[95%] xsm:w-[85%] sm:w-[78%] md:w-[70%] xmd:w-[65%] lg:w-[55%] m-auto ">
          <RentForm
            onSubmit={handleAddCar}
            resolver={zodResolver(addCarValidationSchema)}
          >
            <RentInput type="text" label="Name :" name="name" />
            <RentInput type="file" label="Car Image :" name="image" />
            <RentInput type="text" label="Description :" name="description" />
            <RentInput type="text" label="Color :" name="color" />

            <RentSelectInput
              name="isElectric"
              label="Electric  : "
              options={isElectricCarOption}
            />
            <RentSelectInput
              name="type"
              label="Car Type  : "
              options={carTypeOptions}
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
            />

            <Button
              disabled={isLoading}
              className={`px-3 xsm:px-4 sm:px-5 md:px-6 font-semibold text-xs sm:text-sm md:text-base  active:scale-95 duration-500 ${
                isLoading
                  ? " bg-gray-600 cursor-not-allowed "
                  : " bg-green-600 hover:bg-green-700 "
              } `}
            >
              Add car
            </Button>
          </RentForm>
        </div>
        {/* add car form container ends  */}
      </div>
    </div>
  );
};

export default AddNewCar;
