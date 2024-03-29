import React, {
  useContext,
  useEffect,
  useReducer,
  useRef,
  useState,
} from "react";
import { IoMdHeart } from "react-icons/io";
import { MdGroup, MdModeComment } from "react-icons/md";
import { FaShare } from "react-icons/fa";
import { RiGitRepositoryPrivateFill } from "react-icons/ri";
import { MdOutlinePublic } from "react-icons/md";
import { UnAuthorizeContext } from "../../../Providers/UnAuthorizeProvider";
import { AuthContext } from "../../../Providers/AuthProvider";

const PostReaction = ({
  setReactorBoxStatus,
  setCommentBoxStatus,
  setShareMember,
}) => {
  const {
    unAuthorizeState,
    setUnAuthorizeState,
    showUnAuthorizeState,
    hideUnAuthorizeState,
  } = useContext(UnAuthorizeContext);
  const { authenticationState, setAuthenticationState, handleLogOut } =
    useContext(AuthContext);
  const [shareMethodState, setShareMethodState] = useState(false);
  const shareComponentRef = useRef(null);
  const shareMethodRef = useRef(null);
  const shareIconRef = useRef(null);

  // to toggle whenever click outsite of the component
  useEffect(() => {
    const handleRemoveEvent = (e) => {
      if (!shareComponentRef?.current?.contains(e?.target))
        setShareMethodState((prev) => false);
    };
    document.addEventListener("click", handleRemoveEvent);
    return () => document.removeEventListener("click", handleRemoveEvent);
  }, []);

  const handleSharePublic = () => {
    console.log("Public");
  };
  const handleSharePrivate = () => {
    console.log("Private");
  };
  const handleShareGroup = () => {
    console.log("Group");
  };
  const shareTypes = [
    {
      text: "Public",
      icon: <MdOutlinePublic />,
      handleClick: handleSharePublic,
    },
    {
      text: "Private",
      icon: <RiGitRepositoryPrivateFill />,
      handleClick: handleSharePrivate,
    },
    {
      text: "Group",
      icon: <MdGroup />,
      handleClick: handleShareGroup,
    },
  ];
  const handleReactionState = (type) => {
    if (!authenticationState) return showUnAuthorizeState();
    switch (type) {
      case "likes":
        setReactorBoxStatus((prev) => true);
        break;
      case "comments":
        setCommentBoxStatus((prev) => !prev);
        break;
      case "shares":
        setShareMember((prev) => true);
        break;
    }
  };
  return (
    <div className="w-full flex flex-col justify-center items-center gap-2">
      <div className="w-full grid grid-cols-3 place-items-center text-center gap-3 underline text-xs sm:text-sm px-3 text-secondaryColor cursor-pointer select-none">
        <span onClick={() => handleReactionState("likes")}>55k likes</span>
        <span onClick={() => handleReactionState("comments")}>
          55k comments
        </span>
        <span onClick={() => handleReactionState("shares")}>55k shares</span>
      </div>
      <div className="w-full grid grid-cols-3 gap-3">
        <div
          className="w-full shadow-2xl border px-3 py-2 text-primaryColor rounded-md cursor-pointer grid place-items-center text-xl md:text-2xl hover:bg-primaryColor hover:text-whiteColor hover:border-primaryColor hover:scale-90 commonAnim"
          onClick={() => handleReactionState("likes")}
        >
          <IoMdHeart />
        </div>
        <div
          className="w-full shadow-2xl border px-3 py-2 text-primaryColor rounded-md cursor-pointer grid place-items-center text-xl md:text-2xl hover:bg-primaryColor hover:text-whiteColor hover:border-primaryColor hover:scale-90 commonAnim"
          onClick={() => handleReactionState("comments")}
        >
          <MdModeComment />
        </div>
        <div className="relative" ref={shareComponentRef}>
          <div
            className="w-full shadow-2xl border px-3 py-2 text-primaryColor rounded-md cursor-pointer grid place-items-center text-xl md:text-2xl hover:bg-primaryColor hover:text-whiteColor hover:border-primaryColor hover:scale-90 commonAnim"
            onClick={() => handleReactionState("shares")}
            ref={shareIconRef}
          >
            <FaShare />
          </div>
          {shareMethodState && (
            <div
              className={`absolute right-0 bottom-10 flex flex-col w-full min-w-[150px] divide-y-2 divide-primaryColor shadow-2xl p-2 bg-whiteColor rounded-md z-10 my-3`}
              ref={shareMethodRef}
            >
              {shareTypes.map(({ text, icon, handleClick }, i) => (
                <div
                  key={i}
                  className="w-full flex justify-start items-center gap-3 p-2 select-none cursor-pointer hover:bg-grayColor/10 capitalize text-base text-primaryColor"
                  onClick={handleClick}
                >
                  <span className="text-2xl">{icon}</span>
                  <span>{text}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PostReaction;
