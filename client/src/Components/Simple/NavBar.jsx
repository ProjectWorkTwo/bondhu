import React from "react";

const NavBar = ({
  setOwnProfileState,
  setSearchPopUpState,
  setOtherProfileState,
}) => {
  return (
    <div className="w-[full] flex px-5 justify-between items-center">
      <button
        className="btnFill1"
        onClick={() => setOwnProfileState((prev) => true)}
      >
        Own Profile
      </button>
      <button
        className="btnFill1"
        onClick={() => setSearchPopUpState((prev) => true)}
      >
        Search
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
