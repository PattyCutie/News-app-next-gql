"use client";
import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

type Props = {};

function SearchBar() {
  const [searchInput, setSearchInput] = useState("");
  const router = useRouter();

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!searchInput) return;

    router.push(`/search?result=${searchInput}`);
  };


  return (
    <form
      onSubmit={handleSearch}
      className="flex w-full mx-auto px-4 items-center justify-center gap-2"
    >
      <input
        type="text"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        placeholder="Search some Fresh Dose..."
        className="flex flex-[0.4] h-8 px-8  outline-none bg-transparent 
        placeholder:text-xs 
        md:placeholder:text-sm
        placeholder-cyan-800/50
       dark:placeholder-cyan-50/50
        dark:text-cyan-50 

        border-b 
        focus:border-cyan-800/50
        border-cyan-800/20
        dark:border-cyan-50/20
        focus:dark:border-cyan-50/50"
      />
      <button
        disabled={!searchInput}
        type="submit"
        className="disabled:bg-cyan-800/50 dark:disabled:bg-cyan-50/50
        disabled:cursor-not-allowed font-medium
        hover:scale-105 text-cyan-50 bg-cyan-800
        disabled:text-cyan-50/50 dark:disabled:text-cyan-50/50
        dark:bg-cyan-50 dark:text-cyan-800 rounded-2xl 
         cursor-pointer p-1"
      >
       <MagnifyingGlassIcon className="w-4 h-4 md:w-6 md:h-6"/>
      </button>
    </form>
  );
}

export default SearchBar;
