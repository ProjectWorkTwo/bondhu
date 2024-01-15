import React, { useContext, useRef } from "react";
import { baseURL, bgDefault, imgbbBaseURL } from "../../../Constant/Constant";
import { FaCamera } from "react-icons/fa6";
import { Link, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import { ProfilePopUpContext } from "../../../Providers/ProfilePopUpProvider";
import { useGetGroupInfo } from "../../../customHooks/useGetGroupData";
import GroupInfo from "./GroupInfo";

const coverImg = `https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`;

const GroupCover = () => {
  const { groupName } = useParams();
  console.log(groupName);
  const { dataGroupInfo, isLoadingGroupInfo, refetchGroupInfo } =
    useGetGroupInfo(groupName);

  const coverImgRef = useRef(null);
  const { setOwnProfileState, setOtherProfileState } =
    useContext(ProfilePopUpContext);

  if (isLoadingGroupInfo) return "loading...";
  console.log(dataGroupInfo);

  const handleShowHideProfile = () => {
    // setOwnProfileState((prv) => true);
    setOtherProfileState((prv) => true);
  };

  const handleCoverImgChange = () => {
    console.log(`${baseURL}/updategroup/${groupName}`);
    axios
      .post(
        `${imgbbBaseURL}?key=${import.meta.env.VITE_IMGBB_API_KEY}`,
        { image: coverImgRef?.current?.files[0] },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((res) => {
        console.log(res?.data?.data?.url);
        axios
          .put(
            `${baseURL}/updategroup/${groupName}`,
            {
              groupCover: res?.data?.data?.url,
            },
            {
              headers: {
                ...JSON.parse(localStorage.getItem("authorData")),
              },
            }
          )
          .then((res) => {
            console.log(res);
            refetchGroupInfo();
            return Swal.fire({
              title: "Success",
              text: "Group cover updated successfully!",
              icon: "success",
            });
          });
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
    <section className="w-full rounded-b-lg flex flex-col overflow-hidden">
      <div className="w-full bg-primaryColor px-3 py-2 text-whiteColor text-base md:text-xl font-semibold flex justify-between items-center gap-2">
        <span className="w-full">
          Group Managed By
          <span
            className="w-full pl-2 underline font-extrabold cursor-pointer"
            onClick={handleShowHideProfile}
          >
            Full Name
          </span>
        </span>
        <form className="p-2" onChange={handleCoverImgChange}>
          <input
            type="file"
            name="profileCover"
            id="profileCover"
            hidden
            ref={coverImgRef}
          />
          <label
            htmlFor="profileCover"
            className="flex-shrink-0 size-10 rounded-full border-2 border-primaryColor grid place-items-center bg-whiteColor hover:bg-primaryColor text-primaryColor hover:text-whiteColor cursor-pointer"
          >
            <FaCamera className="text-xl" />
          </label>
        </form>
      </div>
      <div
        className="w-full min-h-[400px]"
        style={{
          ...bgDefault(dataGroupInfo?.groupCover || coverImg),
        }}
      ></div>
    </section>
  );
};

export default GroupCover;
