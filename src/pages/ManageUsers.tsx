/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChangeRoleModal, TableDataError } from "@/components/ui";

import {
  useChangeUserRoleMutation,
  useGetUsersQuery,
} from "@/redux/features/user/user.api";
import { TUserResponseData } from "@/types/globalTypes";
import { userRole } from "@/util/Constants";
import { toast } from "sonner";

const ManageUsers = () => {
  const {
    data: usersData,
    isLoading: userDataLoading,
    isError: userDataError,
    refetch: userDataRefetch,
  } = useGetUsersQuery(undefined);

  const [changeUserRole] = useChangeUserRoleMutation();

  console.log(usersData?.data);

  // ! for changing user role
  const handleChangeRole = async (id: string) => {
    const toastId = toast.loading("Changing user role !! ");

    try {
      const response = await changeUserRole(id);

      // * for any error
      if (response?.error) {
        toast.error((response?.error as any)?.data?.message, {
          id: toastId,
          duration: 1400,
        });
      }

      if (response?.data?.success) {
        toast.success(response?.data?.message, { id: toastId, duration: 1500 });
        userDataRefetch();
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong !! ", { id: toastId, duration: 1200 });
    }
  };

  let content = null;
  // *  if data is loading
  if (userDataLoading) {
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
  if (!userDataLoading && userDataError) {
    content = (
      <tr>
        <td colSpan={8}>
          <TableDataError message="Something went wrong " />
        </td>
      </tr>
    );
  }

  // * for no user
  if (!userDataLoading && !userDataError && usersData?.data?.length < 1) {
    content = (
      <tr>
        <td colSpan={8}>
          <TableDataError message="Nothing Found" />
        </td>
      </tr>
    );
  }

  // * for user data
  if (!userDataLoading && !userDataError && usersData?.data?.length) {
    content = usersData?.data?.map((user: TUserResponseData) => (
      <tr key={user._id} className="border-b">
        <td className="p-4 text-center">{user?.name}</td>
        <td className="p-4 text-center">{user?.email}</td>
        <td className="p-4 text-center">{user?.phone}</td>
        <td
          className={`p-4 text-center font-semibold ${
            user?.role === userRole.admin ? " text-red-600 " : "text-green-600"
          }  `}
        >
          {user?.role}
        </td>
        {user?.role === userRole.admin ? (
          ""
        ) : (
          <td className="p-4 text-center  ">
            <ChangeRoleModal changeRole={handleChangeRole} id={user?._id} />
          </td>
        )}
      </tr>
    ));
  }

  return (
    <div className="ManageUsersContainer">
      <div className="ManageUsersWrapper bg-gray-100 shadow rounded-md p-3  ">
        <h3 className="brand text-2xl font-medium mb-4 "> Manage Users </h3>

        {/* manage user table starts  */}
        <div className="manageUserTable relative w-full overflow-auto mt-4 ">
          <table className="w-full text-sm">
            <thead className="border-b">
              <tr>
                <th className="px-4 font-medium">Name</th>
                <th className="px-4 font-medium">Email </th>
                <th className="px-4 font-medium">Phone </th>
                <th className="px-4 font-medium">Role </th>
                <th className="px-4 font-medium">Change role </th>
              </tr>
            </thead>
            <tbody>{content}</tbody>
          </table>
        </div>
        {/* manage user table ends  */}

        {/*  */}
        {/*  */}
      </div>
    </div>
  );
};

export default ManageUsers;
