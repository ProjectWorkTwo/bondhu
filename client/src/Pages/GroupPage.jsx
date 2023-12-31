import React, { useState } from "react";
import GroupSideBar from "../Sidebars/GroupSideBar";
import { FaGear } from "react-icons/fa6";

const GroupPage = () => {
  const [showHideGroupSideBarState, setShowHideGroupSideBarState] =
    useState(false);
  return (
    <section>
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
    </section>
  );
};

export default GroupPage;
