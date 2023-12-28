import React from "react";
import ProfilePic from "./ProfilePic";
import { FaCamera } from "react-icons/fa";

const ProfileTopInfo = () => {
  return (
    <div className="w-[90%] max-w-[440px] mx-auto bg-whiteColor rounded-md shadow-lg -mt-28 relative z-10 flex flex-col justify-center items-center px-4 pb-4 border">
      <div className="-mt-[100px] relative">
        <ProfilePic />
        <form>
          <input type="file" name="profilePic" id="profilePic" hidden />
          <label
            htmlFor="profilePic"
            className="size-10 rounded-full border-4 border-primaryColor grid place-items-center absolute bottom-0 right-0 -translate-x-1/4 -translate-y-1/4 bg-whiteColor hover:bg-primaryColor text-primaryColor hover:text-whiteColor cursor-pointer"
          >
            <FaCamera className="text-xl" />
          </label>
        </form>
      </div>
      <div className="p-4 flex flex-col justify-center items-center gap-2">
        <h1 className="text-center capitalize">Full Name</h1>
        <span className="btnFill1">userName</span>
        <p className="text-center text-grayColor text-sm leading-normal">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus
          ipsum quis ligula vulputate, at auctor orci ullamcorper.
        </p>
        <button className="btnFill1">Send Friend Request</button>
      </div>
    </div>
  );
};

export default ProfileTopInfo;
