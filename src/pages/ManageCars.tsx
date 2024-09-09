import { CarDeleteModal, TableDataError } from "@/components/ui";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import {
  useDeleteCarMutation,
  useGetAllCarsQuery,
} from "@/redux/features/cars/car.api";

import { Link } from "react-router-dom";
import { toast } from "sonner";

const ManageCars = () => {
  const {
    data: allCarData,
    isLoading: carDataLoading,
    isError: carDataError,
    refetch: carDataRefetch,
  } = useGetAllCarsQuery(undefined);

  const [deleteCar] = useDeleteCarMutation();

  // ! for deleting a product
  const handleDeleteItem = async (id: string) => {
    const toastId = toast.loading("deleting car !!! ");
    try {
      const response = await deleteCar(id);

      if (response?.data?.success) {
        toast.success(response?.data?.message, { id: toastId, duration: 1500 });
        carDataRefetch();
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong !! ", { id: toastId, duration: 1200 });
    }
  };

  let content = null;
  // *  if data is loading
  if (carDataLoading) {
    content = (
      <tr>
        <td colSpan={8} className="p-4">
          <div
            className="flex justify-center items-center h-16
           "
          >
            <div className="rounded-full size-8 bg-prime100 animate-ping"></div>
          </div>
        </td>
      </tr>
    );
  }

  // * if there is a error
  else if (!carDataLoading && carDataError) {
    content = (
      <tr>
        <td colSpan={8}>
          <TableDataError message="Something went wrong " />
        </td>
      </tr>
    );
  }

  // * for no product
  else if (!carDataLoading && !carDataError && allCarData?.data?.length < 1) {
    content = (
      <tr>
        <td colSpan={8}>
          <TableDataError message="Nothing Found" />
        </td>
      </tr>
    );
  }

  // * if there is a product
  else if (!carDataLoading && !carDataError && allCarData?.data?.length) {
    content = allCarData?.data?.map((item) => (
      <tr key={item._id} className="border-b">
        <td className="p-4 text-center">{item?.name}</td>
        <td className="p-4 text-center"> image</td>

        <td className="p-4 text-center">{item?.color}</td>
        <td className="p-4 text-center">{item?.isElectric ? "Yes" : "No"}</td>

        <td className="p-4 text-center">{item?.pricePerHour}</td>
        <td
          className={`p-4 text-center font-medium ${
            item?.status === "unavailable" ? "text-red-600" : "text-green-600"
          } `}
        >
          {item?.status}{" "}
        </td>

        <td className="p-4 text-center uppercase">
          <Link to={`/dashboard/update-car/${item?._id}`}>
            <Button className=" px-3 xsm:px-4 sm:px-5 md:px-6 font-semibold text-xs sm:text-sm md:text-base bg-green-600 hover:bg-green-700 active:scale-95 duration-500 ">
              Update
            </Button>
          </Link>
        </td>
        <td className="p-4 text-center uppercase">
          <CarDeleteModal
            handleDeleteFunction={handleDeleteItem}
            id={item?._id}
          />
        </td>
      </tr>
    ));
  }

  return (
    <div className="ManageCarsContainer ">
      <div className="manageCarWrapper bg-gray-100 shadow rounded-md p-3 ">
        <h3 className="brand text-2xl font-medium mb-4 ">All Cars</h3>

        {/* new product add  container starts  */}
        <div className="addNewProduct mb-4 ">
          <Link to={"/dashboard/add-car"}>
            <Button className=" px-3 xsm:px-4 sm:px-5 md:px-6 font-semibold text-xs sm:text-sm md:text-base bg-prime50 hover:bg-prime100 active:scale-95 duration-500 ">
              Add new Car
            </Button>
          </Link>

          {/*  */}
        </div>
        {/* new product add  container ends */}

        {/* table starts  */}
        <div className="relative w-full overflow-auto mt-4">
          <table className="w-full text-sm">
            <thead className="border-b">
              <tr>
                <th className="px-4 font-medium">Name</th>
                <th className="px-4 font-medium">Image</th>
                <th className="px-4 font-medium">Color</th>
                <th className="px-4 font-medium">Electric</th>
                <th className="px-4 font-medium">Price Per Hour</th>
                <th className="px-4 font-medium">Status</th>
                <th className="px-4 font-medium">Update</th>
                <th className="px-4 font-medium">Deletee</th>
              </tr>
            </thead>
            <tbody>{content}</tbody>
          </table>
        </div>
        {/* table ends  */}

        {/*  */}
      </div>
    </div>
  );
};

export default ManageCars;
