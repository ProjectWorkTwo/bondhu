import React from "react";
import GroupCover from "../Components/Simple/Group/GroupCover";
import GroupInfo from "../Components/Simple/Group/GroupInfo";
import CreatePost from "../Components/Simple/CreatePost";
import Posts from "../Components/Simple/Post/Posts";
import Post from "../Components/Simple/Post/Post";
import GroupSideBarComplete from "../Sidebars/GroupSideBarComplete";

const SingleGroup = () => {
  return (
    <section className="w-[95%] max-w-6xl flex flex-col">
      <GroupSideBarComplete />
      <GroupCover />
      <GroupInfo />
      <section className="flex flex-col gap-5 py-5 w-full max-w-xl mx-auto">
        <CreatePost privacy={false} />
        <Posts>
          <Post />
          <Post />
          <Post />
          <Post />
        </Posts>
      </section>
    </section>
  );
};

export default SingleGroup;
