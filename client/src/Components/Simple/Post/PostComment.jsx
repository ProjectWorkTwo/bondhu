import React from "react";
import { BsFillSendFill } from "react-icons/bs";
import Comment from "./Comment";

const PostComment = ({ fullScreen }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="w-full flex flex-col gap-3">
      <form
        className="p-1 rounded-full border-2 border-primaryColor flex gap-2 overflow-hidden"
        onClick={handleSubmit}
      >
        <button
          type="submit"
          className="flex-grow-0 flex-shrink-0 size-10 text-whiteColor bg-primaryColor rounded-full grid place-items-center text-2xl"
        >
          <BsFillSendFill />
        </button>
        <input
          type="text"
          className="w-full rounded-full border-none bg-transparent outline-none text-secondaryColor placeholder:text-secondaryColor placeholder:opacity-60"
          placeholder="Write your comment...."
        />
      </form>
      <div
        className={`w-full flex flex-col gap-3 ${
          fullScreen || "h-[300px]"
        } overflow-auto p-2`}
      >
        <Comment />
        <Comment />
        <Comment />
        <Comment />
      </div>
    </div>
  );
};

export default PostComment;
