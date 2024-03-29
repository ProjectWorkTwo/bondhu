import React, { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { BsThreeDots } from "react-icons/bs";
import ThreeDotPopUp from "./ThreeDotPopUp";
import { ProfilePopUpContext } from "../../../Providers/ProfilePopUpProvider";
import Avatar1 from "../Avatar1";
import GroupAvatar from "../GroupAvatar";
import { currentDate } from "../../../Constant/Constant";
import { AuthContext } from "../../../Providers/AuthProvider";

const userImg =
  "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?q=80&w=1530&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const PostTop = ({ setUpdateStatus, groupPost = false, pagePost }) => {
  const { authenticationState, setAuthenticationState, handleLogOut } =
    useContext(AuthContext);
  const { setOwnProfileState, setOtherProfileState } =
    useContext(ProfilePopUpContext);
  const threeDotRef = useRef(null);
  useEffect(() => {
    const handleClickEvent = (e) => {
      e.stopPropagation();
      if (!threeDotRef?.current?.contains(e.target))
        setThreeDotPopUpState((prev) => false);
    };
    document.addEventListener("click", handleClickEvent);
    return () => document.removeEventListener("click", handleClickEvent);
  }, []);

  const [threeDotPopUpState, setThreeDotPopUpState] = useState(false);
  const handleShowHideProfile = () => {
    // setOwnProfileState((prev) => true);
    setOtherProfileState((prev) => true);
  };
  return (
    <div className="flex justify-between items-center gap-4">
      {groupPost ? (
        <GroupAvatar
          separateCompo={false}
          avatarSize="size-16"
          date={currentDate()}
        />
      ) : (
        <Avatar1
          separateCompo={false}
          avatarSize="size-16"
          date={currentDate()}
          pagePost={pagePost}
        />
      )}
      <div className="threeDotComponent relative" ref={threeDotRef}>
        {authenticationState && (
          <span
            className={`cursor-pointer ${
              threeDotPopUpState && "bg-grayColor/10"
            } hover:bg-grayColor/10 size-10 rounded-full grid place-items-center`}
            onClick={() => setThreeDotPopUpState((prev) => !prev)}
          >
            <BsThreeDots className="text-2xl" />
          </span>
        )}
        {threeDotPopUpState && (
          <div className="absolute top-10 right-0">
            <ThreeDotPopUp
              setUpdateStatus={setUpdateStatus}
              setThreeDotPopUpState={setThreeDotPopUpState}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default PostTop;
