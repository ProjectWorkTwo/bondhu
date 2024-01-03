import React, { useState } from "react";
import { MdEdit } from "react-icons/md";
import AboutUpdatePopUp from "./AboutUpdatePopUp";

const AboutComponent = ({
  fullName,
  bio,
  email,
  language,
  country,
  mobile,
  city,
  school,
  college,
  university,
}) => {
  const [aboutUpdatePopUpState, setAboutUpdatePopUpState] = useState(false);
  const info = {
    fullName,
    bio,
    email,
    language,
    country,
    mobile,
    city,
    school,
    college,
    university,
  };
  return (
    <div className="p-5 rounded-md shadow-2xl relative border">
      <span
        className="absolute top-1 right-1 w-12 h-12 rounded-full grid place-items-center text-primaryColor hover:text-whiteColor text-3xl cursor-pointer bg-whiteColor hover:bg-primaryColor border-4 border-primaryColor"
        onClick={() => setAboutUpdatePopUpState((prev) => true)}
      >
        <MdEdit />
      </span>
      <ul className="flex flex-col gap-4">
        {Object.entries(info).map(([text, value], i) => {
          if (value && text !== "fullName" && text !== "bio") {
            return (
              <li
                key={i + value}
                className={`flex gap-4 ${text !== "email" && "capitalize"}`}
              >
                <span className="text-primaryColor font-bold capitalize">
                  {text}:
                </span>
                <p className="text-secondaryColor">{value}</p>
              </li>
            );
          }
        })}
      </ul>

      {aboutUpdatePopUpState && (
        <AboutUpdatePopUp
          setStatus={setAboutUpdatePopUpState}
          info={
            (fullName, bio, country, language, mobile, city, school, college, university)
          }
          title="Update Data"
        />
      )}
    </div>
  );
};

export default AboutComponent;
