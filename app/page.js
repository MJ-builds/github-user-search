"use client";

import { Header } from "./components/Header";
import { Search } from "./components/Search";
import { ProfileInformation } from "./components/ProfileInformation";

import { GithubProvider, useGithubContext } from "./context/GithubContext";

import "@fontsource/space-mono";

export default function App() {
  return (
    <GithubProvider>
      <Home />
    </GithubProvider>
  );
}

function Home() {
  const {theme} = useGithubContext();

  return (
    <main
      className={`${theme} font-mono flex min-h-screen p-4 md:p-0 md:items-center justify-center bg-[#F6F8FF] text-[#697C9A] dark:text-[#ffffff] dark:bg-[#141D2F]`}
    >
      <div className="flex-row justify-center items-center w-auto">
        <Header />
        <Search />
        <ProfileInformation />
      </div>
    </main>
  );
}
