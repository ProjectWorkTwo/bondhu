import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { BsThreeDots } from "react-icons/bs";
import ThreeDotPopUp from "./ThreeDotPopUp";

const userImg =
  "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?q=80&w=1530&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const PostTop = ({ setUpdateStatus }) => {
  const threeDotRef = useRef(null);
  useEffect(() => {
    const handleClickEvent = (e) => {
      e.stopPropagation();
      if (!threeDotRef?.current?.contains(e.target))
        setThreeDotPopUpState((prev) => false);
    };
    document.addEventListener("click", handleClickEvent);
    return () => document.removeEventListener("click", handleClickEvent);
  }, []);

  const [threeDotPopUpState, setThreeDotPopUpState] = useState(false);
  return (
    <div className="flex justify-between items-center gap-4">
      <div className="flex gap-2">
        <Link
          to="/"
          className="cursor-pointer size-16 rounded-full border-2 border-primaryColor overflow-hidden"
        >
          <img src={userImg} alt="" className="w-full h-full object-cover" />
        </Link>
        <div className="flex flex-col justify-center items-start gap-2">
          <h3 className="text-xl text-primaryColor font-bold">
            <Link to="/" className="hover:underline">
              Full Name
            </Link>
          </h3>
          <p className="text-grayColor text-sm select-none">
            <Link to="/post/3" className="underline">
              26 Dec 2023
            </Link>
          </p>
        </div>
      </div>
      <div className="threeDotComponent relative" ref={threeDotRef}>
        <span
          className={`cursor-pointer ${
            threeDotPopUpState && "bg-grayColor/10"
          } hover:bg-grayColor/10 size-10 rounded-full grid place-items-center`}
          onClick={() => setThreeDotPopUpState((prev) => !prev)}
        >
          <BsThreeDots className="text-2xl" />
        </span>
        {threeDotPopUpState && (
          <div className="absolute top-10 right-0">
            <ThreeDotPopUp
              setUpdateStatus={setUpdateStatus}
              setThreeDotPopUpState={setThreeDotPopUpState}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default PostTop;
