import React from "react";
import PageSideBarComplete from "../Sidebars/PageSideBarComplete";
import GroupCover from "../Components/Simple/Group/GroupCover";
import GroupInfo from "../Components/Simple/Group/GroupInfo";
import CreatePost from "../Components/Simple/CreatePost";
import Posts from "../Components/Simple/Post/Posts";
import Post from "../Components/Simple/Post/Post";
import PageCover from "../Components/Simple/Page/PageCover";
import PageInfo from "./PageInfo";

const SinglePage = () => {
  return (
    <section className="w-[95%] max-w-6xl flex flex-col">
      <PageSideBarComplete />
      <PageCover />
      <PageInfo />
      <section className="flex flex-col gap-5 py-5 w-full max-w-xl mx-auto">
        <CreatePost privacy={false} />
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

export default SinglePage;
