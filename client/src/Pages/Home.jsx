import React from "react";
import CreatePost from "../Components/Simple/CreatePost";
import Posts from "../Components/Simple/Post/Posts";

const Home = () => {
  return (
    <section className="w-full flex justify-center items-center gap-5">
      <div className="w-full max-w-xl py-4 flex flex-col gap-5">
        <CreatePost />
        <Posts />
      </div>
    </section>
  );
};

export default Home;
