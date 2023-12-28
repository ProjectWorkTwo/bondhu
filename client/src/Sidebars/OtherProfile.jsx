import React from "react";
import Profile from "./Profile";

const OtherProfile = ({ profileState, setProfileState, author }) => {
  return (
    <Profile
      profileState={profileState}
      setProfileState={setProfileState}
      author={author}
    />
  );
};

export default OtherProfile;
