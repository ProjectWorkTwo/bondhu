import React, { useRef, useState } from "react";
import ScrollBar from "../ScrollBar";
import hidePopUp from "../../CustomFunction/hidePopUp";
import { countries, languages } from "../../../Constant/Constant";

const AboutUpdatePopUp = ({
  info: {
    fullName,
    bio,
    country,
    language,
    mobile,
    city,
    school,
    college,
    university,
  },
  setStatus,
  title,
}) => {
  const boxRef = useRef(null);
  const [userData, setUserData] = useState({
    fullName: "",
    bio: "",
    country: "",
    mobile: "",
    language: JSON.stringify(languages[0]),
    city: "",
    school: "",
    college: "",
    university: "",
  });

  const handleChange = (e) => {
    setUserData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userData);
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
                type="number"
                name="mobile"
                className="input1"
                placeholder="Mobile..."
                value={userData["mobile"]}
                onChange={handleChange}
              />
              <div className="flex">
                <label
                  htmlFor="country"
                  className="text-sm select-none bg-primaryColor text-whiteColor px-1  flex justify-start items-center"
                >
                  Country:
                </label>
                <select
                  name="country"
                  id="country"
                  className="input1 bg-whiteColor"
                  value={userData["country"]}
                  onChange={handleChange}
                >
                  {countries.map((item) => (
                    <option
                      key={item}
                      className="bg-whiteColor checked:bg-primaryColor checked:text-whiteColor"
                    >
                      {item}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex">
                <label
                  htmlFor="country"
                  className="text-sm select-none bg-primaryColor text-whiteColor px-1  flex justify-start items-center"
                >
                  Language:
                </label>
                <select
                  name="language"
                  id="language"
                  className="input1 bg-whiteColor"
                  value={userData["language"]}
                  onChange={handleChange}
                >
                  {languages.map(({ name, code }, i) => (
                    <option
                      key={i}
                      value={JSON.stringify({ name, code })}
                      className="bg-whiteColor checked:bg-primaryColor checked:text-whiteColor"
                    >
                      {name}
                    </option>
                  ))}
                </select>
              </div>
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
            Update
          </button>
        </form>
      </div>
    </section>
  );
};

export default AboutUpdatePopUp;
