import React from "react";
import { bgDefault } from "../../../Constant/Constant";
import { FaCamera } from "react-icons/fa";
const coverImg =
  "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const ProfileCover = () => {
  return (
    <section
      className={`relative w-full h-[350px] bg-['${coverImg}']`}
      style={{
        ...bgDefault(coverImg),
      }}
    >
      <form>
        <input type="file" name="profileCover" id="profileCover" hidden />
        <label
          htmlFor="profileCover"
          className="size-10 rounded-full border-2 border-primaryColor grid place-items-center absolute top-1 bottom-auto md:top-auto md:bottom-1 right-1 bg-whiteColor hover:bg-primaryColor text-primaryColor hover:text-whiteColor cursor-pointer"
        >
          <FaCamera className="text-xl" />
        </label>
      </form>
    </section>
  );
};

export default ProfileCover;
