import React from "react";

const Header = () => {
  return (
    <div className="flex items-center justify-between h-25 ">
      <h1 className="p-5 text-xl font-semibold ml-5">
        Hello, <br /> <span className="text-2xl font-bold">Shreya</span>{" "}
        <span className="text-2xl">👋</span>
      </h1>
      <button className="p-3 text-2xl font-bold bg-red-500 mr-10">
        Log Out
      </button>
    </div>
  );
};

export default Header;
