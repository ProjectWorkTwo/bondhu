import React from "react";
import Avatar1 from "../Avatar1";
import { currentDate } from "../../../Constant/Constant";

const Comment = () => {
  return (
    <Avatar1 date={currentDate()}>
      <p className="text-grayColor text-sm leading-normal">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius
        leo non leo accumsan porttitor. Cras ornare purus quis libero tempor, id
        malesuada arcu consectetur.
      </p>
    </Avatar1>
  );
};

export default Comment;
