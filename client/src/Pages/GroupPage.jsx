import React from "react";
import Posts from "../Components/Simple/Post/Posts";
import Post from "../Components/Simple/Post/Post";
import GroupSideBarComplete from "../Sidebars/GroupSideBarComplete";

const GroupPage = () => {
  return (
    <section className="w-[95%] max-w-6xl flex flex-col">
      <GroupSideBarComplete />
      <section className="flex flex-col gap-5 py-5 w-full max-w-xl mx-auto">
        <Posts>
          <Post groupPost={true}  />
          <Post groupPost={true} />
          <Post groupPost={true} />
          <Post groupPost={true} />
        </Posts>
      </section>
    </section>
  );
};

export default GroupPage;
