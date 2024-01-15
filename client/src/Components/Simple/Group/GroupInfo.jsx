import React, { useState } from "react";
import ListOfAvatarPopUp from "../ListOfAvatarPopUp";
import ProfileInfoContainer from "./ProfileInfoContainer";
import {
  useGetGroupInfo,
  useGetGroupMembers,
} from "../../../customHooks/useGetGroupData";

const GroupInfo = ({ groupName }) => {
  const { dataGroupInfo, isLoadingGroupInfo, refetchGroupInfo } =
    useGetGroupInfo(groupName);
  const { dataGroupMembers, isLoadingGroupMembers, refetchGroupMembers } =
    useGetGroupMembers(groupName);
  const [memberListStatus, setMemberListStatus] = useState(false);

  if (isLoadingGroupInfo || isLoadingGroupMembers) return "Loading";

  const { bio, groupCover } = dataGroupInfo;
  return (
    <ProfileInfoContainer>
      <div className="w-full p-4 flex flex-col justify-center items-center gap-3">
        <h1 className="text-center capitalize">
          {groupName.split("-").join(" ")}
        </h1>
        <span
          className="btnFill1 w-auto"
          onClick={() => setMemberListStatus((prev) => !prev)}
        >
          4.5k Members
        </span>
        <p className="text-center text-grayColor text-sm leading-normal">
          {bio}
        </p>
        <button className="btnFill1 w-auto min-w-[200px]">Join</button>
      </div>
      {memberListStatus && (
        <ListOfAvatarPopUp
          title="Group Members"
          setStatus={setMemberListStatus}
          data={dataGroupMembers}
        />
      )}
    </ProfileInfoContainer>
  );
};

export default GroupInfo;
