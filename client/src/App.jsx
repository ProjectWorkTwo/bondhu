import React, { useState } from "react";
import NavBar from "./Components/Simple/NavBar/NavBar";
import { Outlet } from "react-router-dom";
import OwnProfile from "./Sidebars/OwnProfile";
import CustomScrollBar from "./Components/Simple/CustomScrollBar";
import OtherProfile from "./Sidebars/OtherProfile";
import UnAuthorizePopup from "./Components/Simple/UnAuthorizePopup";
import SearchPopUp from "./Sidebars/SearchPopUp";

const App = () => {
  const [ownProfileState, setOwnProfileState] = useState(false);
  const [otherProfileState, setOtherProfileState] = useState(false);
  const [autorizePopUpState, setAutorizePopUpState] = useState(false);
  const [searchPopUpState, setSearchPopUpState] = useState(false);
  return (
    <>
      <NavBar
        setOwnProfileState={setOwnProfileState}
        setSearchPopUpState={setSearchPopUpState}
        setOtherProfileState={setOtherProfileState}
      />
      <section className="w-full flex justify-center items-center px-5">
        <Outlet />
      </section>
      <OwnProfile
        profileState={ownProfileState}
        setProfileState={setOwnProfileState}
        author={"own"}
      />
      <OtherProfile
        profileState={otherProfileState}
        setProfileState={setOtherProfileState}
        author={"other"}
      />
      <SearchPopUp
        searchPopUpState={searchPopUpState}
        setSearchPopUpState={setSearchPopUpState}
      />
      {autorizePopUpState && (
        <UnAuthorizePopup setStatus={setAutorizePopUpState} />
      )}
      <CustomScrollBar />
    </>
  );
};

export default App;
