import React from "react";
import { FaCheck, FaTrash } from "react-icons/fa6";
import { Link } from "react-router-dom";

const userImg =
  "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?q=80&w=1530&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const Avatar1 = ({ showCTA = false, children }) => {
  return (
    <div className="w-full p-2 rounded-lg shadow-xl bg-whiteColor flex justify-start items-start gap-3">
      <Link
        to="/"
        className="flex-grow-0 flex-shrink-0 size-14 rounded-full overflow-hidden border-2 border-primaryColor"
      >
        <img src={userImg} alt="" className="size-full object-cover" />
      </Link>
      <div className="w-full flex flex-col gap-2">
        <div className="w-full flex flex-row justify-between items-center gap-2">
          <div className="flex flex-col">
            <h4 className="hover:underline text-primaryColor font-bold capitalize text-lg">
              <Link to="/">Full Name</Link>
            </h4>
            <p className="underline text-sm text-secondaryColor">
              <Link to="/">userName</Link>
            </p>
          </div>
          {showCTA && (
            <div className="flex justify-center items-center gap-2">
              <button className="size-7 md:size-9 rounded-full bg-primaryColor grid place-items-center p-1 text-whiteColor text-base md:text-lg">
                <FaCheck />
              </button>
              <button className="size-7 md:size-9 rounded-full bg-primaryColor grid place-items-center p-1 text-whiteColor text-base md:text-lg">
                <FaTrash />
              </button>
            </div>
          )}
        </div>
        {children}
      </div>
    </div>
  );
};

export default Avatar1;
