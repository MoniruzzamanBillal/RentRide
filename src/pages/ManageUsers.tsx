import { TableDataError } from "@/components/ui";
import { useGetUsersQuery } from "@/redux/features/user/user.api";
import { TUserResponseData } from "@/types/globalTypes";
import { userRole } from "@/util/Constants";

const ManageUsers = () => {
  const {
    data: usersData,
    isLoading: userDataLoading,
    isError: userDataError,
  } = useGetUsersQuery(undefined);

  console.log(usersData?.data);

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
        <td className="p-4 text-center">{user?.name}</td>
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
      </div>
    </div>
  );
};

export default ManageUsers;
