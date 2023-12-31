import React, { useState } from "react";
import { FaGear } from "react-icons/fa6";
import PageSideBar from "../Sidebars/PageSideBar";

const PagePage = () => {
  const [showHidePageSideBarState, setShowHidePageSideBarState] =
    useState(false);
  return (
    <section>
      <PageSideBar
        showHidePageSideBarState={showHidePageSideBarState}
        setShowHidePageSideBarState={setShowHidePageSideBarState}
      />
      <span
        className="fixed size-9 md:size-12 rounded-full bg-primaryColor border-primaryColor grid place-items-center text-whiteColor text-lg md:text-2xl right-2 bottom-2 cursor-pointer z-[9999]"
        onClick={() => setShowHidePageSideBarState((prev) => !prev)}
      >
        <FaGear />
      </span>
      
    </section>
  );
};

export default PagePage;
