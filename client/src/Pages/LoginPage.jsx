import React, { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "./Login.css";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import LoginSignUpSlider from "../Components/Simple/LoginSIgnUpSlider";

const LoginPage = () => {
  const [showHideState, setShowHideState] = useState(false);
  const [formData, setFormData] = useState({
    userNameOrEmail: "",
    password: "",
  });
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <section className="w-full h-full min-h-screen p-5 grid grid-cols-1 md:grid-cols-2 place-items-center gap-5 bg-secondaryColor relative">
      <span
        className="absolute top-0 left-0 w-full h-full bg-whiteColor z-0"
        style={{
          clipPath: `polygon(50% 0, 75% 38%, 50% 100%, 19% 100%, 0 93%, 0 0)`,
        }}
      ></span>

      <div className="relative z-10 w-full max-w-md min-h-[400px] p-5 shadow-2xl rounded-md flex flex-col justify-center items-center gap-5 bg-whiteColor">
        <h3 className="text-3xl md:text-5xl text-center font-extrabold select-none text-primaryColor">
          Welcome
        </h3>
        <form
          className="w-full flex flex-col justify-center items-start gap-3"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="userNameOrEmail"
            placeholder="Username or email"
            value={formData["userNameOrEmail"]}
            onChange={handleChange}
            className="input1"
          />

          <div className="w-full flex justify-between items-center gap-2 input1">
            <input
              type={showHideState ? "text" : "password"}
              placeholder="Password"
              name="password"
              value={formData["password"]}
              onChange={handleChange}
              className="input2"
            />
            <span
              className="flex-shrink-0 w-10 h-10 rounded-full grid place-items-center hover:bg-grayColor/20 cursor-pointer text-xl commonAnim"
              onClick={() => setShowHideState((prev) => !prev)}
            >
              {showHideState ? <FaEye /> : <FaEyeSlash />}
            </span>
          </div>
          <Link
            to="/signup"
            className="text-primaryColor underline text-sm select-none py-2"
          >
            Create An Account?
          </Link>
          <button className="btnFill1 w-full">Login</button>
        </form>
        <Link
          to="/"
          className="text-center w-full bg-primaryColor text-whiteColor px-3 py-2 rounded-md capitalize"
        >
          Visit Home Page
        </Link>
      </div>
      <div className="hidden md:block relative z-10 w-full max-w-md shadow-2xl">
        <LoginSignUpSlider />
      </div>
    </section>
  );
};

export default LoginPage;
