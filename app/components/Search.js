"use client";

import React, { useState } from "react";
import { useGithubContext } from "../context/GithubContext";


export const Search = () => {
  const { setActiveProfile, fetchProfile } = useGithubContext();
  const [inputValue, setInputValue] = useState("");

  const onChangeHandler = (e) => {
    setInputValue(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setActiveProfile(inputValue);
    fetchProfile(inputValue);
  };

  return (
    <div className="flex h-[70px] text-black dark:text-[#ffffff] bg-[#FEFEFE] dark:bg-[#1E2A47] rounded-lg mb-5 shadow-lg md:w-[730px] md:h-[69px]">
      <form
        className="flex justify-between items-center w-full"
        onSubmit={onSubmitHandler}
      >
        <div className="flex flex-row gap-5 pl-5 w-full">
          <img src="./assets/icon-search.svg" />
          <input
            className="bg-transparent grow mr-2 outline-none text-[11px] md:text-base placeholder-[#4B6A9B] dark:placeholder-[#ffffff] caret-[#0079FF]"
            name="userSearch"
            placeholder="Search Github username..."
            value={inputValue}
            onChange={onChangeHandler}
          />
        </div>
        <button
          className="bg-[#0079FF] hover:bg-[#60ABFF] text-white text-[12px] md:text-lg h-[70%] md:h-[80%] md:w-[15%] w-[30%] max-w-[120px] mr-3 md:mr-2 rounded-xl"
          type="submit"
        >
          Search
        </button>
      </form>
    </div>
  );
};
