import React from "react";

const NavBar = ({ setOwnProfileState, setOtherProfileState }) => {
  return (
    <div className="flex px-5 justify-between items-center">
      <button
        className="btnFill1"
        onClick={() => setOwnProfileState((prev) => true)}
      >
        Own Profile
      </button>
      <button
        className="btnFill1"
        onClick={() => setOtherProfileState((prev) => true)}
      >
        Other Profile
      </button>
    </div>
  );
};

export default NavBar;
