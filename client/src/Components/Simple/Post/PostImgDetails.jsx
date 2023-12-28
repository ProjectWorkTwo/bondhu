import React, { useEffect, useRef } from "react";
import { hidePopUp } from "../../../Constant/Constant";

const postImg =
  "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbnxlbnwwfHwwfHx8MA%3D%3D";

const PostImgDetails = ({ setStatus }) => {
  const wrapperRef = useRef(null);
  const boxRef = useRef(null);
  useEffect(() => {
    hidePopUp(wrapperRef, boxRef, setStatus);
  }, []);
  return (
    <section className="popupWrapper" ref={wrapperRef}>
      <img
        src={postImg}
        alt=""
        className="max-w-[90vw] max-h-[90vh] w-auto h-auto border-8 border-white object-contain  select-none cursor-pointer shadow-2xl"
        ref={boxRef}
      />
    </section>
  );
};

export default PostImgDetails;
