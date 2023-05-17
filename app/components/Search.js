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
        <svg height="24" width="25" xmlns="http://www.w3.org/2000/svg"><path d="M10.609 0c5.85 0 10.608 4.746 10.608 10.58 0 2.609-.952 5-2.527 6.847l5.112 5.087a.87.87 0 01-1.227 1.233l-5.118-5.093a10.58 10.58 0 01-6.848 2.505C4.759 21.16 0 16.413 0 10.58 0 4.747 4.76 0 10.609 0zm0 1.74c-4.891 0-8.87 3.965-8.87 8.84 0 4.874 3.979 8.84 8.87 8.84a8.855 8.855 0 006.213-2.537l.04-.047a.881.881 0 01.058-.053 8.786 8.786 0 002.558-6.203c0-4.875-3.979-8.84-8.87-8.84z" fill="#0079ff"/></svg>
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
