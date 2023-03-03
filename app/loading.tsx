import React from "react";

type Props = {};

function Loading({}: Props) {
  return (
    <div className="animate-pulse font-sans text-lg text-cyan-700 dark:text-cyan-100 text-center p-10">
      Loading Some Dose...
    </div>
  );
}

export default Loading;
