import React, { useEffect, useRef, useState } from "react";
import ScrollBar from "./ScrollBar";
import hidePopUp from "../CustomFunction/hidePopUp";
import { baseURL, imgbbBaseURL } from "../../Constant/Constant";
import Swal from "sweetalert2";
import axios from "axios";

const CreatePostPopUp = ({ setStatus, privacy = true }) => {
  const postImgRef = useRef(null);
  const [postData, setPostData] = useState({
    heading: "",
    postMessage: "",
    postPrivacy: "public",
  });
  const boxRef = useRef(null);
  const handleChange = (e) => {
    setPostData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = (e) => {
    console.log(import.meta.env.VITE_IMGBB_API_KEY);
    e.preventDefault();
    console.log(postData);
    // Swal.fire({
    //   title: "Good job!",
    //   text: "You clicked the button!",
    //   icon: "success",
    // });

    if (
      !postData["heading"] ||
      !postData["postMessage"] ||
      !postData["postPrivacy"] ||
      !postImgRef?.current?.files[0]
    ) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: '<a href="#">Why do I have this issue?</a>',
      });
    }

    axios
      .post(
        `${imgbbBaseURL}?key=${import.meta.env.VITE_IMGBB_API_KEY}`,
        { image: postImgRef?.current?.files[0] },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((res) => {
        // if (!email) return;
        const createPostData = {
          ...postData,
          postImg: res?.data?.data?.url,
        };
        console.log(createPostData);
      })
      .catch((error) =>
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error?.response?.data?.message || error.message,
        })
      );
  };
  return (
    <section
      className="popupWrapper"
      onClick={(e) => hidePopUp(e, boxRef, setStatus)}
    >
      <div
        className="flex flex-col gap-4 bg-whiteColor shadow-2xl rounded-md w-[95vw] max-w-[450px] h-auto max-h-[95vh] p-5"
        ref={boxRef}
      >
        <h2 className="text-center">Create Post</h2>
        <form
          className="w-full flex flex-col gap-4 overflow-hidden"
          onSubmit={handleSubmit}
        >
          <ScrollBar>
            <div className="w-full flex flex-col gap-4 px-2">
              <input
                type="text"
                name="heading"
                className="input1"
                placeholder="Post heading..."
                value={postData["heading"]}
                onChange={handleChange}
              />

              <input
                type="file"
                name="postImg"
                id="postImg"
                ref={postImgRef}
                hidden
              />
              <label htmlFor="postImg" className="btnFill1">
                Upload Images
              </label>

              <textarea
                name="postMessage"
                className="input1 min-h-[150px] resize-none"
                placeholder="Post content..."
                value={postData["postMessage"]}
                onChange={handleChange}
              />

              <div>
                <input
                  type="radio"
                  name="postPrivacy"
                  id="public"
                  value="public"
                  onChange={handleChange}
                  hidden
                />
                <input
                  type="radio"
                  name="postPrivacy"
                  id="friendsOnly"
                  value="friendsOnly"
                  onChange={handleChange}
                  hidden
                />
                {privacy && (
                  <div className="w-full flex gap-4">
                    <label
                      htmlFor="public"
                      className={`btnFill1 w-full flex gap-3 justify-center items-center commonAnim ${
                        postData["postPrivacy"] === "public"
                          ? "scale-90"
                          : "scale-100"
                      }`}
                    >
                      <span
                        className={`size-5 ${
                          postData["postPrivacy"] === "public"
                            ? "border-[6px]"
                            : "border-2"
                        }  border-whiteColor flex-grow-0 flex-shrink-0 block rounded-full commonAnim`}
                      ></span>
                      <span>Public</span>
                    </label>
                    <label
                      htmlFor="friendsOnly"
                      className={`btnFill1 w-full flex gap-3 justify-center items-center commonAnim ${
                        postData["postPrivacy"] !== "public"
                          ? "scale-90"
                          : "scale-100"
                      }`}
                    >
                      <span
                        className={`size-5 ${
                          postData["postPrivacy"] !== "public"
                            ? "border-[6px]"
                            : "border-2"
                        }  border-whiteColor flex-grow-0 flex-shrink-0 block rounded-full commonAnim`}
                      ></span>
                      <span>Friends only</span>
                    </label>
                  </div>
                )}
              </div>
            </div>
          </ScrollBar>
          <button type="submit" className="btnFill1">
            Create Post
          </button>
        </form>
      </div>
    </section>
  );
};

export default CreatePostPopUp;
