import React from "react";
import Profile from "./Profile";

const OwnProfile = ({ profileState, setProfileState, author }) => {
  return (
    <Profile
      profileState={profileState}
      setProfileState={setProfileState}
      author={author}
    />
  );
};

export default OwnProfile;
