import React, { useState } from "react";
import NavBar from "./Components/Simple/NavBar";
import { Outlet } from "react-router-dom";
import OwnProfile from "./Sidebars/OwnProfile";
import CustomScrollBar from "./Components/Simple/CustomScrollBar";
import OtherProfile from "./Sidebars/OtherProfile";

const App = () => {
  const [ownProfileState, setOwnProfileState] = useState(false);
  const [otherProfileState, setOtherProfileState] = useState(false);
  return (
    <>
      <NavBar
        setOwnProfileState={setOwnProfileState}
        setOtherProfileState={setOtherProfileState}
      />
      <Outlet />
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
      <CustomScrollBar />
    </>
  );
};

export default App;
