import React, { useState } from "react";
import CreatePostPopUp from "./CreatePostPopUp";

const CreatePost = () => {
  const [createPostStatus, setCreatePostStatus] = useState(false);
  return (
    <>
      <button
        className="btnFill1"
        onClick={() => setCreatePostStatus((prev) => true)}
      >
        Create Post
      </button>
      {createPostStatus && <CreatePostPopUp setStatus={setCreatePostStatus} />}
    </>
  );
};

export default CreatePost;
