import React, { useState } from "react";
import { HiMiniViewfinderCircle } from "react-icons/hi2";
import { BsTranslate } from "react-icons/bs";
import axios from "axios";

const postImg =
  "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?q=80&w=1530&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const PostContent = ({ setPostImgDetailsStatus }) => {
  const [postTitle, setPostTitle] = useState(
    `Your computer is not your computer anymore 😆`
  );
  const [postContent, setPostContent] = useState(
    `I am Abdus Shohid Shakil, a programmer and front-end developer with a deep passion for web technology. Currently studying Computer Science and Engineering (CSE) in Bangladesh, I have accumulated approximately two years of coding experience, with a specific focus on web development for the past year`
  );
  const [translationState, setTranslationState] = useState(false);
  const [loadingState, setLoadingState] = useState(false);
  const [translatedTitle, setTranslatedTitle] = useState("");
  const [translatedContent, setTranslatedContent] = useState("");
  const translateText = async (text) => {
    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${"bn"}&dt=t&q=${encodeURI(
      text
    )}`;

    let translatedData = await fetch(url);
    translatedData = await translatedData.json();
    return translatedData[0].reduce((acc, curr) => acc + curr[0], "");
  };
  const handleTranslationState = async () => {
    if (!translationState) {
      setLoadingState((prev) => true);
      const updatedTitle = await translateText(postTitle);
      const updatedContent = await translateText(postContent);
      setTranslatedTitle((prev) => updatedTitle);
      setTranslatedContent((prev) => updatedContent);
      setLoadingState((prev) => false);
    }
    setTranslationState((prev) => !prev);
  };
  return (
    <div className="w-full flex flex-col gap-3">
      <div className="w-full flex flex-col gap-2">
        <h2 className="text-secondaryColor text-lg md:text-2xl">{postTitle}</h2>
        <p className="text-sm text-grayColor leading-normal">{postContent}</p>
        <div className="flex justify-start items-center gap-4">
          <span
            className="px-3 py-1 rounded-full bg-primaryColor text-whiteColor text-base cursor-pointer flex gap-4 justify-center items-center w-fit select-none"
            onClick={handleTranslationState}
          >
            <BsTranslate />
            <span className="text-sm">Translate</span>
          </span>
          {loadingState && (
            <span className="size-5 rounded-full border-4 border-primaryColor border-t-transparent border-b-transparent animate-spin"></span>
          )}
        </div>
        {translationState && (
          <div className="w-full border-l-4 pl-2 flex flex-col gap-2">
            <h2 className="text-secondaryColor text-lg md:text-2xl">
              {translatedTitle}
            </h2>
            <p className="text-sm text-grayColor italic leading-relaxed">
              {translatedContent}
            </p>
          </div>
        )}
      </div>
      <div className="relative w-full max-h-[400px] bg-secondaryColor overflow-hidden rounded-md group">
        <img src={postImg} alt="" className="w-auto h-auto" />
        <div
          className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 translate-y-20 group-hover:translate-y-0 grid place-items-center bg-whiteColor/50 text-4xl cursor-pointer commonAnim"
          onClick={() => setPostImgDetailsStatus((prev) => true)}
        >
          <span className="w-14 h-14 rounded-full grid place-items-center bg-primaryColor text-whiteColor">
            <HiMiniViewfinderCircle />
          </span>
        </div>
      </div>
    </div>
  );
};

export default PostContent;
