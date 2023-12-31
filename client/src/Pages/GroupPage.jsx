import React, { useState } from "react";
import GroupSideBar from "../Sidebars/GroupSideBar";
import { FaGear } from "react-icons/fa6";
import GroupCover from "../Components/Simple/Group/GroupCover";
import CreatePost from "../Components/Simple/CreatePost";
import Posts from "../Components/Simple/Post/Posts";
import GroupInfo from "../Components/Simple/Group/GroupInfo";

const GroupPage = () => {
  const [showHideGroupSideBarState, setShowHideGroupSideBarState] =
    useState(false);
  return (
    <section className="w-[95%] max-w-6xl flex flex-col">
      <GroupSideBar
        showHideGroupSideBarState={showHideGroupSideBarState}
        setShowHideGroupSideBarState={setShowHideGroupSideBarState}
      />
      <span
        className="fixed size-9 md:size-12 rounded-full bg-primaryColor border-primaryColor grid place-items-center text-whiteColor text-lg md:text-2xl right-2 bottom-2 cursor-pointer z-[9999]"
        onClick={() => setShowHideGroupSideBarState((prev) => !prev)}
      >
        <FaGear />
      </span>
      <GroupCover />
      <GroupInfo />
      <section className="flex flex-col gap-5 py-5 w-full max-w-xl mx-auto">
        <CreatePost privacy={false} />
        <Posts />
      </section>
    </section>
  );
};

export default GroupPage;
