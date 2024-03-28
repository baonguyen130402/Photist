import { useEffect, useState } from "react";
import { preLoaderAnim } from "../animation";

export const PreLoader = () => {
  useEffect(() => {
    preLoaderAnim();
  }, []);

  // useEffect(() => {
  //   document.title = "Loadinggg...";
  // }, []);

  return (
    <div className="preloader h-screen w-full bg-black text-white fixed bottom-0 left-0 right-0 z-50 flex justify-center items-center overflow-hidden">
      <div className="texts-container flex items-center justify-around h-16 w-36 text-xl font-black overflow-hidden text-white">
        <span>Build</span>
        <span>For</span>
        <span>You</span>
      </div>
    </div>
  );
};
