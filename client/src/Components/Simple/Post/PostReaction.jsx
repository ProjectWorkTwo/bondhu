import React from "react";
import { IoMdHeart } from "react-icons/io";
import { MdModeComment } from "react-icons/md";
import { FaShare } from "react-icons/fa";

const PostReaction = ({
  setReactorBoxStatus,
  setCommentBoxStatus,
  setShareMember,
}) => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-2">
      <div className="w-full grid grid-cols-3 place-items-center text-center gap-3 underline text-xs sm:text-sm px-3 text-secondaryColor cursor-pointer select-none">
        <span onClick={() => setReactorBoxStatus((prev) => true)}>
          55k likes
        </span>
        <span onClick={() => setCommentBoxStatus((prev) => !prev)}>
          55k comments
        </span>
        <span onClick={() => setShareMember((prev) => true)}>55k shares</span>
      </div>
      <div className="w-full grid grid-cols-3 gap-3">
        <div className="w-full shadow-2xl border px-3 py-2 text-primaryColor rounded-md cursor-pointer grid place-items-center text-xl md:text-2xl hover:bg-primaryColor hover:text-whiteColor hover:border-primaryColor hover:scale-90 commonAnim">
          <IoMdHeart />
        </div>
        <div
          className="w-full shadow-2xl border px-3 py-2 text-primaryColor rounded-md cursor-pointer grid place-items-center text-xl md:text-2xl hover:bg-primaryColor hover:text-whiteColor hover:border-primaryColor hover:scale-90 commonAnim"
          onClick={() => setCommentBoxStatus((prev) => !prev)}
        >
          <MdModeComment />
        </div>
        <div className="w-full shadow-2xl border px-3 py-2 text-primaryColor rounded-md cursor-pointer grid place-items-center text-xl md:text-2xl hover:bg-primaryColor hover:text-whiteColor hover:border-primaryColor hover:scale-90 commonAnim">
          <FaShare />
        </div>
      </div>
    </div>
  );
};

export default PostReaction;
