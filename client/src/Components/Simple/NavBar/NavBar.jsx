import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { CgLogIn, CgLogOut } from "react-icons/cg";
import { GoHomeFill } from "react-icons/go";
import { FaPager } from "react-icons/fa";
import { MdGroups } from "react-icons/md";
import { FaBars } from "react-icons/fa";
import NavBarMobile from "./NavBarMobile";

const tabs = [
  {
    text: "home",
    link: "/",
    icon: <GoHomeFill />,
  },
  {
    text: "group",
    link: "/groups",
    icon: <MdGroups />,
  },
  {
    text: "page",
    link: "/pages",
    icon: <FaPager />,
  },
];
const tabsMobile = [
  ...tabs,
  {
    text: "login",
    link: "/login",
    icon: <CgLogIn />,
  },
  {
    text: "logout",
    link: null,
    icon: <CgLogOut />,
  },
];

const profilePic =
  "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbnxlbnwwfHwwfHx8MA%3D%3D";

const NavBar = ({
  setOwnProfileState,
  setSearchPopUpState,
  setOtherProfileState,
}) => {
  const [navMobileModeState, setNavMobileModeState] = useState(false);
  const navBarMobileRef = useRef(null);

  useEffect(() => {
    const handleClickEvent = (e) => {
      if (
        navBarMobileRef?.current &&
        !navBarMobileRef?.current.contains(e?.target)
      )
        setNavMobileModeState((prev) => false);
    };
    document.addEventListener("click", handleClickEvent);

    return () => document.removeEventListener("click", handleClickEvent);
  }, []);
  const handleLogOut = () => {};
  return (
    <div className="w-[full] grid grid-cols-2 md:grid-cols-3 justify-center items-center  px-5 py-2 bg-primaryColor gap-2">
      {/* onClick={() => setOwnProfileState((prev) => true)}
        onClick={() => setSearchPopUpState((prev) => true)}
        onClick={() => setOtherProfileState((prev) => true)} */}
      <Link
        to="/"
        className="w-fit text-2xl emd:text-3xl font-black text-whiteColor select-none"
      >
        Bondhu
      </Link>
      <div className="hidden md:flex justify-center items-center gap-4">
        {tabs.map(({ text, link, icon }, i) => (
          <Link key={i} to={link} className="navTabIcon">
            {icon}
          </Link>
        ))}
      </div>
      <div className="flex justify-end items-center gap-2">
        <div className="hidden md:flex justify-center items-center gap-2">
          <Link to="/login" className="navTabIcon">
            <CgLogIn />
          </Link>
          <div className="navTabIcon" onClick={handleLogOut}>
            <CgLogOut />
          </div>
        </div>
        <div
          className="navTabIcon"
          onClick={() => setOwnProfileState((prev) => true)}
        >
          <img src={profilePic} alt="" className="size-full object-cover" />
        </div>
        {navMobileModeState}
        <div className="relative block md:hidden" ref={navBarMobileRef}>
          <div
            className="navTabIcon"
            onClick={() => setNavMobileModeState((prev) => !prev)}
          >
            <FaBars />
          </div>
          {navMobileModeState && <NavBarMobile tabsMobile={tabsMobile} />}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
