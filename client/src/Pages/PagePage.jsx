import React from "react";
import PageSideBarComplete from "../Sidebars/PageSideBarComplete";
import Post from "../Components/Simple/Post/Post";
import Posts from "../Components/Simple/Post/Posts";

const PagePage = () => {
  return (
    <section className="w-[95%] max-w-6xl flex flex-col">
      <PageSideBarComplete />
      <section className="flex flex-col gap-5 py-5 w-full max-w-xl mx-auto">
        <Posts>
          <Post pagePost={true} />
          <Post pagePost={true} />
          <Post pagePost={true} />
          <Post pagePost={true} />
        </Posts>
      </section>
    </section>
  );
};

export default PagePage;
