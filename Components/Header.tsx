import React from "react";
import Link from "next/link";
import { Bars3Icon, BeakerIcon } from "@heroicons/react/24/solid";
import { BellAlertIcon } from "@heroicons/react/24/outline";
import NavLinks from "../Components/NavLinks";
import SearchBar from "../Components/SearchBar";
import DarkModeButton from "./DarkModeButton";

type Props = {};

function Header({}: Props) {
  return (
    <header className="flex w-screen flex-col gap-4">
      <div className="flex p-4 items-center justify-center">
        <Bars3Icon className="h-8 w-8 cursor-pointer self-center" />
        <Link
          href="/"
          className="flex w-screen items-center justify-center hover:text-cyan-700 dark:hover:text-cyan-100"
        >
          <div className="flex flex-col">
            <h1 className="flex gap-2 leading-none uppercase font-sans text-lg md:2xl lg:text-4xl font-bold text-center">
              Vibe Dose
              <span className="flex items-center justify-center">
                <BeakerIcon className="w-6 h-6 md:w-8 md:h-8 cursor-pointer animate-pulse duration-1000" />
              </span>
            </h1>
            <p className="text-xs text-right text-cyan-700 dark:text-cyan-100 font-medium capitalize">
              Global Trendy News Topic
            </p>
          </div>
        </Link>
        <div className="flex items-center justify-end gap-2">
          <DarkModeButton />
          <button className="w-fit shadow-md text-sm font-medium hidden md:inline items-center justify-center text-cyan-50 bg-cyan-800 px-6 lg:px-8 py-1 lg:py-2 rounded-2xl dark:bg-cyan-50 dark:text-cyan-800 hover:scale-105 hover:bg-cyan-700 dark:hover:bg-cyan-100">
            Subscribe{" "}
          </button>
          <BellAlertIcon className="hover:scale-105 h-6 w-6 items-center justify-center md:hidden" />
        </div>
      </div>

      <NavLinks />

      <div
        className="flex rounded-full w-full h-[2px] items-center justify-center
      bg-gradient-to-r from-transparent via-cyan-800/80 to-transparent
      dark:bg-gradient-to-r dark:from-transparent dark:via-cyan-50/80 dark:to-transparent
      "
      />
      <SearchBar />
    </header>
  );
}

export default Header;
