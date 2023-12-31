import React, { useRef } from "react";
import ScrollBar from "../Components/Simple/ScrollBar";
import hidePopUp from "../Components/CustomFunction/hidePopUp";
import SideBarAccordion from "../Components/Simple/SideBarAccordion";

const GroupSideBar = ({
  showHideGroupSideBarState,
  setShowHideGroupSideBarState,
}) => {
  const boxRef = useRef(null);
  return (
    <div
      className={`popupWrapper ${
        showHideGroupSideBarState ? "translate-x-0" : "-translate-x-full"
      } commonAnim`}
      onClick={(e) => hidePopUp(e, boxRef, setShowHideGroupSideBarState)}
    >
      <div
        className="bg-whiteColor w-[90%] max-w-[400px] absolute top-0 left-0 h-full shadow-2xl py-5 px-2"
        ref={boxRef}
      >
        <ScrollBar>
          <div className="w-full flex flex-col gap-5">
            <SideBarAccordion title="Group you manage" />
            <SideBarAccordion title="Your are joined in" />
          </div>
        </ScrollBar>
      </div>
    </div>
  );
};

export default GroupSideBar;
