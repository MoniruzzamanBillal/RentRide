import Wrapper from "@/components/shared/Wrapper";
import GlassZoomImage from "@/util/GlassZoomImage";
import { useParams } from "react-router-dom";
import { CommentCard, NewComment } from "@/components/ui";

const CarDetail = () => {
  const { id } = useParams();

  if (!id) {
    throw new Error("Something went wrong!! ");
  }

  return (
    <div className="CarDetailContainer py-8 ">
      <Wrapper className="CarDetailWrapper bg-gray-100 py-6 px-4 rounded-md shadow-sm  ">
        {/* top section starts  */}
        <div className="grid gap-8 md:grid-cols-2">
          {/* detail left starts  */}
          <div className=" detailLeft space-y-4">
            {/* images - start  */}
            <div className="relative overflow-hidden rounded-lg  ">
              <GlassZoomImage imageSrc={"https://i.ibb.co/XWy9KF8/car1.png"} />
            </div>
            {/* images - end  */}
          </div>
          {/* detail left ends  */}

          {/* detail right starts  */}
          {/* {/* content - start  */}
          <div className=" detailRight  md:py-8">
            {/* {/* name - start  */}
            <div className="mb-6  ">
              <h2 className="text-3xl font-semibold text-gray-800 lg:text-4xl">
                product name
              </h2>
            </div>
            {/* name - end  */}

            {/* {/* description - start  */}
            <div className=" mb-6 ">
              <p className="text-gray-500">Detail</p>
            </div>
            {/* description - end  */}

            {/* price - start  */}
            <div className="mb-6">
              <div className="  text-lg mb-1.5  ">
                Price Per Hour :{" "}
                <span className=" font-bold text-gray-800 md:text-2xl">
                  50$
                </span>
              </div>
            </div>
            {/* price - end  */}

            {/* product category starts  */}
            <div className="mb-4 flex items-center gap-2 text-gray-900">
              Category : category
            </div>
            {/* product category ends  */}

            {/* available stock starts  */}
            <div className="mb-7 flex items-center gap-2  ">
              <span className={" font-semibold text-green-700  "}>
                available
              </span>
            </div>
            {/* available stock ends  */}

            {/* {/* buttons - start  */}
            <div className="   ">
              <button
                // disabled={productData?.data?.pquantity === 0 ? true : false}
                className={`inline-block flex-1 rounded-lg px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 sm:flex-none md:text-base 
                  bg-prime50 hover:bg-prime100
                
                `}
              >
                Book Now
              </button>
            </div>
            {/* buttons - end  */}
          </div>
          {/* content - end  */}
          {/* detail right ends  */}
        </div>
        {/* top section ends  */}

        {/* comment section starts  */}
        <div className="commentContainer  mt-4 flex flex-col gap-y-5 ">
          {/* add review section starts  */}
          <NewComment />
          {/* add review section ends */}

          {/* all comments starts  */}
          <div className="allComments mt-4 ">
            <h1 className="  mb-6 font-semibold text-lg xsm:text-xl sm:text-3xl md:text-3xl xl:text-4xl text-shadow-blue text-gray-800 ">
              Customer Reviews
            </h1>

            <div className="commentContent flex flex-col gap-y-8 ">
              <CommentCard />
              <CommentCard />
              <CommentCard />
              <CommentCard />
              <CommentCard />
            </div>
          </div>
          {/* all comments ends */}

          {/*  */}
        </div>
        {/* comment section ends */}

        {/*  */}
      </Wrapper>
    </div>
  );
};

export default CarDetail;
