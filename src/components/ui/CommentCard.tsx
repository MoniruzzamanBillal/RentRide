import { FaStar } from "react-icons/fa";

const CommentCard = () => {
  return (
    <div className="comment   w-[100%] xsm:w-[90%] sm:w-[84%] md:w-[80%] xmd:w-[68%] xl:w-[60%] xlm:w-[50%]  flex gap-x-2 items-center  ">
      {/* user profile image  */}
      <div className="userImg size-[2.2rem] xsm:size-[2.8rem] rounded-full overflow-auto ">
        <img
          className=" h-full w-full  "
          src="https://i.ibb.co/Kqrjj24/Doc-P-754782-638436953125887126.png"
          alt=""
        />
      </div>

      {/* comment info   */}
      <div className="commentInfo ">
        <p className="font-bold text-sm xsm:text-base ">user name </p>

        <p className="text-xs xsm:text-base "> comment text , comment text </p>

        <div className="rating flex gap-x-2 mt-1  ">
          <FaStar className="text-yellow-400  text-base xsm:text-lg " />
          <FaStar className="text-yellow-400  text-base xsm:text-lg " />
          <FaStar className="text-yellow-400  text-base xsm:text-lg " />
          <FaStar className="text-yellow-400  text-base xsm:text-lg " />
          <FaStar className="text-yellow-400  text-base xsm:text-lg " />
        </div>
      </div>

      {/*  */}
    </div>
  );
};

export default CommentCard;
