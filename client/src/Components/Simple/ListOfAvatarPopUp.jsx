import React, { useEffect, useRef } from "react";
import Avatar1 from "./Avatar1";
import { hidePopUp } from "../../Constant/Constant";

const ListOfAvatarPopUp = ({ title, setStatus }) => {
  const boxRef = useRef(null);
  const wrapperRef = useRef(null);
  useEffect(() => {
    hidePopUp(wrapperRef, boxRef, setStatus);
  }, []);
  return (
    <section className="popupWrapper" ref={wrapperRef}>
      <div
        className="flex flex-col gap-4 bg-whiteColor shadow-2xl rounded-md w-[95vw] max-w-[450px] h-[95vh] max-h-[500px] p-5"
        ref={boxRef}
      >
        <h2 className="text-center capitalize">{title}</h2>
        <ul className="w-full flex flex-col gap-4 overflow-auto px-2">
          <li>
            <Avatar1 />
          </li>
          <li>
            <Avatar1 />
          </li>
          <li>
            <Avatar1 />
          </li>
          <li>
            <Avatar1 />
          </li>
          <li>
            <Avatar1 />
          </li>
          <li>
            <Avatar1 />
          </li>
          <li>
            <Avatar1 />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ListOfAvatarPopUp;
