import React, { useState } from "react";
import ListOfAvatarPopUp from "../ListOfAvatarPopUp";
import ProfileInfoContainer from "./ProfileInfoContainer";

const GroupInfo = () => {
  const [memberListStatus, setMemberListStatus] = useState(false);
  return (
    <ProfileInfoContainer>
      <div className="p-4 flex flex-col justify-center items-center gap-3">
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
        <button className="btnFill1 w-auto min-w-[200px]">Join</button>
      </div>
      {memberListStatus && (
        <ListOfAvatarPopUp
          title="Group Members"
          setStatus={setMemberListStatus}
        />
      )}
    </ProfileInfoContainer>
  );
};

export default GroupInfo;
