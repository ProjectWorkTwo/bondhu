import React, { useState } from "react";
import ProfileInfoContainer from "../Components/Simple/Group/ProfileInfoContainer";
import ListOfAvatarPopUp from "../Components/Simple/ListOfAvatarPopUp";
import { FaCamera } from "react-icons/fa6";
import ProfilePic from "../Components/Simple/Profile/ProfilePic";

const PageInfo = () => {
  const [memberListStatus, setMemberListStatus] = useState(false);
  return (
    <ProfileInfoContainer>
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
        <h1 className="text-center capitalize">Page Name</h1>
        <span
          className="btnFill1 w-auto"
          onClick={() => setMemberListStatus((prev) => !prev)}
        >
          2.25k Followers
        </span>
        <p className="text-center text-grayColor text-sm leading-normal">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus
          ipsum quis ligula vulputate, at auctor orci ullamcorper.
        </p>
        <button className="btnFill1 w-auto min-w-[200px]">Follow</button>
      </div>

      {memberListStatus && (
        <ListOfAvatarPopUp
          title="Page Followers"
          setStatus={setMemberListStatus}
        />
      )}
    </ProfileInfoContainer>
  );
};

export default PageInfo;
