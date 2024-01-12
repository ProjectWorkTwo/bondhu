import React, { useState } from "react";
import PostTop from "./PostTop";
import PostComment from "./PostComment";
import PostContent from "./PostContent";
import PostReaction from "./PostReaction";
import PostReactors from "./PostReactors";
import PostShareMember from "./PostShareMember";
import PostImgDetails from "./PostImgDetails";
import UpdatePostPopUp from "./UpdatePostPopUp";

const Post = ({ fullScreen = false, groupPost, pagePost }) => {
  const [reactorBoxStatus, setReactorBoxStatus] = useState(false);
  const [commentBoxStatus, setCommentBoxStatus] = useState(false);
  const [shareMemberBoxStatus, setShareMember] = useState(false);
  const [postImgDetailsStatus, setPostImgDetailsStatus] = useState(false);
  const [updateStatus, setUpdateStatus] = useState(false);
  return (
    <div className="w-full p-4 flex flex-col gap-2 rounded-md shadow-lg border border-opacity-50">
      <PostTop
        setUpdateStatus={setUpdateStatus}
        groupPost={groupPost}
        pagePost={pagePost}
      />
      <PostContent setPostImgDetailsStatus={setPostImgDetailsStatus} />
      <PostReaction
        setReactorBoxStatus={setReactorBoxStatus}
        setCommentBoxStatus={setCommentBoxStatus}
        setShareMember={setShareMember}
      />
      {reactorBoxStatus && (
        <PostReactors
          title="People who reacted"
          setStatus={setReactorBoxStatus}
        />
      )}
      {commentBoxStatus && <PostComment fullScreen={fullScreen} />}
      {shareMemberBoxStatus && (
        <PostShareMember title="People who shared" setStatus={setShareMember} />
      )}
      {postImgDetailsStatus && (
        <PostImgDetails setStatus={setPostImgDetailsStatus} />
      )}
      {updateStatus && <UpdatePostPopUp setStatus={setUpdateStatus} />}
    </div>
  );
};

export default Post;
