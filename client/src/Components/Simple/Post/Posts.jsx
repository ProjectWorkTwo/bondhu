import React from "react";
import Post from "./Post";

const Posts = () => {
  return (
    <div className="w-full max-w-xl mx-auto px-3 flex flex-col justify-center items-center gap-5">
      <Post />
      <Post />
    </div>
  );
};

export default Posts;
