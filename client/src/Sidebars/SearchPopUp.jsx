import React, { useRef, useState } from "react";
import hidePopUp from "../Components/CustomFunction/hidePopUp";
import SearchBox from "../Components/Simple/SearchBox/SearchBox";
import ScrollBar from "../Components/Simple/ScrollBar";
import Avatar1 from "../Components/Simple/Avatar1";

const coverImg =
  "https://images.unsplash.com/photo-1499540633125-484965b60031?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

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
        className={`absolute top-0 right-0 w-[95%] max-w-[650px] h-screen bg-whiteColor shadow-2xl flex flex-col gap-5`}
        ref={boxRef}
      >
        <div className="w-full h-[200px] overflow-hidden relative grid place-items-center">
          <img src={coverImg} alt="" className="w-full h-full object-cover" />
          <h2 className="absolute text-whiteColor select-none text-center">Find Your Friends</h2>
        </div>
        <section className="w-full px-5">
          <SearchBox setSearchResult={setSearchResult} />
          <ScrollBar>
            {searchResult.length > 0 && (
              <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 px-2">
                <Avatar1 />
                <Avatar1 />
                <Avatar1 />
                <Avatar1 />
                <Avatar1 />
              </div>
            )}
          </ScrollBar>
        </section>
      </div>
    </section>
  );
};

export default SearchPopUp;
