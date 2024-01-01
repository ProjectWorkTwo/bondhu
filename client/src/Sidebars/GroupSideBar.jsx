import React, { useContext, useRef } from "react";
import ScrollBar from "../Components/Simple/ScrollBar";
import hidePopUp from "../Components/CustomFunction/hidePopUp";
import SideBarAccordion from "../Components/Simple/SideBarAccordion";
import { GroupSideBarContext } from "../Providers/GroupSideBarProvider";

const GroupSideBar = () => {
  const { showHideGroupSideBarState, setShowHideGroupSideBarState } =
    useContext(GroupSideBarContext);
  const boxRef = useRef(null);
  return (
    <div
      className={`popupWrapper ${
        showHideGroupSideBarState
          ? "translate-x-0 opacity-100"
          : "-translate-x-full opacity-0"
      } commonAnim`}
      onClick={(e) => hidePopUp(e, boxRef, setShowHideGroupSideBarState)}
    >
      <div
        className="bg-whiteColor w-[90%] max-w-[400px] absolute top-0 left-0 h-full shadow-2xl py-5 px-2 flex flex-col gap-4"
        ref={boxRef}
      >
        <button className="btnFill1">Create Group</button>
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
