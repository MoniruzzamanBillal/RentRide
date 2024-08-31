const UserProfile = () => {
  return (
    <div className="UserProfileContainer">
      <div className="userProfileWrapper bg-gray-100 p-3 rounded-md shadow  ">
        {/* user name  */}
        <div className="border-b space-y-2">
          <div className="flex justify-between items-center">
            <h3 className="text-2xl font-semibold">User</h3>
            <span className="text-xs underline cursor-pointer">Edit</span>
          </div>
          <div className="">
            <div className=" pb-2">
              <span className="text-slate-600 underline">data?.user?.name</span>
            </div>
          </div>
        </div>

        {/* user name ends  */}

        {/* contact info section starts  */}
        <div className="border-b mt-2 pb-2">
          <h3 className="text-2xl font-semibold">Contact information</h3>
          <div className="">
            <div className="space-y-1">
              <span className="text-slate-600">data?.user?.email</span>
              <div className="text-gray-500 ">data?.user?.phone</div>
            </div>
          </div>
        </div>
        {/* contact info section ends  */}

        {/* address starts  */}
        <div className="mt-2 text-slate-600">
          <div>
            <h3 className="text-2xl font-semibold">Address</h3>
          </div>
          <div className="">
            <div>data?.address, data?.city,</div>
          </div>
        </div>
        {/* address ends  */}
      </div>
    </div>
  );
};

export default UserProfile;
