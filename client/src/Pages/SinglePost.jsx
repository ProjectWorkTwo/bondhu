import React from "react";
import Post from "../Components/Simple/Post/Post";

const SinglePost = () => {
  return (
    <div className="w-full h-full max-w-xl mx-auto py-5">
      <Post fullScreen={true} />
    </div>
  );
};

export default SinglePost;
