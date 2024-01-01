import React, { useContext, useRef } from "react";
import SideBarAccordion from "../Components/Simple/SideBarAccordion";
import ScrollBar from "../Components/Simple/ScrollBar";
import hidePopUp from "../Components/CustomFunction/hidePopUp";
import { PageSideBarContext } from "../Providers/PageSideBarProvider";

const PageSideBar = () => {
  const { showHidePageSideBarState, setShowHidePageSideBarState } =
    useContext(PageSideBarContext);
  const boxRef = useRef(null);
  return (
    <div
      className={`popupWrapper ${
        showHidePageSideBarState
          ? "translate-x-0 opacity-100"
          : "-translate-x-full opacity-0"
      } commonAnim`}
      onClick={(e) => hidePopUp(e, boxRef, setShowHidePageSideBarState)}
    >
      <div
        className="bg-whiteColor w-[90%] max-w-[400px] absolute top-0 left-0 h-full shadow-2xl py-5 px-2 flex flex-col gap-4"
        ref={boxRef}
      >
        <button className="btnFill1">Create Page</button>
        <ScrollBar>
          <div className="w-full flex flex-col gap-5">
            <SideBarAccordion title="Page you manage" />
            <SideBarAccordion title="Your are liked in" />
          </div>
        </ScrollBar>
      </div>
    </div>
  );
};

export default PageSideBar;
