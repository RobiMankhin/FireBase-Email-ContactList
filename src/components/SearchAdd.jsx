import React from "react";
import { BiSearch } from "react-icons/bi";
import { AiFillPlusCircle } from "react-icons/ai";

const SearchAdd = ({ onOpen, filtering }) => {
  return (
    <div className="flex gap-2">
      <div className="flex relative items-center flex-grow">
        <BiSearch className="ml-1 absolute text-white text-3xl" />
        <input
          onChange={filtering}
          className=" text-white pl-9 flex-grow h-10 bg-transparent rounded-md  border-[1px] border-solid border-white"
          type="text"
          placeholder="Search Contact"
        />
      </div>
      <AiFillPlusCircle
        className=" text-white text-5xl cursor-pointer"
        onClick={onOpen}
      />
    </div>
  );
};

export default SearchAdd;
