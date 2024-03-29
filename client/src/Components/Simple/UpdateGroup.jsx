import React, { useContext, useRef, useState } from "react";
import { baseURL } from "../../Constant/Constant";
import hidePopUp from "../CustomFunction/hidePopUp";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";
import { useGetGroupInfo } from "../../customHooks/useGetGroupData";
import { UpdateGroupPageFormContext } from "../../Providers/UpdateGroupPageFormProvider";
import axios from "axios";

const UpdateGroup = () => {
  const { groupName } = useParams();
  const { updateGroupPageFormState, setUpdateGroupPageFormState } = useContext(
    UpdateGroupPageFormContext
  );
  const {
    dataGroupInfo: { bio },
    isLoadingGroupInfo,
    refetchGroupInfo,
  } = useGetGroupInfo(groupName);
  const [formData, setFormData] = useState({
    bio,
  });
  const boxRef = useRef(null);
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    if (!formData["bio"]) return;

    console.log(`${baseURL}/updategroup/${groupName}`);
    axios
      .put(
        `${baseURL}/updategroup/${groupName}`,
        {
          ...formData,
        },
        {
          headers: JSON.parse(localStorage.getItem("authorData") || "{}"),
        }
      )
      .then((res) => {
        const data = res.data;

        console.log(data);
        if (data?.error)
          return Swal.fire({
            icon: "error",
            title: "Oops...",
            text: data?.error,
          });

        refetchGroupInfo();
        setUpdateGroupPageFormState((prev) => "");
        return Swal.fire({
          title: "Success",
          text: "Post created successfully!",
          icon: "success",
        });
      });
  };

  return (
    <section
      className="popupWrapper"
      onClick={(e) =>
        hidePopUp(e, boxRef, setUpdateGroupPageFormState, true, "")
      }
    >
      <div
        ref={boxRef}
        className="flex flex-col gap-5 justify-center items-center bg-whiteColor shadow-2xl rounded-md w-[90vw] max-w-[450px] h-auto max-h-[95vh] px-5 py-8 relative"
      >
        <h2 className="capitalize text-center">Update Bio</h2>

        <form
          className="w-full flex flex-col gap-4 px-1"
          onSubmit={handleSubmit}
        >
          <textarea
            name="bio"
            className="input1 max-h-32"
            placeholder={`Update Bio...`}
            value={formData["bio"]}
            onChange={handleChange}
          />
          <button type="submit" className="btnFill1">
            Update
          </button>
        </form>
      </div>
    </section>
  );
};

export default UpdateGroup;
