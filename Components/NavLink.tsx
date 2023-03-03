import Link from "next/link";
import React from "react";

type Props = {
  category: string;
  isActive: boolean;
};

function NavLink({ category, isActive }: Props) {
  return (
    <Link
      href={`/news/${category}`}
      className={`navLink ${
        isActive &&
        "bg-cyan-800 text-cyan-50 dark:bg-cyan-50 dark:text-cyan-800 font-semibold scale-110"
      }`}
    >
      {category}
    </Link>
  );
}

export default NavLink;
