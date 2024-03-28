import { useEffect } from "react";

export const Loading = () => {
  useEffect(() => {
    document.title = "Loading...";
  }, []);
  
  return (
    <div className="flex justify-center items-center h-screen duration-700 bg-black">
      <div className="w-16 h-16 rounded-full border-8 border-gray-200 border-r-indigo-300 animate-loading">
      </div>
    </div>
  );
};
