import React, { useContext } from "react";
import { bgDefault } from "../../../Constant/Constant";
import { ProfilePopUpContext } from "../../../Providers/ProfilePopUpProvider";
import { FaCamera } from "react-icons/fa6";

const coverImg = `https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`;

const GroupCover = () => {
  const { setOwnProfileState, setOtherProfileState } =
    useContext(ProfilePopUpContext);
  const handleHideShowAuthorProfile = () => {
    // setOwnProfileState((prev) => true);
    setOtherProfileState((prev) => true);
  };
  return (
    <section
      className="w-full min-h-[400px] rounded-b-lg flex flex-col justify-end items-end overflow-hidden"
      style={{
        ...bgDefault(coverImg),
      }}
    >
      <form className="p-2">
        <input type="file" name="profileCover" id="profileCover" hidden />
        <label
          htmlFor="profileCover"
          className="size-10 rounded-full border-2 border-primaryColor grid place-items-center bg-whiteColor hover:bg-primaryColor text-primaryColor hover:text-whiteColor cursor-pointer"
        >
          <FaCamera className="text-xl" />
        </label>
      </form>
    </section>
  );
};

export default GroupCover;
