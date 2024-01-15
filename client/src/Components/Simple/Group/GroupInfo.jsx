import React, { useContext, useState } from "react";
import ListOfAvatarPopUp from "../ListOfAvatarPopUp";
import ProfileInfoContainer from "./ProfileInfoContainer";
import {
  useGetGroupInfo,
  useGetGroupMembers,
} from "../../../customHooks/useGetGroupData";
import { useParams } from "react-router-dom";
import { UpdateGroupPageFormContext } from "../../../Providers/UpdateGroupPageFormProvider";
import UpdatePageGroup from "../UpdateGroup";

const GroupInfo = () => {
  const { groupName } = useParams();
  const { dataGroupInfo, isLoadingGroupInfo, refetchGroupInfo } =
    useGetGroupInfo(groupName);
  const { dataGroupMembers, isLoadingGroupMembers, refetchGroupMembers } =
    useGetGroupMembers(groupName);
  const [memberListStatus, setMemberListStatus] = useState(false);

  const { updateGroupPageFormState, setUpdateGroupPageFormState } = useContext(
    UpdateGroupPageFormContext
  );

  if (isLoadingGroupInfo || isLoadingGroupMembers) return "Loading";

  const { bio } = dataGroupInfo;
  const handleUpdate = () => {
    setUpdateGroupPageFormState((prev) => "group");
  };
  return (
    <ProfileInfoContainer>
      <div className="w-full p-4 flex flex-col justify-center items-center gap-3">
        <h1 className="text-center capitalize">
          {groupName.split("-").join(" ")}
        </h1>
        <span
          className="btnFill1 w-auto flex flex-wrap gap-1"
          onClick={() => setMemberListStatus((prev) => !prev)}
        >
          {/* {dataGroupMembers?.length} */}
          <span>
            {dataGroupMembers?.length < 100
              ? dataGroupMembers?.length
              : (dataGroupMembers?.length / 100).toFixed(2) + "k"}
          </span>
          Members
        </span>
        <p className="text-center text-grayColor text-sm leading-normal">
          {bio}
        </p>
        <button className="btnFill1 w-auto min-w-[200px]">Join</button>
        <button
          className="btnFill1 w-auto min-w-[200px]"
          onClick={handleUpdate}
        >
          Update
        </button>
      </div>
      {memberListStatus && (
        <ListOfAvatarPopUp
          title="Group Members"
          setStatus={setMemberListStatus}
          data={dataGroupMembers}
        />
      )}
      {updateGroupPageFormState && <UpdatePageGroup />}
    </ProfileInfoContainer>
  );
};

export default GroupInfo;
