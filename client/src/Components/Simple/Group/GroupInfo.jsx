import React, { useState } from "react";
import ListOfAvatarPopUp from "../ListOfAvatarPopUp";

const GroupInfo = () => {
  const [memberListStatus, setMemberListStatus] = useState(false);
  return (
    <div className="w-[90%] max-w-[440px] mx-auto bg-whiteColor rounded-md shadow-lg -mt-28 relative z-10 flex flex-col justify-center items-center px-4 pb-4 border">
      <div className="p-4 flex flex-col justify-center items-center gap-2">
        <h1 className="text-center capitalize">Group Name</h1>
        <span
          className="btnFill1 w-auto"
          onClick={() => setMemberListStatus((prev) => !prev)}
        >
          4.5k Members
        </span>
        <p className="text-center text-grayColor text-sm leading-normal">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus
          ipsum quis ligula vulputate, at auctor orci ullamcorper.
        </p>
        <button className="btnFill1 w-auto min-w-28">Join</button>
      </div>
      {memberListStatus && (
        <ListOfAvatarPopUp
          title="Group Members"
          setStatus={setMemberListStatus}
        />
      )}
    </div>
  );
};

export default GroupInfo;
