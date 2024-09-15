import { ProcedePaymentModal, TableDataError } from "@/components/ui";
import { useUserCompletedBookingQuery } from "@/redux/features/booking/booking.api";
import { TUserCompletedBooking } from "@/types/globalTypes";

const UserPayment = () => {
  const {
    data: userPaymentCompletedBookingData,
    isLoading: userCompletedBookLoading,
    isError: userCompletedBookError,
    refetch: userCompletedBookRefetch,
  } = useUserCompletedBookingQuery(undefined);

  // ! for complete payment
  const handleProcedePayment = (id: string) => {
    console.log("payment ", id);
  };

  let content = null;

  console.log(userPaymentCompletedBookingData?.data);

  // *  if data is loading
  if (userCompletedBookLoading) {
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
  else if (!userCompletedBookLoading && userCompletedBookError) {
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
    !userCompletedBookLoading &&
    !userCompletedBookError &&
    userPaymentCompletedBookingData?.data?.length < 1
  ) {
    content = (
      <tr>
        <td colSpan={8}>
          <TableDataError message="Nothing Found" />
        </td>
      </tr>
    );
  }

  // * for  data
  else if (
    !userCompletedBookLoading &&
    !userCompletedBookError &&
    userPaymentCompletedBookingData?.data?.length
  ) {
    content = userPaymentCompletedBookingData?.data?.map(
      (booking: TUserCompletedBooking) => (
        <tr key={booking._id} className="border-b">
          <td className="p-4 text-center"> {booking?.user?.name} </td>
          <td className="p-4 text-center"> {booking?.car?.name} </td>
          <td className="p-4 text-center"> {booking?.dropLocation} </td>
          <td className="p-4 text-center"> {booking?.date} </td>
          <td className="p-4 text-center"> {booking?.totalCost} </td>

          <td
            className={`p-4 text-center font-semibold ${
              booking?.payment === "pending" ? "text-red-600" : "text-green-600"
            }  `}
          >
            {booking?.payment}{" "}
          </td>
          <td
            className={`p-4   ${
              booking?.payment === "complete"
                ? "hidden"
                : "flex justify-center items-center"
            } `}
          >
            <ProcedePaymentModal
              handleProcedeFunction={handleProcedePayment}
              id={booking?._id}
            />
          </td>
        </tr>
      )
    );
  }

  return (
    <div className="UserPaymentContainer">
      <div className="UserPaymentWrapper bg-gray-100 shadow rounded-md p-3 border border-gray-200  ">
        <h3 className="brand text-2xl font-medium mb-4 ">My Bookings</h3>

        {/* table starts  */}
        <div className="tableContainer relative w-full overflow-auto mt-4 ">
          <table className="w-full text-sm">
            <thead className="border-b">
              <tr>
                <th className="px-4 font-medium">Name</th>
                <th className="px-4 font-medium">Car </th>
                <th className="px-4 font-medium">Drop location</th>
                <th className="px-4 font-medium">Date</th>
                <th className="px-4 font-medium">Cost</th>

                <th className="px-4 font-medium"> Payment Status</th>
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

export default UserPayment;
