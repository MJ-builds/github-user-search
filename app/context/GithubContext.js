"use client";
import React, { createContext, useContext, useState, useEffect } from "react";

//creating context
const GithubContext = createContext();

//create so that you don't need to always call useContext in other files
export const useGithubContext = () => {
  return useContext(GithubContext);
};

export const GithubProvider = ({ children }) => {
  const [profileData, setProfileData] = useState(null);
  const [activeProfile, setActiveProfile] = useState("Octocat");

  const [theme, setTheme] = useState("light");

  //Retrieving data for Github user selected by username
  const fetchProfile = async (username) => {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      const data = await response.json();
      setProfileData(data);
    } catch (error) {
      console.log("There was an error retrieving data: ", error);
    }
  };

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  useEffect(() => {
    document.documentElement.classList.add(theme);
    return () => {
      document.documentElement.classList.remove(theme);
    };
  }, [theme]);

  return (
    <GithubContext.Provider
      value={{
        activeProfile,
        setActiveProfile,
        fetchProfile,
        profileData,
        setProfileData,
        theme,
        toggleTheme
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};
