import React from "react";
import Accordion from "./Accordion";
import Avatar1 from "./Avatar1";

const SideBarAccordion = ({ title }) => {
  return (
    <div className="flex flex-col gap-5 px-2">
      <Accordion title={title}>
        <div className="flex flex-col gap-4">
          <Avatar1 />
          <Avatar1 />
          <Avatar1 />
          <Avatar1 />
          <Avatar1 />
        </div>
      </Accordion>
    </div>
  );
};

export default SideBarAccordion;
