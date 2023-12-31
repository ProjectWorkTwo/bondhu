import React, { useEffect, useRef, useState } from "react";
import ScrollBar from "../ScrollBar";
import hidePopUp from "../../CustomFunction/hidePopUp";

const AboutUpdatePopUp = ({
  fullName,
  bio,
  country,
  mobile,
  city,
  school,
  college,
  university,
  setStatus,
  title,
}) => {
  const boxRef = useRef(null);
  const [userData, setUserData] = useState({
    fullName,
    bio,
    country,
    mobile,
    city,
    school,
    college,
    university,
  });
  const handleChange = (e) => {};
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section
      className="popupWrapper"
      onClick={(e) => hidePopUp(e, boxRef, setStatus, true)}
    >
      <div
        className="flex flex-col gap-1 bg-whiteColor shadow-2xl rounded-md w-[95vw] max-w-[450px] h-auto max-h-[95vh] p-5"
        ref={boxRef}
      >
        <h2 className="text-center capitalize">{title}</h2>
        <form
          className="w-full h-full flex flex-col gap-4 overflow-hidden"
          onSubmit={handleSubmit}
        >
          <ScrollBar>
            <div className="h-full flex flex-col gap-2 px-2">
              <input
                type="text"
                name="fullName"
                className="input1"
                placeholder="Full Name..."
                value={userData["fullName"]}
                onChange={handleChange}
              />
              <textarea
                name="bio"
                className="input1 min-h-[80px] md:min-h-[100px] resize-none"
                placeholder="Bio..."
                value={userData["bio"]}
                onChange={handleChange}
              />
              <input
                type="text"
                name="country"
                className="input1"
                placeholder="Country..."
                value={userData["country"]}
                onChange={handleChange}
              />
              <input
                type="number"
                name="mobile"
                className="input1"
                placeholder="Mobile..."
                value={userData["mobile"]}
                onChange={handleChange}
              />
              <input
                type="text"
                name="city"
                className="input1"
                placeholder="City..."
                value={userData["city"]}
                onChange={handleChange}
              />
              <input
                type="text"
                name="school"
                className="input1"
                placeholder="School..."
                value={userData["school"]}
                onChange={handleChange}
              />
              <input
                type="text"
                name="college"
                className="input1"
                placeholder="College..."
                value={userData["college"]}
                onChange={handleChange}
              />
              <input
                type="text"
                name="university"
                className="input1"
                placeholder="University..."
                value={userData["university"]}
                onChange={handleChange}
              />
            </div>
          </ScrollBar>
          <button type="submit" className="btnFill1">
            Create Post
          </button>
        </form>
      </div>
    </section>
  );
};

export default AboutUpdatePopUp;
