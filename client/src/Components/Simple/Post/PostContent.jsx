import React from "react";
import { HiMiniViewfinderCircle } from "react-icons/hi2";

const postImg =
  "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?q=80&w=1530&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const PostContent = ({ setPostImgDetailsStatus }) => {
  return (
    <div className="w-full flex flex-col gap-2">
      <h2 className="text-secondaryColor text-lg md:text-2xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum,
        temporibus?
      </h2>
      <p className="text-sm text-grayColor leading-normal pb-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores minima
        corporis voluptates, voluptatem quod molestias repellat? Suscipit,
        eligendi perspiciatis? Necessitatibus nesciunt beatae quos numquam
        dolorem sed. Modi saepe, inventore ratione temporibus nesciunt at maxime
        vitae aspernatur. Voluptatem dolor ullam neque reiciendis saepe ex
        asperiores atque deleniti corporis, beatae, aspernatur eligendi.
      </p>
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
