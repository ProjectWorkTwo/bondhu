import React, { useRef } from "react";
import hidePopUp from "../../CustomFunction/hidePopUp";

const postImg =
  "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbnxlbnwwfHwwfHx8MA%3D%3D";

const PostImgDetails = ({ setStatus }) => {
  const boxRef = useRef(null);
  return (
    <section
      className="popupWrapper"
      onClick={(e) => hidePopUp(e, boxRef, setStatus, true)}
    >
      <img
        src={postImg}
        alt=""
        className="max-w-[90vw] max-h-[90vh] w-auto h-auto border-8 border-white object-contain  select-none cursor-pointer shadow-2xl rounded-md"
        ref={boxRef}
      />
    </section>
  );
};

export default PostImgDetails;
