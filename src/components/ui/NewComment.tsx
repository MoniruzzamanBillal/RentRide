import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { Button } from "./button";

const NewComment = () => {
  const [rating, setRating] = useState(0);
  const [commentText, setCommentText] = useState("");

  const handleAddComment = () => {
    console.log(rating);
    console.log(commentText);
  };

  return (
    <div className="NewCommentContainer">
      <div className="addReviewSection border border-gray-300 p-3 rounded-md ">
        <h1 className="text-2xl font-medium mb-2">Add review </h1>

        {/* star section  */}
        <div className="star flex gap-x-2 mb-3  ">
          {[1, 2, 3, 4, 5].map((ele) => (
            <FaStar
              onClick={() => setRating(ele)}
              className={`p-1  text-3xl cursor-pointer  border  ${
                rating >= ele
                  ? "text-yellow-300 border-yellow-400"
                  : " border-gray-400 text-gray-500 "
              }  `}
            />
          ))}

          {rating > 0 ? (
            <p className=" ml-1  text-lg ">
              <span className="font-medium">{rating}</span>{" "}
              {rating === 1 ? "star" : "stars"}
            </p>
          ) : (
            ""
          )}
        </div>

        {/* text area section  */}
        <textarea
          id="message"
          rows={4}
          onChange={(e) => setCommentText(e.target.value)}
          className=" mb-3 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-md border border-gray-300  outline-none "
          placeholder="Write your thoughts here..."
        />

        {/* submit button  */}
        <Button
          disabled={!rating || !commentText}
          onClick={() => handleAddComment()}
          className={`${
            !rating || !commentText
              ? "bg-gray-800 cursor-not-allowed"
              : "bg-prime50 hover:bg-prime100 hover:scale-[1.02] active:scale-100"
          } font-semibold duration-300`}
        >
          Submit
        </Button>

        {/*  */}
      </div>
    </div>
  );
};

export default NewComment;
