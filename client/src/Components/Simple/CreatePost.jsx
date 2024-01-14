import React, { useContext, useState } from "react";
import CreatePostPopUp from "./CreatePostPopUp";
import { AuthContext } from "../../Providers/AuthProvider";

const CreatePost = ({ privacy }) => {
  const [createPostStatus, setCreatePostStatus] = useState(false);
  const { authenticationState, setAuthenticationState } =
    useContext(AuthContext);
  return (
    <>
      {authenticationState && (
        <button
          className="btnFill1"
          onClick={() => setCreatePostStatus((prev) => true)}
        >
          Create Post
        </button>
      )}
      {createPostStatus && (
        <CreatePostPopUp setStatus={setCreatePostStatus} privacy={privacy} />
      )}
    </>
  );
};

export default CreatePost;
