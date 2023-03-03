"use client";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { SunIcon} from "@heroicons/react/24/outline";
import { MoonIcon } from "@heroicons/react/24/solid";

type Props = {};

function DarkModeButton({}: Props) {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div className="flex items-center justify-center rounded-full border p-1 border-cyan-800 dark:border-cyan-50">
      {currentTheme === "dark" ? (
        <SunIcon
          className="h-6 w-6 cursor-pointer text-cyan-50 hover:scale-110"
          onClick={() => setTheme("light")}
        />
      ) : (
        <MoonIcon className="h-6 w-6 cursor-pointer text-cyan-800 hover:scale-110" 
        onClick={() => setTheme("dark")}
        />
      )}
    </div>
  );
}

export default DarkModeButton;
