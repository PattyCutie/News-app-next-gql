"use client";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {
  article: Article;
};

function ReadMoreBtn({ article }: Props) {
  const router = useRouter();

  //Create url
  const handleClick = () => {
    const queryString = Object.entries(article)
      .map(([key, value]) => `${key}=${value}`)
      .join("&");

    const readMoreUrl = `/article?${queryString}`;
    router.push(readMoreUrl);
  };

  return (
    <button
      onClick={handleClick}
      className="h-10 w-fit px-2 self-center rounded-2xl 
      border 
      border-cyan-50 dark:border-cyan-800  
      hover:bg-cyan-50 hover:text-cyan-800 
      hover:font-semibold dark:hover:bg-cyan-800
      dark:hover:text-cyan-100"
    >
      Read More
    </button>
  );
}

export default ReadMoreBtn;
