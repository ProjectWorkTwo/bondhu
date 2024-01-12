import React, { useContext } from "react";
import { bgDefault } from "../../../Constant/Constant";
import { FaCamera } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { ProfilePopUpContext } from "../../../Providers/ProfilePopUpProvider";

const coverImg = `https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`;

const GroupCover = () => {
  const { setOwnProfileState, setOtherProfileState } =
    useContext(ProfilePopUpContext);
  const handleShowHideProfile = () => {
    // setOwnProfileState((prv) => true);
    setOtherProfileState((prv) => true);
  };
  return (
    <section className="w-full rounded-b-lg flex flex-col overflow-hidden">
      <div className="w-full bg-primaryColor px-3 py-2 text-whiteColor text-base md:text-xl font-semibold flex justify-between items-center gap-2">
        <span className="w-full">
          Group Managed By
          <span
            className="w-full pl-2 underline font-extrabold cursor-pointer"
            onClick={handleShowHideProfile}
          >
            Full Name
          </span>
        </span>
        <form className="p-2">
          <input type="file" name="profileCover" id="profileCover" hidden />
          <label
            htmlFor="profileCover"
            className="flex-shrink-0 size-10 rounded-full border-2 border-primaryColor grid place-items-center bg-whiteColor hover:bg-primaryColor text-primaryColor hover:text-whiteColor cursor-pointer"
          >
            <FaCamera className="text-xl" />
          </label>
        </form>
      </div>
      <div
        className="w-full min-h-[400px]"
        style={{
          ...bgDefault(coverImg),
        }}
      ></div>
    </section>
  );
};

export default GroupCover;
