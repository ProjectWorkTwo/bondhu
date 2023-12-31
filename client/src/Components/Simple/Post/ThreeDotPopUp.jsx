import React from "react";
import Divider from "../Divider";

const ThreeDotPopUp = ({ setUpdateStatus }) => {
  return (
    <div className="p-2 flex flex-col bg-whiteColor border rounded-md shadow-lg w-[200px] gap-2">
      <div
        className="threeDotPopupButton"
        onClick={() => setUpdateStatus((prev) => !prev)}
      >
        Edit
      </div>
      <Divider />
      <div className="threeDotPopupButton">Delete</div>
    </div>
  );
};

export default ThreeDotPopUp;
