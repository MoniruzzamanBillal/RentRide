import {
  CompleteBookingModal,
  ManageUserBookingModal,
  TableDataError,
} from "@/components/ui";
import {
  useCancelBookingMutation,
  useUserBookingQuery,
} from "@/redux/features/booking/booking.api";
import { TBooking } from "@/types/globalTypes";
import { bookingStatus } from "@/util/Constants";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const UserBooking = () => {
  const navigate = useNavigate();
  const {
    data: userBookingData,
    isLoading: userBookingDataLoading,
    isError: userBookingDataError,
    refetch: userBookingDataRefetch,
  } = useUserBookingQuery(undefined);

  const [cancelBooking] = useCancelBookingMutation();

  // console.log(userBookingData?.data);

  // ! for  updating
  const handleUpdateBooking = (id: string) => {
    navigate(`/update-book-car/${id}`);
  };

  // ! for  cancel booking
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
        userBookingDataRefetch();
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong !! ", { duration: 2000, id: toastId });
    }
  };

  // ! for completing booking
  const handleCompleteBooking = (id: string) => {
    navigate(`/complete-booking/${id}`);
  };

  let content = null;

  // *  if data is loading
  if (userBookingDataLoading) {
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
  else if (!userBookingDataLoading && userBookingDataError) {
    content = (
      <tr>
        <td colSpan={8}>
          <TableDataError message="Something went wrong " />
        </td>
      </tr>
    );
  }

  // * for no data
  else if (
    !userBookingDataLoading &&
    !userBookingDataError &&
    userBookingData?.data?.length < 1
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
  else if (
    !userBookingDataLoading &&
    !userBookingDataError &&
    userBookingData?.data?.length
  ) {
    content = userBookingData?.data?.map((booking: TBooking) => (
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
          {booking?.status}{" "}
        </td>
        <td
          className={`p-4   ${
            booking?.status === bookingStatus.completed
              ? "hidden"
              : "flex justify-center items-center"
          } `}
        >
          {booking?.status === bookingStatus.pending ? (
            <ManageUserBookingModal
              handleUpdateBooking={handleUpdateBooking}
              handleCancelBooking={handleCancelBooking}
              id={booking._id}
            />
          ) : booking?.status === bookingStatus.approved ? (
            <CompleteBookingModal
              handleCompleteBooking={handleCompleteBooking}
              id={booking._id}
            />
          ) : (
            " "
          )}
        </td>
      </tr>
    ));
  }

  return (
    <div className="UserBookingContainer">
      <div className="UserBookingWrapper bg-gray-100 shadow rounded-md p-3">
        <h3 className="brand text-2xl font-medium mb-4 ">My Bookings</h3>

        {/* table starts  */}
        <div className="tableContainer relative w-full overflow-auto mt-4 ">
          <table className="w-full text-sm">
            <thead className="border-b">
              <tr>
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

export default UserBooking;
