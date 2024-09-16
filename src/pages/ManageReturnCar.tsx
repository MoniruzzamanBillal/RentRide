/* eslint-disable @typescript-eslint/no-explicit-any */
import { ManageReturnCarModal, TableDataError } from "@/components/ui";
import { useGetCompletedBookingsQuery } from "@/redux/features/booking/booking.api";
import { useReturnCarMutation } from "@/redux/features/cars/car.api";
import { TBooking } from "@/types/globalTypes";
import { carStatus } from "@/util/Constants";
import { toast } from "sonner";

const ManageReturnCar = () => {
  const {
    data: completedBookingData,
    isLoading: completedCarDataLoading,
    isError: carDataError,
    refetch: completedDataRefetch,
  } = useGetCompletedBookingsQuery(undefined);

  const [returnCar] = useReturnCarMutation();

  console.log(completedBookingData?.data);

  // ! for return car
  const handleReturnCar = async (id: string) => {
    const toastId = toast.loading("Returning car!!!");

    try {
      const response = await returnCar(id);
      // * for any error
      if (response?.error) {
        toast.error((response?.error as any)?.data?.message, {
          id: toastId,
          duration: 1400,
        });
      }

      if (response?.data?.success) {
        toast.success(response?.data?.message, { id: toastId, duration: 1200 });
        completedDataRefetch();
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong !! ", { duration: 2000, id: toastId });
    }
  };

  let content = null;

  // *  if data is loading
  if (completedCarDataLoading) {
    content = (
      <tr>
        <td colSpan={8} className="p-4">
          <div
            className="flex justify-center items-center h-14
               "
          >
            <div className="rounded-full size-8 bg-prime100 animate-ping"></div>
          </div>
        </td>
      </tr>
    );
  }

  // *  if any error
  if (!completedCarDataLoading && carDataError) {
    content = (
      <tr>
        <td colSpan={8}>
          <TableDataError message="Something went wrong " />
        </td>
      </tr>
    );
  }

  // * for no data
  if (
    !completedCarDataLoading &&
    !carDataError &&
    completedBookingData?.data?.length < 1
  ) {
    content = (
      <tr>
        <td colSpan={8}>
          <TableDataError message="Nothing Found" />
        </td>
      </tr>
    );
  }

  // * for user data
  if (
    !completedCarDataLoading &&
    !carDataError &&
    completedBookingData?.data?.length
  ) {
    content = completedBookingData?.data?.map((booking: TBooking) => (
      <tr key={booking._id} className="border-b">
        <td className="p-4 text-center"> {booking?.car?.name} </td>
        <td className="p-4 text-center"> car image </td>
        <td className="p-4 text-center"> {booking?.date} </td>
        <td className="p-4 text-center"> {booking?.dropLocation} </td>
        <td className="p-4 text-center"> {booking?.totalCost} </td>

        <td
          className={`p-4 text-center font-semibold ${
            booking?.car?.status === carStatus.unavailable
              ? "text-red-600"
              : "text-green-600"
          }  `}
        >
          {booking?.car?.status}
        </td>

        <td
          className={`p-4 text-center font-semibold ${
            booking?.payment === "pending" ? "text-red-600" : "text-green-600"
          }  `}
        >
          {booking?.payment}
        </td>

        <td
          className={`p-4  ${
            booking?.car?.status === carStatus.available
              ? " hidden "
              : " flex justify-center items-center"
          }  `}
        >
          <ManageReturnCarModal
            handleReturnCar={handleReturnCar}
            id={booking?.car?._id}
          />
        </td>
      </tr>
    ));
  }

  return (
    <div className="ManageReturnCarContainer">
      <div className="manageReturnWrapper bg-gray-100 shadow rounded-md p-3  ">
        <h1 className="brand text-2xl font-medium mb-4 ">
          {" "}
          Manage Return cars{" "}
        </h1>
        {/* table starts  */}
        <div className="tableContainer relative w-full overflow-auto mt-4 ">
          <table className="w-full text-sm">
            <thead className="border-b">
              <tr>
                <th className="px-4 font-medium">Name</th>
                <th className="px-4 font-medium">Image</th>
                <th className="px-4 font-medium">Booking Date</th>
                <th className="px-4 font-medium">Drop location</th>
                <th className="px-4 font-medium">Earning</th>
                <th className="px-4 font-medium">Car Status</th>
                <th className="px-4 font-medium">Payment Status</th>
                <th className="px-4 font-medium">Action</th>
              </tr>
            </thead>
            <tbody>{content}</tbody>
          </table>
        </div>
        {/* table ends  */}
      </div>
    </div>
  );
};

export default ManageReturnCar;
