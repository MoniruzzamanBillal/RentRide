/* eslint-disable @typescript-eslint/no-explicit-any */
import { ManageBookingModal, TableDataError } from "@/components/ui";

import {
  useApproveBookingMutation,
  useCancelBookingMutation,
  useGetBookingsQuery,
} from "@/redux/features/booking/booking.api";
import { TBooking } from "@/types/globalTypes";
import { bookingStatus } from "@/util/Constants";
import { toast } from "sonner";

const ManageBookings = () => {
  const {
    data: bookingsData,
    isLoading: bookingsDataLoading,
    isError: bookingsDataError,
    refetch: bookingDataRefetch,
  } = useGetBookingsQuery(undefined);

  const [approveBooking] = useApproveBookingMutation();
  const [cancelBooking] = useCancelBookingMutation();

  console.log(bookingsData?.data);

  // ! for approving booking
  const handleApproveBooking = async (id: string) => {
    const toastId = toast.loading("Approving booking !! ");

    try {
      const response = await approveBooking(id);

      // * for any error
      if (response?.error) {
        toast.error((response?.error as any)?.data?.message, {
          id: toastId,
          duration: 1400,
        });
      }

      if (response?.data?.success) {
        toast.success(response?.data?.message, { id: toastId, duration: 1200 });
        bookingDataRefetch();
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong !! ", { duration: 2000, id: toastId });
    }
  };

  // !  for cancel booking
  const handleCancelBooking = async (id: string) => {
    const toastId = toast.loading("Approving booking !! ");

    try {
      const response = await cancelBooking(id);

      // * for any error
      if (response?.error) {
        toast.error((response?.error as any)?.data?.message, {
          id: toastId,
          duration: 1400,
        });
      }

      if (response?.data?.success) {
        toast.success(response?.data?.message, { id: toastId, duration: 1200 });
        bookingDataRefetch();
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong !! ", { duration: 2000, id: toastId });
    }
  };

  let content = null;

  // *  if data is loading
  if (bookingsDataLoading) {
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
  if (!bookingsDataLoading && bookingsDataError) {
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
    !bookingsDataLoading &&
    !bookingsDataError &&
    bookingsData?.data?.length < 1
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
    !bookingsDataLoading &&
    !bookingsDataError &&
    bookingsData?.data?.length
  ) {
    content = bookingsData?.data?.map((booking: TBooking) => (
      <tr key={booking._id} className="border-b">
        <td className="p-4 text-center"> {booking?.user?.name} </td>
        <td className="p-4 text-center"> {booking?.user?.email} </td>
        <td className="p-4 text-center"> {booking?.car?.name} </td>
        <td className="p-4 text-center"> {booking?.date} </td>
        <td className="p-4 text-center"> {booking?.dropLocation} </td>
        <td
          className={`p-4 text-center font-semibold ${
            booking?.status === bookingStatus?.pending
              ? "text-red-600"
              : booking?.status === bookingStatus.approved
              ? "text-blue-700"
              : "text-green-600"
          }  `}
        >
          {" "}
          {booking?.status}{" "}
        </td>
        <td
          className={`p-4  ${
            booking?.status === bookingStatus.approved ||
            booking?.status === bookingStatus.completed
              ? " hidden "
              : " flex justify-center items-center"
          }  `}
        >
          <ManageBookingModal
            handleApproveBooking={handleApproveBooking}
            handleCancelBooking={handleCancelBooking}
            id={booking._id}
          />
        </td>
      </tr>
    ));
  }

  return (
    <div className="ManageBookingsContainer">
      <div className="manageBookingWrapper bg-gray-100 dark:bg-black100 shadow rounded-md p-3 ">
        <h3 className="brand text-2xl font-medium mb-4 ">All Bookings</h3>

        {/* table starts  */}
        <div className="tableContainer relative w-full overflow-auto mt-4 ">
          <table className="w-full text-sm dark:bg-black20">
            <thead className="border-b">
              <tr className="w-full text-sm bg-sky-100 dark:bg-black100 dark:text-gray-200 ">
                <th className="px-4 font-medium">Name</th>
                <th className="px-4 font-medium">Email</th>

                <th className="px-4 font-medium">Car</th>
                <th className="px-4 font-medium">Date</th>
                <th className="px-4 font-medium">Drop location</th>
                <th className="px-4 font-medium">Status</th>
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

export default ManageBookings;
