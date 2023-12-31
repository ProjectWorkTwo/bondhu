import React from "react";
import { IoCopySharp } from "react-icons/io5";
import { MdEdit } from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";

const ThreeDotPopUp = ({ setUpdateStatus, setThreeDotPopUpState }) => {
  const url = `http://localhost:5173/post/3`;
  const handleCopyLink = () => navigator.clipboard.writeText(url);
  const handleDelete = () => {};
  return (
    <div className="p-2 flex flex-col bg-whiteColor divide-y-2 divide-primaryColor border rounded-md shadow-lg w-[200px]">
      <div
        className="threeDotPopupButton"
        onClick={() => {
          handleCopyLink();
          setThreeDotPopUpState((prev) => false);
        }}
      >
        <IoCopySharp className="text-xl" /> Copy Link
      </div>
      <div
        className="threeDotPopupButton"
        onClick={() => {
          setThreeDotPopUpState((prev) => false);
          setUpdateStatus((prev) => !prev);
        }}
      >
        <MdEdit className="text-xl" /> Edit
      </div>
      <div
        className="threeDotPopupButton"
        onClick={() => {
          handleDelete();
          setThreeDotPopUpState((prev) => !prev);
        }}
      >
        <AiFillDelete className="text-xl" /> Delete
      </div>
    </div>
  );
};

export default ThreeDotPopUp;
