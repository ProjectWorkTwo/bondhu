import React, { useRef, useState } from "react";
import hidePopUp from "../Components/CustomFunction/hidePopUp";
import SearchBox from "../Components/Simple/SearchBox/SearchBox";
import ScrollBar from "../Components/Simple/ScrollBar";
import Avatar1 from "../Components/Simple/Avatar1";

const SearchPopUp = ({ searchPopUpState, setSearchPopUpState }) => {
  const [searchResult, setSearchResult] = useState([]);
  const boxRef = useRef(null);
  return (
    <section
      className={`fixed top-0 left-0 w-full ${
        searchPopUpState ? "translate-x-0" : "translate-x-full"
      } h-screen commonAnim`}
      onClick={(e) => hidePopUp(e, boxRef, setSearchPopUpState)}
    >
      <div
        className={`absolute top-0 right-0 w-[95%] max-w-[650px] h-screen bg-whiteColor shadow-2xl p-5 flex flex-col gap-5`}
        ref={boxRef}
      >
        <SearchBox setSearchResult={setSearchResult} />
        <ScrollBar>
          {searchResult.length>0 && (
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 px-2">
              <Avatar1 />
              <Avatar1 />
              <Avatar1 />
              <Avatar1 />
              <Avatar1 />
            </div>
          )}
        </ScrollBar>
      </div>
    </section>
  );
};

export default SearchPopUp;
