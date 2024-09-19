import { Loading } from "@/pages";
import { useGetLoggedInUserQuery } from "@/redux/features/user/user.api";
import { useNavigate } from "react-router-dom";

const UserProfile = () => {
  const navigate = useNavigate();

  const { data: loggedInUserData, isLoading: loggedInUserLoading } =
    useGetLoggedInUserQuery(undefined);

  // console.log(loggedInUserData?.data);

  const handleUpdateNavigate = (id: string) => {
    navigate(`/update-user/${id}`);
  };

  if (loggedInUserLoading) {
    return <Loading />;
  }

  return (
    <div className="UserProfileContainer">
      <div className="userProfileWrapper bg-gray-100 dark:bg-black100 p-3 rounded-md shadow  ">
        {/* user name  */}
        <div className="border-b space-y-2 pb-2 ">
          <div
            onClick={() => handleUpdateNavigate(loggedInUserData?.data?._id)}
            className="flex justify-between items-center"
          >
            <h3 className="text-2xl font-semibold">User</h3>
            <span className="text-sm font-medium underline cursor-pointer">
              Edit
            </span>
          </div>
          <div className="">
            <div className=" pb-2">
              <span className="text-slate-700 dark:text-gray-300 text-lg ">
                {loggedInUserData?.data?.name}
              </span>
            </div>
          </div>
        </div>

        {/* user name ends  */}

        {/* contact info section starts  */}
        <div className=" mt-4 pb-2">
          <h3 className="text-2xl font-semibold mb-3 ">Contact information</h3>
          <div className="">
            <div className=" mb-2 space-y-1 text-slate-600 dark:text-gray-100">
              Email :
              <span className="text-slate-700 dark:text-gray-300 ">
                {" "}
                {loggedInUserData?.data?.email}
              </span>
            </div>
            <div className="text-gray-600 dark:text-gray-100 ">
              Phone :
              <span className="text-slate-700 dark:text-gray-300">
                {" "}
                {loggedInUserData?.data?.phone}{" "}
              </span>
            </div>
          </div>
        </div>
        {/* contact info section ends  */}
      </div>
    </div>
  );
};

export default UserProfile;
