import React from "react";
import { NavLink } from "react-router-dom";

const NavBarMobile = ({ tabsMobile }) => {
  return (
    <div className="mobileNavLinkCustomCSS md:hidden absolute overflow-hidden right-0 mt-1 w-[220px] flex flex-col bg-whiteColor rounded-md shadow-2xl justify-between items-center divide-y-2 divide-secondaryColor border">
      {tabsMobile.map(({ text, link, icon }, i) => (
        <React.Fragment key={i}>
          {link ? (
            <NavLink to={link} className="navMobileTab">
              <span className="navMobileTabIcon">{icon}</span>
              <span className="text-base text-primaryColor capitalize">
                {text}
              </span>
            </NavLink>
          ) : (
            <button to={link} className="navMobileTab">
              <span className="navMobileTabIcon">{icon}</span>
              <span className="text-base text-primaryColor capitalize">
                {text}
              </span>
            </button>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default NavBarMobile;
